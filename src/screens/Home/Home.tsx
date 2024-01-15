import React, { useContext, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { UserContext } from '../../contexts/userContext';

import { styles } from './HomeStyle';

export function Home({ navigation }: any) {
  const [nickname, setNickname] = useState('')
  const userContext = useContext(UserContext);

  function navigateToFrontScreen() {
    const trimNickname = nickname.trim().toLowerCase();
    setNickname(trimNickname)

    if (trimNickname !== '') {
      userContext?.save(trimNickname)
      navigation.navigate('Bottom', { screen: 'Front' })
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Developer Badge</Text>

      <TextInput
        style={styles.input}
        placeholder='GitHub nickname...'
        value={nickname}
        onChangeText={(text) => setNickname(text)}
      />

      <Text style={styles.button} onPress={navigateToFrontScreen}>Create</Text>
    </View>
  );
}