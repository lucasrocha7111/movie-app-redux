import React from 'react'
import { SafeAreaView, ScrollView, View, Text } from 'react-native'
import { Provider } from 'react-redux'
import store from '../../store'
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'

export const Home = () => {

    return (
        <Provider store={store}>
            <SafeAreaView style={{flex: 1}}>
                <Header />
                <ScrollView>
                    <Banner />
                </ScrollView>
            </SafeAreaView>
        </Provider>
    )
}