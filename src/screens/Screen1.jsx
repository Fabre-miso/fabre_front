import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <Text>screen1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
});

export default Screen1;
