import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { ScrollView } from 'react-native'
import BannerItem from './BannerItem'
import BannerStyle from '../../styles/BannerStyle'
import { VideoService } from '../../services/videos'

const Banner = ({ type }) => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch()
    }, [type])

    async function fetch() {
        try {
            const res = await VideoService.trends(type)
            setData(res.data.results)
        } catch(err) {
            console.log('error ', err)
        }
    }

    return (
        <ScrollView horizontal style={BannerStyle.bannerContainer}>
            {data.map((item, index) => (
                <BannerItem key={index} data={item} />
            ))}
        </ScrollView>
    )
}

export default connect((state) => ({ type: state.menu.typeSelected }))(Banner)