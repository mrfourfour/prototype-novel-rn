import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import { Animated, View, TouchableOpacity, Text, ScrollView } from 'react-native'
import Home from '../../pages/Home'
import Ranking from '../../pages/Ranking'

const Tab = createMaterialTopTabNavigator()

function MyTabBar({ state, descriptors, navigation, position }) {
    return (
        <View>
            <ScrollView contentContainerStyle={{ backgroundColor: '#ffffff', paddingHorizontal: 16, justifyContent: "flex-start", alignItems: "flex-start" }} horizontal >
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            // The `merge: true` option makes sure that the params inside the tab screen are preserved
                            navigation.navigate({ name: route.name, merge: true });
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                            key={index}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ marginHorizontal: 8 }}
                        >
                            <Text style={{ color: isFocused ? "#000000" : "#c7c7c7", fontSize: 25, fontWeight: '700' }}>
                                {label}
                            </Text>
                            {isFocused && (<View style={{ backgroundColor: '#d1c4e9', height: 4 }} />)}
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>

    );
}

function RootTopTab() {
    return (
        <Tab.Navigator
            tabBar={MyTabBar}
            screenOptions={{
                swipeEnabled: false,
                lazy: true,
                backBehavior: "none",
            }}
        >
            <Tab.Screen name="Home" component={Home} options={{
                title: "홈",
                // tabBarLabel: () => <Text style={{ textAlign: 'center', width: 200}}> Hi</Text>
            }} />
            <Tab.Screen name="Ranking" component={Ranking} options={{
                title: "랭킹",
            }} />
            <Tab.Screen name="Library" component={Ranking} options={{
                title: "내서재",
            }} />
            <Tab.Screen name="Free" component={Ranking} options={{
                title: "자유연재"
            }} />
            <Tab.Screen name="Premium" component={Ranking} options={{
                title: "프리미엄"
            }} />
            <Tab.Screen name="Board" component={Ranking} options={{
                title: "게시판"
            }} />
        </Tab.Navigator>
    )
}

export default RootTopTab