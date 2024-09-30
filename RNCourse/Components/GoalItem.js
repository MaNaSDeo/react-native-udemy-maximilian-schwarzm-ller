import { View, Text, StyleSheet } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    // marginVertical: 3,
    // paddingVertical: 5,
    // borderBottomWidth: 1,
    // borderBottomColor: "#ccc",
    textAlign: "center",
    backgroundColor: "#5e0acc",
    // color: "white",
    margin: 8,
    padding: 8,
    borderRadius: 6,
  },
  goalText: {
    color: "white",
  },
});

export default GoalItem;
