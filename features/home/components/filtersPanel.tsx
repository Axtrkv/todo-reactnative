import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

interface FiltersProps {
  filter: string;
  onFilterChange: (filter: string) => void;
}

export const Filters = ({ filter, onFilterChange }: FiltersProps) => (
  <View style={styles.container}>
    {["All", "Completed", "Todo"].map((key) => (
      <TouchableOpacity
        key={key}
        style={[
          styles.filterButton,
          filter === key && styles.activeFilterButton,
        ]}
        onPress={() => onFilterChange(key)}
      >
        <Text style={styles.text}>{key === "All" ? "All" : key}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 24,
  },
  filterButton: {
    backgroundColor: Colors.dark.background,
    alignItems: "center",
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  activeFilterButton: {
    backgroundColor: Colors.dark.activeList,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.light.background,
  },
});
