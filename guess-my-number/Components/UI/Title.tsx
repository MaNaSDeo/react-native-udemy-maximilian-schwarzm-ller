import { Text, StyleSheet } from "react-native";
import Colors from "../../Constants/colors";

interface TitleProps {
  children: string;
}

function Title({ children }: TitleProps) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});

export default Title;
