import { View, Text, TouchableOpacity, Image } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ItemCardContainer = ({ imgSrc, title, location, data }) => {

    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('ItemScreen', { param: data })} className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[160px] my-2">
            <Image source={{ uri: imgSrc }} className="w-full h-40 rounded-md object-cover " />
            <Text className="text-[#428288] text-[18px] font-bold">
                {title?.length > 14 ? `${title.slice(0, 13)}.. ` : title}
            </Text>
            <View className="flex-row items-center space-x-1">
                <FontAwesome5 name="map-marker" size={24} color="#8597a2" />
                <Text className="text-[#428288] text-[14px] font-bold">
                    {location?.length > 17 ? `${location.slice(0, 17)}.. ` : location}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default ItemCardContainer