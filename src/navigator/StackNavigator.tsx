import {} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
import ConfigureLED from '../screens/ConfigureLED';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName = "Home"
        >
            <Stack.Screen
                name = "Home"
                component = { MainScreen }
            />
            <Stack.Screen
                name = "Config"
                component = { ConfigureLED }
            />
        </Stack.Navigator>
    );
}

export default StackNavigator;