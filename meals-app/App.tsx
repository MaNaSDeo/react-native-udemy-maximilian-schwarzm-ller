import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./Screens/CategoriesScreen";
import MealsOverviewScreen from "./Screens/MealsOverviewScreen";
import { type RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: FC = () => {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealCategories"
          screenOptions={{
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#351401" },
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return { title: catId };
            // }}
          />
          <Stack.Screen
            name="MealCategories"
            component={CategoriesScreen}
            options={{ title: "All Categories" }}
          />
        </Stack.Navigator>
        {/* <CategoriesScreen /> */}
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
