import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { useTheme } from '../context/ThemeContext';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import InformationScreen from '../screens/InformationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HealthEducationScreen from '../screens/HealthEducationScreen';
import ExercisesScreen from '../screens/ExercisesScreen';
import DietaryAdviceScreen from '../screens/DietaryAdviceScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: colors.card },
        headerTitleStyle: { color: colors.text },
        headerTintColor: colors.text,
        tabBarStyle: {
          backgroundColor: colors.card,
          borderTopColor: colors.border,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.subText,
        tabBarIcon: ({ color, size }) => {
          let iconName = 'ellipse';
          if (route.name === 'Information') iconName = 'information-circle-outline';
          if (route.name === 'Home') iconName = 'home-outline';
          if (route.name === 'Profile') iconName = 'person-circle-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Information" component={InformationScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerStyle: { backgroundColor: colors.card },
        headerTitleStyle: { color: colors.text },
        headerTintColor: colors.text,
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Health Education" component={HealthEducationScreen} />
      <Stack.Screen name="Exercises" component={ExercisesScreen} />
      <Stack.Screen name="Dietary Advice" component={DietaryAdviceScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}
