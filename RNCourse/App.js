import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";
// import { StatusBar } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  // console.log("courseGoals", courseGoals);
  const [modalVisible, setModalVisible] = useState(false);

  function addGoalHandler(enteredGoalText) {
    console.log("enteredGoalText", enteredGoalText);
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Date.now() },
    ]);
    setModalVisible(false);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((prev) => {
      return prev.filter((goal) => goal.id !== id);
    });
  }

  function endAddGoalHandler() {
    console.log("endAddGoalHandler");
    setModalVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={() => setModalVisible(true)}
        />
        <GoalInput
          addGoal={addGoalHandler}
          isVisible={modalVisible}
          onCancel={endAddGoalHandler}
        />
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
    </>
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
