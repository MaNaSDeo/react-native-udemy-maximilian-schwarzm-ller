import React, { FC } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

interface Props {
  data: string[];
  numbered?: boolean; // Optional prop for numbering
}
const List: FC<Props> = ({ data, numbered }) => {
  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.listContainer}>
        {data.map((dataPoint, index) => (
          <View key={dataPoint} style={styles.listItem}>
            <Text style={styles.itemText}>
              {numbered ? `${index + 1}. ${dataPoint}` : dataPoint}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default List;

const styles = StyleSheet.create({
  rootContainer: { marginBottom: 32 },
  listContainer: {
    width: "100%",
    padding: 16,
  },
  listItem: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    borderRadius: 6,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
