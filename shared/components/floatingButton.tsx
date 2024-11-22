import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

interface FloatingActionButtonProps {
  onPress: () => void;
  label: string;
}

export const FloatingActionButton = ({
  onPress,
  label,
}: FloatingActionButtonProps) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 32,
    left: 16,
    right: 16,
    height: 56,
    borderRadius: 50,
    backgroundColor: Colors.dark.background,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.light.background,
    fontSize: 16,
    fontWeight: "700",
  },
});
