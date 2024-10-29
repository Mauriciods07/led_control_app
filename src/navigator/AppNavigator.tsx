import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from '../screens/MainScreen';
import ConfigureLED from '../screens/ConfigureLED';
import StackNavigator from './StackNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export type StackParamList = {
    Home: undefined;
    ConfigureLED: undefined;
}

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
                name = "Home"
                component = { MainScreen }
                
            />
            <Stack.Screen
                name = "Config"
                component = { ConfigureLED }
            />
        </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;