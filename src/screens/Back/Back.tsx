import React, { useState, useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { getLanguageReposUser, getReposUser, getUser } from '../../services/githubAPI';
import { UserContext } from '../../contexts/userContext';

import { styles } from './BackStyle';
import { TechCard } from '../../components/TechCard/TechCard';

export function Back() {
  const [languages, setLanguages] = useState<any>({});
  const UserContextValue = useContext(UserContext);
  const value = UserContextValue?.nickname || 'Not Found'

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const user = await getUser(value);
        const repos = await getReposUser(user.repos_url)

        const promises = repos.map(async (repo: any) => {
          const objLanguage = await getLanguageReposUser(value, repo.name);
          return objLanguage;
        });
    
        const languageRepos = await Promise.all(promises);


        const languages: any = {};
        // joins the objects into a single object, adding the values
        languageRepos.forEach(obj => {
          Object.keys(obj).forEach(keys => {
            if (languages[keys] !== undefined) {
              languages[keys] += obj[keys];
            } else {
              languages[keys] = obj[keys];
            }
          });
        });

        // console.log(languages);
        setLanguages(languages);
      } catch (error: any) {
        console.error(error.message);
      }
    };
    fetchRepos();
  }, []);

  let totalValue = 0
  Object.entries(languages).map(([key, value]) => (
    totalValue += Number(value) || 0
  ))

  const percent = (num: number) => {
    return ((num * 100) / totalValue).toFixed(2)
  }

  return (
    <View style={styles.container}>
      {Object.entries(languages)
      .sort(([, valueA], [, valueB]) => Number(valueB) - Number(valueA))
      .slice(0, 6)
      .map(([key, value]) => (
        <TechCard key={key} language={key} value={percent(Number(value))} />
      ))}
    </View>
  );
}