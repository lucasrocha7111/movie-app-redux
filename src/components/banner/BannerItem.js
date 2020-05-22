import React from 'react'
import { View, Image, Text } from 'react-native'
import BannerStyle from '../../styles/BannerStyle'
import { IMAGE_PATH } from '../../utils/constants'

const BannerItem = ( item ) => {

    return (
        <View>
            <Image style={[BannerStyle.imageBanner]} source={{uri: `${IMAGE_PATH}/${item?.data?.backdrop_path}`}} />
        </View>
    )
}

export default BannerItem