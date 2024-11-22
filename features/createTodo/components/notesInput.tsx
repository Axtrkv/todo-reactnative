import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { NotesInputProps } from "@/features/createTodo/types";
import Colors from "@/constants/Colors";

export const NotesInput = ({ value, onChange }: NotesInputProps) => (
  <View>
    <Text style={styles.title}>Notes</Text>
    <TextInput
      style={styles.notesInput}
      placeholder="Notes"
      placeholderTextColor="#A0A0A0"
      multiline
      numberOfLines={4}
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
  notesInput: {
    height: 120,
    paddingVertical: 16,
    backgroundColor: Colors.light.background,
    borderRadius: 8,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    paddingHorizontal: 16,
    textAlignVertical: "top",
    fontSize: 16,
  },
});
