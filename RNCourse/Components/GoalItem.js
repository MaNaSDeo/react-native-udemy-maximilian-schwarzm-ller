import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem(props) {
  return (
    // <Pressable
    //   android_ripple={{ color: "#dddddd" }}
    //   onPress={props.deleteGoal.bind(this, props.id)}
    // >
    //   <View style={styles.goalItem}>
    //     <Text style={styles.goalText}>{props.text}</Text>
    //   </View>
    // </Pressable>

    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#d90b2d" }}
        onPress={props.deleteGoal.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem} //For IOS
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
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
    // padding: 8,
    borderRadius: 6,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
