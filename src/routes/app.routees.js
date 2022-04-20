import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../pages/home/home';
import Search from '../pages/search/search';
import Download from '../pages/download/download';
import Perfil from '../pages/perfil/perfil';
import AntDesign from 'react-native-vector-icons/AntDesign';

export function Approutees() {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor:"#FFF",
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: '#151722',
                        opacity: 0.8,
                        borderTopColor: 'none',
                        fontWeight: 'bold',  
                    },
                    tabBarIcon: ({ color, size }) => {
                        let iconName;
                        switch (route.name) {
                            case 'Home':
                                iconName = 'home';
                                break;
                            case 'Search':
                                iconName = 'search1';
                                break;
                            case 'Download':
                                iconName = 'download';
                                break;
                            case 'Perfil':
                                iconName = 'user';
                                break;
                        }
                        return <AntDesign name={iconName} size={size} color={color} />;
                    },
                })}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    activeColor= "red"
                    options={{
                        tabBarLabel: 'Home',
                    }}
                />
                <Tab.Screen
                    name="Search"
                    component={Search}
                    options={{
                        tabBarLabel: 'Search',
                    }}
                />
                <Tab.Screen name="Download" component={Download}
                    options={{
                        tabBarLabel: 'Download',
                    }}
                />
                <Tab.Screen name="Perfil" component={Perfil}
                    options={{
                        tabBarLabel: 'Perfil',
                    }}

                />
            </Tab.Navigator>
        </NavigationContainer>

    );
}