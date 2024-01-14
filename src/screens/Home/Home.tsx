import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { styles } from './HomeStyle';

export function Home() {
  return (
    <View style={styles.container}>
        <Text style={styles.h1}>Developer Badge</Text>

        <TextInput style={styles.input} placeholder='GitHub link...'/>

        <Text style={styles.button}>Create</Text>
    </View>
  );
}