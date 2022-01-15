import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { BookDetail } from './screens/index';
import Tabs from './navigation/tabs';

const theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.color,
    border: 'transparent',
  },
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style = 'light'/>
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Home'}>
        {/* Tabs */}
        <Stack.Screen name="Home" component={Tabs} />

        {/* Screens */}
        <Stack.Screen
          name="BookDetail"
          component={BookDetail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}
