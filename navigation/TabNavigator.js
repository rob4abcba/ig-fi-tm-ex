import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home.js"
import Search from "../screens/Search.js"
import Upload from "../screens/Upload.js"
import Activity from "../screens/Activity.js"
import Profile from "../screens/Profile.js"
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const TabNavigator = createBottomTabNavigator({
  Home: {
      screen: Home,
      navigationOptions: {
          tabBarLabel: " ",
          tabBarIcon: () => (
              <Ionicons name="ios-home" size={32} />
          )
      }
  },
  Search: Search,
  Upload: Upload,
  Profile: Profile,
  Activity: Activity,
});

export default createAppContainer(TabNavigator);