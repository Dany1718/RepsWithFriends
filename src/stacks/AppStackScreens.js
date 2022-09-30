import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { UserContext } from "../context/UserContext"
import AuthStackScreens from './AuthStackScreens';
import MainStackScreens from './MainStackScreens';
import LoadingScreen from '../screens/LoadingScreen';

export default AppStackScreens = () => {
    const AppStack = createNativeStackNavigator();
    const [user] = useContext(UserContext)

    return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
        {user.isLoggedIn === null ? (
            <AppStack.Screen name="Loading" component={LoadingScreen}/>
        ) : user.isLoggedIn ? (
          <AppStack.Screen name="Main" component={MainStackScreens}/>
        ) : (
          <AppStack.Screen name="Auth" component={AuthStackScreens}/>
        )}
     
    </AppStack.Navigator>
  );
} 