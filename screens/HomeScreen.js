import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'
import { HeroImage } from '../assets'


const HomeScreen = () => {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <SafeAreaView className="bg-white flex-1 relative">
            {/*First Section */}
            <View className="flex-row px-6 mt-8 items-center space-x-2">
                <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
                    <Text className="text-[#00bcc9] text-3xl font-semibold">Go</Text>
                </View>
                <Text className="text-[#2a2b4b] text-3xl font-semibold ">Destination</Text>
            </View>
            {/*Second Section */}
            <View className="px-6 mt-8 space-y-3">
                <Text className="text-[#3c6072] text-[42px]">Enjoy the Tour</Text>
                <Text className="text-[#00bcc9] text-[38px] font-semibold">Good Moments</Text>

                <Text className="text-[#3c6072]  text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam tempore </Text>
            </View>
            {/* Circle Section */}
            <View className="w-[300px] h-[300px] bg-[#00bcc9] rounded-full absolute bottom-[150px] -right-36">
            </View>
            <View className="w-[300px] h-[300px] bg-[#e99265] rounded-full absolute -bottom-28 -left-36">
            </View>

            {/*Image container */}
            <View className="flex-1 relative items-center justify-center">
                <Animatable.Image animation="fadeIn" easing='ease-in-out' source={HeroImage} className="h-[490px]  object-cover mt-40 " />
                <View className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00bcc9] rounded-full items-center justify-center">
                    <TouchableOpacity onPress={() => navigation.navigate("Discover")}>
                        <Animatable.View animation={"pulse"} easing="ease-in-out" iterationCount={"infinite"} className="w-20 h-20 items-center justify-center rounded-full bg-[#00bcc9]">
                            <Text className="text-gray-50 text-[#37px] font-semibold ">Go</Text>
                        </Animatable.View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen