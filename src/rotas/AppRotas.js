import React from 'react';

import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../telas/Produtores';
import MelhoresProdutores from '../telas/MelhoresProdutores';

const Tab = createBottomTabNavigator();

export function AppRotas() {
    return (
        <NavigationContainer>
            <Tab.Navigator >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Melhores Produtores" component={MelhoresProdutores} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}