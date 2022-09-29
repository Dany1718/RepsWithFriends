import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import AuthStackScreens from './AuthStackScreens';

export default AppStackScreens = () => {
    const AppStack = createNativeStackNavigator();
    return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Auth" component={AuthStackScreens}/>
    </AppStack.Navigator>
  );
}