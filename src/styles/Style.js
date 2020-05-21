
import { StyleSheet, Dimensions } from 'react-native'
import * as Colors from './Colors'

export const WIDTH = Dimensions.get('screen').width

export const Style = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    item: {
        width: WIDTH - 40, 
        maxHeight: 210, 
        marginHorizontal: 20, 
        marginBottom: 10, 
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
    image: {
        width: WIDTH - 40, 
        height: 210,
        backgroundColor: Colors.GRAY_MEDIUM, 
        marginRight: 10
    },
    menuItem: {
        color: Colors.BLACK,
        fontWeight: 'bold',
        fontSize: 18,
        width: '100%',
        textAlign: 'center',
        backgroundColor: Colors.GRAY_LIGHT,
        paddingVertical: 10,
    },
    menuItemActive: {
        color: Colors.WHITE,
        backgroundColor: Colors.PRIMARY,
    },
    active: {
        color: Colors.PRIMARY
    }
})