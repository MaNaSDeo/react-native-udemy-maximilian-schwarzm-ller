import React, { FC } from "react";
import { FlatList, type ListRenderItemInfo } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CATEGORIES } from "../Data/dummy-data";
import CategoryGridTile from "../Components/CategoryGridTile";
import { type ICategory } from "../types";
import { type RootStackParamList } from "../types";

type CategoriesScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "MealsOverview">;
};

const CategoriesScreen: FC<CategoriesScreenProps> = ({ navigation }) => {
  const renderCategoryItem = (itemData: ListRenderItemInfo<ICategory>) => {
    function pressHandler() {
      navigation.navigate("MealsOverview");
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
