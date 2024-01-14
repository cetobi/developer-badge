import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getUser } from '../../services/githubAPI';

import { styles } from './FrontStyle';
import axios from 'axios';

export function Front() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  return (
    <View style={styles.container}>
        {user && <Text>{user.name}</Text>}
    </View>
  );
}