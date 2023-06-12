import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AccountScreen from '../screens/AccountScreen';
import PokedexScreen from '../screens/PokedexScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Favorite' component={FavoriteScreen}
                options={
                    {
                        tabBarLabel: "Favoritos",
                        tabBarIcon: ({color, size}) => (
                            <Icon name='heart' color={color} size={size} />
                        ),
                    }
                }
            />
            <Tab.Screen name='account' component={AccountScreen}
                options={
                    {
                        tabBarLabel: "account",
                        tabBarIcon: ({color, size}) => (
                            <Icon name='user' color={color} size={size} />
                        ),
                    }
                }
            />
            <Tab.Screen name='Pokedex' component={PokedexScreen} />
        </Tab.Navigator>
    )
}