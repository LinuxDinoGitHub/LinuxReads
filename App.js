import {React} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import BookLog from './BookLog';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="BookLog" component={BookLog} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

