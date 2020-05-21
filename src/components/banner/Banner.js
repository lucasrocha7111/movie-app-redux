import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import BannerItem from './BannerItem'
import BannerStyle from '../../styles/BannerStyle'

const Banner = () => {

    const [data, setData] = useState([{id: 1}, {id: 2}, {id: 3}])
    return (
        <ScrollView horizontal style={BannerStyle.bannerContainer}>
            {data.map((d) => (
                <BannerItem />
            ))}
        </ScrollView>
    )
}

export default Banner