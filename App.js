import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import Camera from './screens/Camera';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer style={{flex:1}}>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />

       <Stack.Screen
          name="Camera"
          component={Camera}
          options={{headerShown: false}}
        />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
