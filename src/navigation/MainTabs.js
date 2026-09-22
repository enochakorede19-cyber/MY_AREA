import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { Home, Package, Wallet, User } from "lucide-react-native";
import { COLORS } from "../theme/colors";
import HomeScreen from "../screens/HomeScreen";
import ActivityScreen from "../screens/ActivityScreen";
import WalletScreen from "../screens/WalletScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();
function Dot({ focused }) {
  return <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: focused ? COLORS.amber : "transparent", marginBottom: 4 }} />;
}

export default function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: COLORS.ink, tabBarInactiveTintColor: COLORS.inkSoft, tabBarStyle: { backgroundColor: COLORS.card, borderTopColor: COLORS.line, height: 78, paddingTop: 8 }, tabBarLabelStyle: { fontFamily: "Inter_600SemiBold", fontSize: 11 } }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ color, focused }) => <><Dot focused={focused} /><Home size={20} color={color} /></> }} />
      <Tab.Screen name="Orders" component={ActivityScreen} options={{ tabBarIcon: ({ color, focused }) => <><Dot focused={focused} /><Package size={20} color={color} /></> }} />
      <Tab.Screen name="Wallet" component={WalletScreen} options={{ tabBarIcon: ({ color, focused }) => <><Dot focused={focused} /><Wallet size={20} color={color} /></> }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: ({ color, focused }) => <><Dot focused={focused} /><User size={20} color={color} /></> }} />
    </Tab.Navigator>
  );
}
