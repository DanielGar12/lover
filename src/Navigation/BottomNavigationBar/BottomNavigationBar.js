import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../../screens/HomeScreen'
import SettingsScreen from '../../screens/SettingsScreen'
import ChatScreen from '../../screens/ChatScreen'
import MapScreen from '../../screens/MapScreen'
import CalendarScreen from '../../screens/CalendarScreen'
const Tab = createBottomTabNavigator();

const BottomNavigationBar = () => {

  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } 
          else if(route.name === 'Map'){
              iconName = focused ? 'map' : 'map-outline';
            }
            else if(route.name === 'Calendar'){
                iconName = focused ? 'calendar' : 'calendar-outline';
            }
            else if(route.name === 'Chat'){
              iconName = focused ? 'chatbubble' : 'chatbubble-outline';
            }
          else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          // Return the icon component
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'magenta',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: { paddingBottom: 5, fontSize: 15 },
        tabBarStyle: { padding: 5, height: 60 },
        headerShown: false,
      })}
    >
        <Tab.Screen name ={'Home'} component={HomeScreen}/>
        <Tab.Screen name={'Map'} component={MapScreen}/>
        <Tab.Screen name={'Calendar'} component={CalendarScreen}/>
        <Tab.Screen name = {'Chat'} component={ChatScreen}/>
        <Tab.Screen name={'Settings'} component={SettingsScreen}/>
        

    </Tab.Navigator>
  )
}

export default BottomNavigationBar