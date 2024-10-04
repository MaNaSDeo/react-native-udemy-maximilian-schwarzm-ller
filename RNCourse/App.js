import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  // console.log("courseGoals", courseGoals);

  function addGoalHandler(enteredGoalText) {
    console.log("enteredGoalText", enteredGoalText);
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Date.now() },
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((prev) => {
      return prev.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        {/* <ScrollView>
          {courseGoals.map((goal, index) => (
            <View key={index} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                deleteGoal={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
