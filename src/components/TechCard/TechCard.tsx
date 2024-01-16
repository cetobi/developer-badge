import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './TechCardStyle';

export function TechCard(prop: any) {
    return (
        (prop.value > 0 && (
            <View style={styles.container}>
                <Text style={styles.textName}>
                    {prop.language !== undefined ? String(prop.language) : null}:
                </Text>
                <Text style={styles.textValue}>
                    {prop.value !== undefined ? String(prop.value) : null}%
                </Text>
            </View>
        ))
    );
}