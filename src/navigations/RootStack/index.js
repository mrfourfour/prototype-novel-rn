import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../../pages/Home';
import HeaderRight from '../../components/HeaderRight';
import HeaderTitle from '../../components/HeaderTitle';

const Stack = createNativeStackNavigator()

function RootStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerTitle: ({navigation}) => (<HeaderTitle navigation={navigation} />),
            headerRight: ({navigation}) => (<HeaderRight navigation={navigation} />),
            headerShadowVisible: false,
        }}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

export default RootStack;

