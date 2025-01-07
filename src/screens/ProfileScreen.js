import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => <View style={styles.screen}><Text>Profile</Text></View>;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;