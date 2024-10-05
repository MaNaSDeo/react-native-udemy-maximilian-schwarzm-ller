import { View, Text } from "react-native";
interface PrimaryButtonProps {
  children: string;
}
function PrimaryButton({ children }: PrimaryButtonProps) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}
export default PrimaryButton;
