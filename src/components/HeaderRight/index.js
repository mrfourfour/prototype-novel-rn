import React from 'react'
import { View, Text, Image } from 'react-native'
import IconPressable from '../../atoms/IconPressable';
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
            <IconPressable
                name="search1"
                onPress={handleSearchButton}
                size={20}
                color={"#000000"}
            />
            <View style={{width: 15}}/>
            <ProfileImage navigation={navigation} size={30} />
        </View>
    )
}

export default HeaderRight;