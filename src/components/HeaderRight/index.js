import React from 'react'
import { View, Text, Image } from 'react-native'
import CircularImage from '../../atoms/CircularImage';
import SearchButton from '../../atoms/SearchButton';
import ProfileImage from '../ProfileImage';

function HeaderRight({ navigation }) {
    const handleSearchButton = () => {
        console.log("TODO: handle to navigation search view")
    }

    return (
        <View style={{
            flexDirection: "row",
            alignItems: "center"
        }}>
            <SearchButton
                onPress={handleSearchButton}
                size={20}
                color={"#000000"}
            />
            <View style={{width: 8}}/>
            <ProfileImage navigation={navigation} size={30} />
        </View>
    )
}

export default HeaderRight;