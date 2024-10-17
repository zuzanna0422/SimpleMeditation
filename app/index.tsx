import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'

import beachImage from '@/assets/meditation-images/beach.webp';
const App = () => {
  return (
    <View style={styles.container}>
        <ImageBackground 
        source={beachImage} 
        resizeMode='cover' 
        style={styles.imageBackground}>

      <Text style={styles.text}>App</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  }
});
export default App;