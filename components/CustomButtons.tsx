import { View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface CustomButtonsProps {
    onPress: () => void;
    title: string;
    textStyles?: string;
    containerStyles?: string;
}
const CustomButtons = ({ onPress, title,  textStyles = "", containerStyles = ""}: CustomButtonsProps) => {
  return (
    <TouchableOpacity
    activeOpacity={0.7}
    onPress={onPress}
    className={`bg-white rounded-xl min-h-[62px] justify-center items-center ${containerStyles}`}>

      <Text className={`font-semibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButtons