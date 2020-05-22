
import { StyleSheet } from 'react-native'
import * as Colors from './Colors'
import { WIDTH } from './Style'

const BannerStyle = StyleSheet.create({
    bannerContainer: {
        marginBottom: 20
    },
    imageBanner: {
        width: WIDTH - 40,
        height: 210,
        marginHorizontal: 20,
        marginBottom: 10
    },
    shadow: {
        elevation: 2,
        shadowColor: Colors.BLACK,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.20,
        shadowRadius: 7.41,
    },
})

export default BannerStyle