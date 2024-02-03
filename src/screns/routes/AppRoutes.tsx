import React from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../LoginScreen';
import { SingupScreen } from '../SingupScreen';

const { Screen, Navigator } = createStackNavigator();

export function AppRoutes() {
    return (
        <NavigationContainer>
            <Navigator initialRouteName='Login' screenOptions={{ headerShown: false }} >
                <Screen name='Login' component={LoginScreen} />
                <Screen name='Singup' component={SingupScreen} />
            </Navigator>
        </NavigationContainer>
    );
}