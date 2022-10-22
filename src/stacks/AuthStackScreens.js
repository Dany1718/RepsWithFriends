import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

export default AuthStackScreens = () => {
    const AuthStack = createNativeStackNavigator();
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="SignIn" component={SignInScreen}/>
            <AuthStack.Screen name="SignUp" component={SignUpScreen}/>
        </AuthStack.Navigator>
    );
}