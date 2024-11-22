import React from "react";
import { TextInput, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export const SearchInput = ({
  value,
  onChangeText,
  placeholder = "Search...",
}: SearchInputProps) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    value={value}
    placeholderTextColor={'#A0A0A0'}
    onChangeText={onChangeText}
  />
);

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.light.background,
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
    shadowColor: Colors.dark.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
