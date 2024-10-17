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
        <Stack.Navigator initialRouteName="MealCategories">
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealCategories" component={CategoriesScreen} />
        </Stack.Navigator>
        {/* <CategoriesScreen /> */}
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
