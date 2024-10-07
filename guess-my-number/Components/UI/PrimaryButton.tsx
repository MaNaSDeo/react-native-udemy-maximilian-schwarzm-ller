import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../Constants/colors";

interface PrimaryButtonProps {
  children: any;
  onPress?: () => void;
}

function PrimaryButton({ children, onPress }: PrimaryButtonProps) {
  function pressHandler() {
    onPress?.(); //optional chaining to safely call onPress
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressedStyle]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    // flex: 1,
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressedStyle: {
    opacity: 0.75,
  },
});
export default PrimaryButton;
