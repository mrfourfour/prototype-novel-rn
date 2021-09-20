import React from 'react'
import {
    View,
    Text
} from 'react-native'
import Header from '../../components/Header';


function Home() {
    return (
        <View style={{ flexDirection: 'column'}}>
            <Header />
            <Text>안녕하세요</Text> 
        </View>
    )
}

export default Home;