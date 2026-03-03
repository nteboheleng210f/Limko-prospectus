import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Faculties from './screens/Faculties';
import Courses from './screens/Courses';
import Quiz from './screens/Quiz';
import AboutUs from './screens/AboutUs';
import ContactUs from './screens/ContactUs';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#4A90E2' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'Home' }}
        />

        <Stack.Screen 
          name="Faculties" 
          component={Faculties} 
          options={{ title: 'Faculties' }}
        />

        <Stack.Screen 
          name="Courses" 
          component={Courses}
          options={({ route }) => ({
            title: route.params?.faculty?.name || 'Courses'
          })}
        />

        <Stack.Screen 
          name="Quiz" 
          component={Quiz} 
        />

        <Stack.Screen 
          name="AboutUs" 
          component={AboutUs} 
          options={{ title: 'About Us' }}
        />

        <Stack.Screen 
          name="ContactUs" 
          component={ContactUs} 
          options={{ title: 'Contact Us' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}