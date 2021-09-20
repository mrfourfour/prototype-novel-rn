import React from 'react'
import { Text, View } from 'react-native'
import IconPressable from '../../atoms/IconPressable'
import AdultSwitch from '../AdultSwitch'

function HeaderTitle({navigation}) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <IconPressable name="home" size={25} color="#000000" navigation={navigation} />
            <View style={{ width: 16 }} />
            <AdultSwitch />
        </View>
    )
}

export default HeaderTitle