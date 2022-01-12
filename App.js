
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ColorPalette from './screens/ColorPalette';
import Home from './screens/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={Home}
        />

        <Stack.Screen
          name="ColorPalette"
          component={ColorPalette}
          options={{title: 'Schema Color Palette'}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};




export default App; 