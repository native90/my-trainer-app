/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import HeartIcon from '@/assets/icons/HeartIcon';
import HomeIcon from '@/assets/icons/HomeIcon';
import ProfileIcon from '@/assets/icons/ProfileIcon';
import {View} from 'eternative';
import HomeScreen from '@/screens/HomeScreen';
import ProfileScreen from '@/screens/ProfileScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProgressScreen from '@/screens/ProgressScreen';

export const Tab = createBottomTabNavigator();

export const TabBarIcon = ({focused, icon}: any) => {
  const Icon = icon;
  return (
    <View styleName="relative">
      <Icon
        width={24}
        height={24}
        style={{color: focused ? 'black' : '#ccc'}}
      />
    </View>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarLabelStyle: {color: 'black'},
        headerShown: false,
        tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon icon={HomeIcon} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Progress"
        component={ProgressScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon icon={HeartIcon} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon icon={ProfileIcon} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
