import { Text, StyleSheet } from "react-native";
import Colors from "../../Constants/colors";

interface InstuctionTextProps {
  children: string;
  style?: any;
}

const InstuctionText = ({ children, style }: InstuctionTextProps) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
    textAlign: "center",
  },
});

export default InstuctionText;
