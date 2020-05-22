import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { IMAGE_PATH } from '../../utils/constants'

const VideoItem = ( data ) => {

    
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('Detail', {title: data.item?.title, overview: data.item?.overview, image: data.item?.backdrop_path })
        }} style={[{ marginLeft: 20, paddingBottom: 5 }]}>
            <Image style={[{ width: 150, height: 210, backgroundColor: 'gray', justifyContent: 'center', borderRadius: 6 }]} source={{ uri: `${IMAGE_PATH}/${data?.item?.poster_path}`}} />
        </TouchableOpacity>
    )
}

export default VideoItem