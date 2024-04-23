import React from "react";
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
import WelcomeView from "./src/view/WelcomeView";
import { Ionicons } from "@expo/vector-icons";
import FonLaneCalculateView from "./src/view/FonLaneCalculateView";
import FonLaneResultView from "./src/view/FonLaneResultView";
import PremiumResultView from "./src/view/PremiumResultView";
import Affirmations from "./src/view/Affirmations";
import SettingsView from "./src/view/settings/SettingsView";
import { ThemeProvider, useTheme } from "./src/providers/ThemeContext";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ThemeProvider>
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
          <Stack.Screen
            name="Affirmations"
            component={Affirmations}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

const TabNavigator = () => {
  const { darkMode } = useTheme(); // Tema bağlamak

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 90,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: darkMode ? "black" : "white",
          position: "absolute",
          borderTopWidth: 0,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Ana Sayfa") {
            iconName = "home";
          } else if (route.name === "Gelen Kutusu") {
            iconName = "mail";
          } else if (route.name === "Social") {
            iconName = "people";
          } else if (route.name === "Ayarlar") {
            iconName = "settings";
          }

          const iconColor = color; // Renkleri doğrudan kullan

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
      <Tab.Screen
        name="Ayarlar"
        component={SettingsView}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
          tabBarActiveTintColor: "#8576FF",
        }}
      />
    </Tab.Navigator>
  );
};

export default App;
