import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CreateScreen = () => <View style={styles.screen}><Text>Create</Text></View>;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CreateScreen;