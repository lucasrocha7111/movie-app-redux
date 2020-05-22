import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { IMAGE_PATH } from '../../utils/constants'
import VideoStyle from '../../styles/VideoStyle'

const VideoItem = ( data ) => {

    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('Detail', {title: data.item?.title, overview: data.item?.overview, image: data.item?.backdrop_path })
        }} style={VideoStyle.touchableVideo}>
            <Image style={[VideoStyle.videoItem]} source={{ uri: `${IMAGE_PATH}/${data?.item?.poster_path}`}} />
        </TouchableOpacity>
    )
}

export default VideoItem