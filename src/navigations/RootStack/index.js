import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import HeaderRight from '../../components/HeaderRight';
import HeaderTitle from '../../components/HeaderTitle';
import RootTopTab from '../RootTopTab';

const Stack = createNativeStackNavigator()

function RootStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerTitle: ({navigation}) => (<HeaderTitle navigation={navigation} />),
            headerRight: ({navigation}) => (<HeaderRight navigation={navigation} />),
            headerShadowVisible: false,
        }}>
            <Stack.Screen name="RootTopTab" component={RootTopTab} />
        </Stack.Navigator>
    )
}

export default RootStack;

