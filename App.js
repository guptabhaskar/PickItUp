import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/Screens/LoginPage';
import Dashboard from './src/Screens/Dashboard';
import DisplayDeliveries from './src/Screens/DisplayDeliveries';
import DeliveriesToPick from './src/Screens/DeliveriesToPick';
import DeliveryView from './src/Screens/DeliveryView';


const Stack = createStackNavigator();

function NavStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{}} />
      <Stack.Screen name="Dashboard" component={Dashboard} options={{}} />
      <Stack.Screen name="Available Deliveries" component={DisplayDeliveries} options={{}} />
      <Stack.Screen name="Deliveries To Pick" component={DeliveriesToPick} options={{}} />
      <Stack.Screen name="Delivery Details" component={DeliveryView} options={{}} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
};

export default App;