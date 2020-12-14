import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateGift from './src/views/CreateGift';
import ShowGifts from './src/views/ShowGifts';
import EditGift from './src/views/EditGift';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Planner">
        <Stack.Screen name="Planner" component={ShowGifts} />
        <Stack.Screen name="Create Gift" component={CreateGift}/>
        <Stack.Screen name="Edit Gift" component={EditGift}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
