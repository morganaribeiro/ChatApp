import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

// instância do Navegador de pilha
const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" headerMode="none">
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="SignUp" component={SignupScreen}/>             
            </Stack.Navigator>
        </NavigationContainer>
    )
}

