import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface CustomButtonsProps {
    onPress: () => void;
    title: string;
    textStyles?: string;
    containerStyles?: string;
}
const CustomButtons = ({ onPress, title,  textStyles = "", containerStyles = ""}: CustomButtonsProps) => {
  return (
    <TouchableOpacity
    activeOpacity={0.7}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButtons