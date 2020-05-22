import React from 'react'
import { SafeAreaView, ScrollView} from 'react-native'
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import VideoList from '../../components/videos/videoList'

export const Home = () => {

    return (
        <SafeAreaView style={{flex: 1}}>
            <Header />
            <ScrollView>
                <Banner />
                <VideoList />
            </ScrollView>
        </SafeAreaView>
    )
}