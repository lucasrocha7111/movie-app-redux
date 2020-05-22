import React from 'react'
import { SafeAreaView, ScrollView} from 'react-native'
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import VideoList from '../../components/videos/videoList'
import Search from '../../components/search/Search'

export const Home = () => {

    return (
        <SafeAreaView style={{flex: 1}}>
            <Search />
            <Header />
            <ScrollView>
                <Banner />
                <VideoList />
            </ScrollView>
        </SafeAreaView>
    )
}