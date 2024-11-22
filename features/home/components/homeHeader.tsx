import Colors from "@/constants/Colors";
import { Text, View } from "react-native";

export const HomeHeader = () => {
  return (
    <View
      style={{
        height: 62,
        width: '100%',
        backgroundColor: Colors.dark.background,
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "700",
          color: Colors.light.background,
        }}
      >
        My Todo List
      </Text>
    </View>
  );
};
