import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  infoUser: {
    justifyContent:'space-between',
    alignItems: 'center',
    marginBottom: 40
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20
  },
  bio: {
    fontSize: 16,
    color: '#000',
  },
  avatar: {
    borderRadius: 200,
    width: 250,
    height: 250,
  },
  qrcode: {
    borderWidth: 5,
    borderRadius: 50,
    overflow: 'hidden',
    borderColor: '#000',
    padding: 20
    },
});