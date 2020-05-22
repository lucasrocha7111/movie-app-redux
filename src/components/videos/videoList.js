import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { View, ScrollView, Text, ActivityIndicator } from 'react-native'
import VideoStyle from '../../styles/VideoStyle'
import { VideoService } from '../../services/videos'
import VideoItem from './videoItem'
import { Creators as HeaderActions } from '../../store/ducks/menu'

const VideoList = ({ type, isFetching, dispatch }) => {

    const [genres, setGenres] = useState([])

    useEffect(() => {
        fetch()
    }, [type])

    async function fetch() {
        try {
            dispatch(HeaderActions.setIsFetching(true))
            const genreRes = await VideoService.genres(type)
            const videoRes = await VideoService.discover(type)
            // Handle genrers data
            const newGenres = genreRes.data?.genres.map((data) => {
                const videos = videoRes.data?.results ? videoRes.data.results.filter((d) => d.genre_ids.includes(data.id)) : []
                data['videos'] = videos
                return data
            })
            setGenres(newGenres)
            dispatch(HeaderActions.setIsFetching(false))
        } catch(err) {
            console.log('err video list', err)
        }
        
    }
    return (
        <View>
            {isFetching
            ? <ActivityIndicator />
            : genres.map((data, index) => (
                <View key={index}>
                    <Text style={VideoStyle.title}>{data.name}</Text>
                    <ScrollView horizontal>
                        {data.videos.map((videos, index2) => (
                            <VideoItem key={index2} item={videos} />
                        ))}
                    </ScrollView>
                </View>
            ))
            }
        </View>
    )
}

export default connect((state) => ({ type: state.menu.typeSelected, isFetching: state.menu.isFetching}))(VideoList)