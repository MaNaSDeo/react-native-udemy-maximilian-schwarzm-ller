import React, { type FC } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { type UserScreenProps } from "../App";

const UserScreen: FC<UserScreenProps> = ({ navigation }) => {
  function openDrawerHandler() {
    // navigation.toggleDrawer();
    navigation.navigate("Welcome"); // To switch to welcome screen.
  }
  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"User"</Text> screen!
      </Text>
      <Button title="Open Drawer" onPress={openDrawerHandler} />
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  highlight: {
    fontWeight: "bold",
    color: "#eb1064",
  },
});
