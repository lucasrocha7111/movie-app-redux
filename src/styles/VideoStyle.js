
import { StyleSheet } from 'react-native'
import * as Colors from './Colors'

const VideoStyle = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    title: {
        marginVertical: 20,
        paddingHorizontal: 20,
        fontSize: 16,
        fontWeight: "400"
    },
    titleItem: {
        fontSize: 26,
        fontWeight: "bold",
        marginVertical: 10
    },
    overview: {
        fontSize: 18
    },
    image: {
        width: '100%', 
        height: 200
    },
    videoItem: {
        width: 150, 
        height: 210, 
        backgroundColor: Colors.GRAY_MEDIUM, 
        justifyContent: 'center', 
        borderRadius: 6
    },
    touchableVideo: {
        marginLeft: 20, 
        paddingBottom: 5
    }
})

export default VideoStyle