import React, { useState, useRef } from 'react'
import { View, TextInput, NativeModules, Modal, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux'
import { Creators as HeaderActions } from '../../store/ducks/menu'
import { Style } from '../../styles/Style'
import { VideoService } from '../../services/videos'

const Search = ({ type, searchText, dispatch }) => {

    const [data, setData] = useState([])
    const [searchFocus, setSearchFocus] = useState(false)
    const modalInput = useRef()
    let timeout = null
    const navigation = useNavigation()

    function changeText(value) {
        // Just a simple example using Native Module
        // It's not the best perfomance option in this case
        NativeModules.Search.setText(value)
        NativeModules.Search.getText((error, res) => {
            dispatch(HeaderActions.setSearchText(res))
        })
    }

    function typeOnSearchText(value) {
        changeText(value)
        if(value === '') {
            closeModal()
        } else {
            if(timeout) {
                clearTimeout(timeout)
            }
            timeout = setTimeout(() => {
                fetchSearch()
            }, 300)
        }
        
    }

    async function fetchSearch() {
        const res = await VideoService.search(searchText, type)
        setData(res.data.results)
    }

    function closeModal() {
        setSearchFocus(false)
        dispatch(HeaderActions.setSearchText(''))
        setData([])
    }

    return (
        <View style={Style.container}>
            <TextInput style={Style.textInput} placeholder='Search' value={searchText} onFocus={() => { setSearchFocus(true) }} onChangeText={(value) => { changeText(value) }} />
            <Modal
                animationType="slide"
                transparent={false}
                visible={(searchText !== '' || searchFocus) ? true : false}
                onRequestClose={() => {
                    console.log('')
                }}
                onShow={() => {
                    modalInput.current.focus()
                }}
            >
                <SafeAreaView>
                    <View style={[Style.container]}>
                        <View style={Style.closeContainer}>
                            <TouchableOpacity onPress={() => { closeModal() }}>
                                <Text style={Style.closeFont}>X</Text>
                            </TouchableOpacity>
                        </View>
                        
                        <TextInput ref={modalInput} style={Style.textInput} placeholder='Search' value={searchText} onChangeText={(value) => { typeOnSearchText(value) }} />
                        <ScrollView>
                            {data.map((d, index) => {
                                return <TouchableOpacity key={index} onPress={() => {
                                    closeModal()
                                    navigation.navigate('Detail', {title: d?.title || d?.name, overview: d?.overview, image: d?.backdrop_path || d?.poster_path })
                                }}>
                                    <Text style={Style.textSearch}>{d?.title || d?.name}</Text>
                                </TouchableOpacity>
                            })}
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </Modal>
        </View>
    )
}

export default connect((state) => ({ type: state.menu.typeSelected, searchText: state.menu.searchText }))(Search)