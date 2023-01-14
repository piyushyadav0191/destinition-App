import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const MenuContainer = ({ title, imgSrc, type, setType }) => {
    const handlePress = () => {
        setType(title.toLowerCase())
    }
    return (
        <TouchableOpacity onPress={handlePress} className="items-center justify-center space-y-2">
            <View className={`w-24 h-24 p-2 shadow-sm rounded-full items-center justify-center ${type === title.toLowerCase() ? "bg-gray-300" : ""} `}>
                <Image source={imgSrc} className="w-full h-full object-contain" />
            </View>
            <Text className="text-[#00bcc9] text-xl font-semibold">{title} </Text>
        </TouchableOpacity>
    )
}

export default MenuContainer