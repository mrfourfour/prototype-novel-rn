import React from 'react'
import { Text, View } from 'react-native'
import AdultSwitch from '../AdultSwitch'

function Header() {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <Text>Prototype</Text>
            <AdultSwitch />
        </View>
    )
}

export default Header