import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import { Style } from '../../styles/Style'
import { Creators as HeaderActions }  from '../../store/ducks/menu'

const Header = ({ menu, dispatch }) => {

    return (
        <View style={Style.container}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                {menu.options.map((data, index) => (
                    <TouchableOpacity key={`${index}`} style={{flex: 1}} onPress={() => { dispatch(HeaderActions.setMenu(data.value)) }}>
                        <Text style={[Style.menuItem, (menu.typeSelected === data.value) ? Style.menuItemActive : null ]}>{data.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            
        </View>
    )
}

export default connect(state => ({ menu: state.menu }))(Header)