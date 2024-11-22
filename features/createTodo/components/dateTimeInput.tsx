import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { DateTimeInputProps } from "@/features/createTodo/types";
import Colors from "@/constants/Colors";

export const DateTimeInput = ({
  label,
  value,
  showPicker,
  setShowPicker,
  onChange,
  mode,
  Icon,
}: DateTimeInputProps) => (
  <View style={styles.container}>
    <Text style={styles.title}>{label}</Text>
    <TouchableOpacity
      style={styles.inputWrapper}
      onPress={() => setShowPicker(true)}
    >
      <Text style={styles.inputWithIcon}>
        {mode === "date"
          ? value.toLocaleDateString()
          : value.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </Text>
      <Icon />
    </TouchableOpacity>
    {showPicker && (
      <DateTimePicker mode={mode} value={value} onChange={onChange} />
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 16,
  },
  title: {
    paddingVertical: 8,
    fontSize: 14,
    fontWeight: "600",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.light.background,
    borderRadius: 8,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    paddingHorizontal: 16,
    height: 48,
  },
  inputWithIcon: {
    flex: 1,
    fontSize: 16,
    paddingRight: 8,
  },
});
