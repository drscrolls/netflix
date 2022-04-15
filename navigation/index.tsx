/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import ComingSoonScreen from '../screens/ComingSoon/ComingSoonScreen';
import DownloadScreen from '../screens/Download/DownloadScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import MovieDetailsScreen from '../screens/MovieDetails/MovieDetailsScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps, HomeTabParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();


  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Home"
        component={MovieDetailsScreen}
        options={() => ({
          headerShown: false,
          tabBarIcon: ({ color }) =><AntDesign name="home" size={24} color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Coming_Soon"
        component={ComingSoonScreen}
        options={{
          title: 'Coming soon',
          tabBarIcon: ({ color }) => <MaterialIcons name="video-library" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <AntDesign name="search1" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Downloads"
        component={DownloadScreen}
        options={{
          title: 'Downloads',
          tabBarIcon: ({ color }) => <AntDesign name="download" size={24} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}


const HomeTabStack = createNativeStackNavigator<HomeTabParamList>();

function HomeTabNavigator() {
  return(
    <HomeTabStack.Navigator>
      <HomeTabStack.Screen
        name="Home"
        component={HomeScreen}
        options={
          {
            headerTitle: "Home"
          }
        }
      />
      <HomeTabStack.Screen
        name="MovieDetails"
        component={MovieDetailsScreen}
        options={
          {
            title : ''
          }
        }
      />
    </HomeTabStack.Navigator>
  );
  
}