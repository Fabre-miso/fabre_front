import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Screen3 = () => {
  return (
    <View style={styles.container}>
      <Text>screen3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
});

export default Screen3;
