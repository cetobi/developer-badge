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

        const nameRepos = repos.map((repo: any) => repo.name)
        const languageRepos = []
        
        // get the languages used and add the variable
        for (let i = 0; i < nameRepos.length; i++) {
          const objLanguage = await getLanguageReposUser(value, nameRepos[i])
          languageRepos.push(objLanguage)
        }


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
    return Math.round((num * 100) / totalValue)
  }

  return (
    <View style={styles.container}>
      {Object.entries(languages).map(([key, value]) => (
        <TechCard language={key} value={percent(Number(value))} />
      ))}
    </View>
  );
}