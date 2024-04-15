import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeView,
  LoginView,
  PremiumCalculateView,
  RegisterView,
} from "./src/view";

import CalculateView from "./src/view/CalculateView";

import MainLaneResutView from "./src/view/MainLaneResutView";
import SideLaneResultView from "./src/view/SideLaneResultView";
import WelcomeView from "./src/view/WelcomeView"; // Import the WelcomeView
import { Ionicons } from "@expo/vector-icons";
import FonLaneCalculateView from "./src/view/FonLaneCalculateView";
import FonLaneResultView from "./src/view/FonLaneResultView";
import PremiumResultView from "./src/view/PremiumResultView";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainLaneCalculate"
          component={CalculateView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FonLaneCalculate"
          component={FonLaneCalculateView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainLaneResult"
          component={MainLaneResutView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SideLaneResult"
          component={SideLaneResultView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FonLaneResult"
          component={FonLaneResultView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PremiumCalculate"
          component={PremiumCalculateView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PremiumResult"
          component={PremiumResultView}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const TabNavigator = () => {
  const [selectedTab, setSelectedTab] = useState("HomeTab");

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 90,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: "black",
          position: "absolute",
          borderTopWidth: 0,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "HomeTab") {
            iconName = "home";
          } else if (route.name === "InboxTab") {
            iconName = "mail";
          } else if (route.name === "SocialTab") {
            iconName = "people";
          }

          const iconColor = route.name === selectedTab ? "#8576FF" : "red";

          return <Ionicons name={iconName} size={size} color={iconColor} />;
        },
      })}
    >
      <Tab.Screen
        name="Ana Sayfa"
        component={HomeView}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          tabBarActiveTintColor: "#8576FF",
        }}
      />

      <Tab.Screen
        name="Gelen Kutusu"
        component={HomeView}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="mail" size={size} color={color} />
          ),
          tabBarActiveTintColor: "#8576FF",
        }}
      />
      <Tab.Screen
        name="Social"
        component={HomeView}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
          tabBarActiveTintColor: "#8576FF",
        }}
      />
    </Tab.Navigator>
  );
};

export default App;
