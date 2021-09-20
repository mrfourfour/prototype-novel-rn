import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

const SearchButton = ({color, size, onPress}) => (
    <TouchableOpacity onPress={onPress} style={{margin: 8}}>
        <Icon name="search1" size={size} color={color} />
    </TouchableOpacity>
)

export default SearchButton