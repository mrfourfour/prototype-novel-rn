import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

const IconPressable = ({name, color, size, onPress}) => (
    <TouchableOpacity onPress={onPress} >
        <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
)

export default IconPressable