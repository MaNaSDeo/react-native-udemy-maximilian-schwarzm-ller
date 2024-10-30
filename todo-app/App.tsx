import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./Screens/WelcomeScreen";
import UserScreen from "./Screens/UserScreen";
import { Ionicons } from "@expo/vector-icons";
import { DrawerScreenProps } from "@react-navigation/drawer";

export type DrawerParamList = {
  Welcome: undefined;
  User: undefined;
};

export type UserScreenProps = DrawerScreenProps<DrawerParamList, "User">;
export type WelcomeScreenProps = DrawerScreenProps<DrawerParamList, "Welcome">;

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function App() {
  return (
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
  );
}

const styles = StyleSheet.create({});
