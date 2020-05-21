import React from 'react'
import { View, Image, Text } from 'react-native'
import BannerStyle from '../../styles/BannerStyle'

const BannerItem = () => {

    return (
        <View style={BannerStyle.shadow}>
            <Image style={[BannerStyle.imageBanner]} source={{uri: 'https://m.media-amazon.com/images/M/MV5BNjg4ODU0YWUtZTIzNy00NTBlLTg0MjctZjA1ODgyZTRmZmU1XkEyXkFqcGdeQW5pY2pt._V1_SY351_SX624_AL_.jpg'}} />
        </View>
    )
}

export default BannerItem