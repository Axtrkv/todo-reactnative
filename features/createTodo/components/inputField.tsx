import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { InputFieldProps } from "@/features/createTodo/types";
import Colors from "@/constants/Colors";

export const InputField = ({ label, value, onChange, placeholder }: InputFieldProps) => (
  <View>
    <Text style={styles.title}>{label}</Text>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#A0A0A0"
      value={value}
      onChangeText={onChange}
    />
  </View>
);

const styles = StyleSheet.create({
  title: {
    paddingVertical: 8,
    fontSize: 14,
    fontWeight: "600",
  },
  input: {
    backgroundColor: Colors.light.background,
    borderRadius: 8,
    height: 48,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
    borderColor: "#E0E0E0",
    borderWidth: 1,
  },
});
