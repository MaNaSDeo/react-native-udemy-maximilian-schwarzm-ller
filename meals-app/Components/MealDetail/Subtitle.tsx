import React, { FC } from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";

interface Props {
  children: string;
  style?: StyleProp<ViewStyle>; // Optional custom style prop
}

const Subtitle: FC<Props> = ({ children, style }) => {
  return (
    <View style={[styles.subtitleContainer, style]}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 12,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
