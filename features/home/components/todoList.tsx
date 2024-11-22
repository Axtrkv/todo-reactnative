import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useDispatch } from "react-redux";
import Colors from "@/constants/Colors";
import { removeTask } from "@/store/todoSlice";
import ToDoItem from "@/features/home/components/todoItem";
import { ToDoListProps } from "@/features/home/types";

export const ToDoList = ({ todos, onToggle, title }: ToDoListProps) => {
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(removeTask(id));
  };

  return (
    <View style={styles.todoListContainer}>
      {title && <Text style={styles.listTitle}>{title}</Text>}
      {todos.length === 0 ? (
        <Text style={styles.noTasksMessage}>No tasks available</Text>
      ) : (
        todos.map((todo, index) => (
          <View key={todo.id}>
            <ToDoItem
              id={todo.id}
              icon={todo.category}
              title={todo.title}
              time={todo.time}
              category={todo.category}
              isCompleted={todo.isCompleted}
              onToggle={() => onToggle(todo.id)}
              onDelete={() => handleDelete(todo.id)}
            />
            {index < todos.length - 1 && <View style={styles.divider} />}
          </View>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  todoListContainer: {
    backgroundColor: Colors.light.background,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.light.divider,
    marginVertical: 8,
  },
  noTasksMessage: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.light.text,
    textAlign: "center",
    marginTop: 16,
  },
});
