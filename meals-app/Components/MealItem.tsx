import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
  ListRenderItem,
} from "react-native";
import { ICategory, RootStackParamList } from "../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface Props {
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const MealItem: FC<Props> = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation<NavigationProp>();

  const pressHandler = () => {
    navigation.navigate("MealDetail");
  };

  return (
    <View style={styles.MealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        // onPress={pressHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image
              source={{ uri: imageUrl }}
              // width={100}
              // height={100}
              style={styles.image}
            />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  MealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 2 },
  },
  innerContainer: { borderRadius: 8, overflow: "hidden" },
  image: {
    width: "100%",
    height: 200,
  },
  buttonPressed: { opacity: 0.5 },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
