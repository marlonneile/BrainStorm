import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <Text>Home</Text>
      <Button title="OPEN NOTE" onPress={() => navigation.navigate('Note')} />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default Home;