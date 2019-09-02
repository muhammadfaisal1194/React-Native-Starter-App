import React from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import DashboardScreen from "./screens/DashboardScreen";
import AboutScreen from "./screens/AboutScreen";
import CustomDrawerComponent from "./screens/CustomDrawerComponent";

export default function App() {
  return (
    <AppContainer />
  );
}

const DashboardStackNavigator = createStackNavigator({
   Dashboard: DashboardScreen
});

const AboutStackNavigator = createStackNavigator(({
    About: AboutScreen
}));

const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: DashboardStackNavigator,
    About: AboutStackNavigator
},
    {

    contentComponent: CustomDrawerComponent
    }
 );

const AppContainer = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
