import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../../pages/Home';
import HeaderRight from '../../components/HeaderRight';
import HeaderTitle from '../../components/HeaderTitle';

const Stack = createNativeStackNavigator()

function RootStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{
                headerTitle: ({navigation}) => (<HeaderTitle navigation={navigation} />),
                headerRight: ({navigation}) => (<HeaderRight navigation={navigation} />)
            }} />
        </Stack.Navigator>
    )
}

export default RootStack;

