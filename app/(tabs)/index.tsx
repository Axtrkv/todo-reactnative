import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { useTodo } from "@/features/home/hooks/useTodo";
import { HomeHeader } from "@/features/home/components/homeHeader";
import { ToDoList } from "@/features/home/components/todoList";
import { Filters } from "@/features/home/components/filtersPanel";
import { SearchInput } from "@/features/home/components/searchInput";
import { FloatingActionButton } from "@/shared/components/floatingButton";
import Colors from "@/constants/Colors";

export default function HomeScreen() {
  const {
    router,
    latestTodos,
    filteredTodos,
    filter,
    searchQuery,
    setFilter,
    setSearchQuery,
    handleToggle,
  } = useTodo();

  return (
    <View style={styles.screen}>
      <HomeHeader />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ToDoList
          todos={latestTodos}
          onToggle={handleToggle}
          title="Latest Tasks"
        />

        <Filters filter={filter} onFilterChange={setFilter} />

        <SearchInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search tasks..."
        />

        {filteredTodos.length === 0 ? (
          <View style={styles.emptyTasks}>
            <Text style={styles.todosNotFoundText}>
              No todos available by this filter...
            </Text>
          </View>
        ) : (
          <View style={styles.filteredListWrapper}>
            <ToDoList
              todos={filteredTodos}
              onToggle={handleToggle}
              title={
                filter === "all"
                  ? "All Tasks"
                  : filter === "completed"
                  ? "Completed Tasks"
                  : "To Do Tasks"
              }
            />
          </View>
        )}
      </ScrollView>
      <FloatingActionButton
        onPress={() => router.push("/(tabs)/createTodo")}
        label="Add New Task"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    position: "relative",
    backgroundColor: "#F1F5F9",
  },
  scrollView: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  filteredListWrapper: {
    marginBottom: 48,
  },
  emptyTasks: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  todosNotFoundText: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.dark.background,
  },
});
