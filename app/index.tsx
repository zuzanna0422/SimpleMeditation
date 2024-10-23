import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import {StatusBar} from 'expo-status-bar';

import beachImage from '@/assets/meditation-images/beach.webp';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButtons from '@/components/CustomButtons';
const App = () => {
  return (
    <View className='flex-1'>
        <ImageBackground 
        source={beachImage} 
        resizeMode='cover' 
        className='flex-1'>
      
      <LinearGradient 
      className='flex-1'
      colors={['rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0.4)']} >
        <SafeAreaView className='flex-1 mx-5 my-12 justify-between'>
          <View>
            <Text className='text-center text-white text-4xl font-bold'>
              Simple Meditation
            </Text>
            <Text className='text-center text-white text-regular text-2xl mt-3'>
              Simplifying Meditation for Everyone
            </Text>
          </View>

          <View>
            <CustomButtons
            onPress={() => console.log("tap")}
            title="Get Started">
            </CustomButtons>
          </View>
          <StatusBar style='light' />
        </SafeAreaView>
      </LinearGradient>
      </ImageBackground>
    </View>
  )
}

export default App;