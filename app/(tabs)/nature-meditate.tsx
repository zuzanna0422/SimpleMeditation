import { View, Text, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'
import { StatusBar } from 'expo-status-bar'
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler'
import { MEDITATION_DATA } from '@/constants/MeditationData';
import MEDITATION_IMAGES from '@/constants/meditation-images';
import { LinearGradient } from 'expo-linear-gradient'

const NatureMeditate = () => {
  return (
    <GestureHandlerRootView>
    <View className='flex-1'>
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View className='mb-6'>
          <Text className='mb-3 text-gray-200 font-bold text-4xl text-left'>
            Welcome
          </Text>
          <Text className='text-indigo-100 text-xl font-medium'>Start your meditation practice</Text>
        </View>
        <View>
          <FlatList 
            data={MEDITATION_DATA}
            className='mb-20'
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <Pressable onPress={() => console.log("press")}
                className='h-48 my-3 rounded-md overflow-hidden'>
                  <ImageBackground 
                  source={MEDITATION_IMAGES[item.id - 1]}
                  resizeMode='cover'
                  className='flex-1 rounded-lg justify-center'>
                    <LinearGradient colors={["transparent", "rgba(0, 0, 0.8)"]}
                    className='flex-1 justify-center items-center'>
                    <Text className='text-gray-100 text-bold text-3xl'>
                    {item.title}</Text>
                    </LinearGradient>
                  </ImageBackground>
              </Pressable>
            )}
          />
        </View>
      </AppGradient>
      <StatusBar style='light' />
    </View>
    </GestureHandlerRootView>
  )
}

export default NatureMeditate