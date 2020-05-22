import React from 'react'
import { View, Text, Image } from 'react-native'
import { IMAGE_PATH } from '../../utils/constants'
import VideoStyle from '../../styles/VideoStyle'

const Detail = ( { route } ) => {

    console.log('props ', route.params)
    return (
        <View style={{flex: 1}}>
            <Image style={VideoStyle.image} source={{uri: `${IMAGE_PATH}/${route.params?.image}`}} />
            <View style={VideoStyle.container}>
                <Text style={[VideoStyle.titleItem]}>{route.params?.title}</Text>
                <Text style={[VideoStyle.overview]}>{route.params?.overview}</Text>
            </View>
        </View>
    )
}

export default Detail