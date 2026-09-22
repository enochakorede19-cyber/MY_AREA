import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabs from "./MainTabs";
import LocationScreen from "../screens/LocationScreen";
import AreaAIScreen from "../screens/AreaAIScreen";
import ShopScreen from "../screens/ShopScreen";
import ServicesScreen from "../screens/ServicesScreen";
import RidesScreen from "../screens/RidesScreen";
import NotificationsScreen from "../screens/NotificationsScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="AreaAI" component={AreaAIScreen} />
        <Stack.Screen name="Shop" component={ShopScreen} />
        <Stack.Screen name="Services" component={ServicesScreen} />
        <Stack.Screen name="Rides" component={RidesScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
