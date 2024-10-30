import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./Screens/WelcomeScreen";
import UserScreen from "./Screens/UserScreen";
import { Ionicons } from "@expo/vector-icons";

/*
import { createDrawerNavigator, type DrawerScreenProps } from "@react-navigation/drawer";

export type DrawerParamList = {
  Welcome: undefined;
  User: undefined;
};

export type UserScreenProps = DrawerScreenProps<DrawerParamList, "User">;
export type WelcomeScreenProps = DrawerScreenProps<DrawerParamList, "Welcome">;

const Drawer = createDrawerNavigator<DrawerParamList>();
*/

import {
  createBottomTabNavigator,
  type BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";

export type TabParamList = {
  Welcome: undefined;
  User: undefined;
};

export type UserScreenProps = BottomTabScreenProps<TabParamList, "User">;
export type WelcomeScreenProps = BottomTabScreenProps<TabParamList, "Welcome">;

const Tab = createBottomTabNavigator<TabParamList>();

export default function App() {
  return (
    /*
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="User"
        screenOptions={{
          headerStyle: { backgroundColor: "#3c0a6b" },
          headerTintColor: "white",
          drawerActiveBackgroundColor: "#f0e1ff",
          drawerActiveTintColor: "#3c0a6b",
          // drawerStyle: { backgroundColor: "#ccc" },
        }}
      >
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            drawerLabel: "Welcome Screen",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
    */
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="User"
        screenOptions={{
          headerStyle: { backgroundColor: "#3c0a6b" },
          headerTintColor: "white",
          tabBarActiveTintColor: "#3c0a6b",
        }}
      >
        <Tab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
