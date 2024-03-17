import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StartScreen from '@/screens/StartScreen';
import PutNameScreen from '@/screens/PutNameScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="PutName" component={PutNameScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
