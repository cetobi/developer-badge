import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { getUser } from '../../services/githubAPI';
import QRCode from "react-qr-code";

import { styles } from './FrontStyle';

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
    <>
      {user && (
        <View style={styles.container}>
          <View style={styles.infoUser}>
            <View>
              <Image style={styles.avatar}
                source={{
                  uri: user.avatar_url
                }}
              />
            </View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.bio}>{user.bio}</Text>
          </View>
          <View style={styles.qrcode}>
            <QRCode
              value={user.html_url}
              size={200}
            />
          </View>
        </View>
      )}
    </>
  );
}