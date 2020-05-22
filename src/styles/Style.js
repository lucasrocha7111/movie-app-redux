
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
    textInput: {
        borderRadius: 2,
        borderWidth: 0.5,
        borderColor: Colors.GRAY_MEDIUM,
        paddingVertical: 10,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    textSearch: {
        paddingVertical: 10,
        fontSize: 16
    },
    closeContainer: {
        flexDirection: 'row', 
        width: '100%', 
        justifyContent: 'flex-end',
        marginBottom: 4
    },
    closeFont: {
        fontSize: 28
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