import { View, Text, SafeAreaView, Image, StatusBar, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Avatar, Hotel, RestaurentIcon, Tour, Sad } from "../assets/index"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MenuContainer from '../components/MenuContainer';
import { FontAwesome } from '@expo/vector-icons';
import ItemCardContainer from '../components/ItemCardContainer';
import { getPlacesData } from '../api/index';

const Discover = () => {
    const navigation = useNavigation()
    const [type, setType] = useState("restaurent")
    const [isLoading, setIsloading] = useState(false)
    const [mainData, setMainData] = useState(false)
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    useEffect(() => {
        setIsloading(true);
        getPlacesData(lat, long, type).then(data => {
            setMainData(data)
            setInterval(() => {
                setIsloading(false)
            }, 2000)
        })
    }, [lat, long, type])


    return (
        <>
            <StatusBar />
            <SafeAreaView className="flex-1 bg-white relative">
                <View className="flex-row items-center justify-between px-8">
                    <View>
                        <Text className="text-[40px] text-[#0b646b] font-bold">Discover</Text>
                        <Text className="text=[#527283] text-[36px]">the Worderfull Today</Text>
                    </View>
                    <View className="w-12 h-12  rounded-md items-center justify-center shadow-lg ">
                        <Image source={Avatar} className="w-full h-full rounded-md object-cover" />
                    </View>
                </View>
                <View className="flex-row items-center bg-gray-300 mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
                    <GooglePlacesAutocomplete
                        GooglePlacesDetailsQuery={{ fields: "geometry" }}
                        placeholder='Search'
                        fetchDetails={true}
                        onPress={(data, details = null) => {
                            console.log(details?.geometry?.viewport);
                            setLat(details?.geometry?.viewport?.southwest.lat)
                            setLong(details?.geometry?.viewport?.northeast.lng)
                        }}
                        query={{
                            key: 'AIzaSyDWpuVw2apN-XgX3gmrzsHrZgr1AG4sCxQ',
                            language: 'en',
                        }}
                    />
                </View>
                {/* Menu Container */}
                <View>
                    <ScrollView>
                        <View className="flex-row items-center justify-center px-8 mt-8">
                            <MenuContainer key={"hotels"} title="Hotels" imgSrc={Hotel} type={type} setType={setType} />
                            <MenuContainer key={"attractions"} title="Attractions" imgSrc={Tour} type={type} setType={setType} />
                            <MenuContainer key={"restaurants"} title="Restaurents" imgSrc={RestaurentIcon} type={type} setType={setType} />
                        </View>
                        <View>
                            <View className="flex-row items-center justify-between px-4 mt-8">
                                <Text className="text-[#2c7379] text-[20px] font-bold">Top Tips</Text>
                                <TouchableOpacity className="flex-row items-center      justify-center space-x-2">
                                    <Text className="text-[#2c7379] text-[20px] font-bold">Explore</Text>
                                    <FontAwesome name="long-arrow-right" size={24} color="#a0bc4c" />
                                </TouchableOpacity>
                            </View>
                            <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
                                {mainData?.length > 0 ? <>
                                    {mainData?.map((data, i) => (
                                        <ItemCardContainer data={data} key={i} imgSrc={
                                            data?.photo?.images?.medium?.url ?
                                                data?.photo?.images?.medium?.url :
                                                'https://www.sagargairefastfoodcorner.com/images/address-img-01.jpg'

                                        } title={data?.name} location={data?.location_string} />
                                    ))}

                                </>
                                    :
                                    <>
                                        <View className="w-full h-[600px] items-center space-y-8 justify-center">
                                            <Image source={Sad} className="w-32 h-32 object-cover" />
                                        </View>
                                    </>
                                }
                            </View>
                        </View>
                    </ScrollView>
                    {isLoading ? <View className="flex-1 items-center justify-center">
                        <ActivityIndicator size="large" color="#ea4544" />
                    </View>
                        :
                        <ScrollView>
                            <ActivityIndicator size="large" color="#ea4544" />
                        </ScrollView>}

                </View>
            </SafeAreaView>
        </>
    )
}

export default Discover