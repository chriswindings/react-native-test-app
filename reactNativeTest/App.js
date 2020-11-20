import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateGift from './src/views/CreateGift';
import ShowGifts from './src/views/ShowGifts';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Show Gifts">
        <Stack.Screen name="Show Gifts" component={ShowGifts}/>
        <Stack.Screen name="Create Gift" component={CreateGift}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
