import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./Screens/WelcomeScreen";
import UserScreen from "./Screens/UserScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="User">
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerStyle: { backgroundColor: "#3c0a6b" },
            headerTintColor: "white",
            drawerLabel: "Welcome Screen",
            drawerActiveBackgroundColor: "#f0e1ff",
            drawerActiveTintColor: "#3c0a6b",
            drawerStyle: { backgroundColor: "#ccc" },
          }}
        />
        <Drawer.Screen name="User" component={UserScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
