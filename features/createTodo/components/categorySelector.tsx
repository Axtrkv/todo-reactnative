import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import EventIcon from "@/assets/categories/EventIcon";
import GoalIcon from "@/assets/categories/GoalIcon";
import TaskIcon from "@/assets/categories/TaskIcon";
import { CategorySelectorProps } from "@/features/createTodo/types";
import Colors from "@/constants/Colors";

export const CategorySelector = ({ selectedCategory, onSelect }: CategorySelectorProps) => (
  <View style={styles.categoryContainer}>
    <Text style={styles.title}>Category</Text>
    {["task", "event", "goal"].map((cat) => (
      <TouchableOpacity
        key={cat}
        style={[
          styles.categoryButton,
          selectedCategory === cat && styles.selectedCategory,
        ]}
        onPress={() => onSelect(cat)}
      >
        {cat === "task" && <TaskIcon />}
        {cat === "event" && <EventIcon />}
        {cat === "goal" && <GoalIcon />}
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    marginBottom: 16,
  },
  categoryButton: {
    width: 48,
    height: 48,
    padding: 24,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "transparent",
    borderWidth: 2,
  },
  selectedCategory: {
    borderColor: Colors.dark.background,
    borderWidth: 2,
    backgroundColor: Colors.light.background,
  },
  title: {
    paddingVertical: 8,
    fontSize: 14,
    fontWeight: "600",
  },
});
