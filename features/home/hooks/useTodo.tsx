import { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "expo-router";
import { RootState } from "@/store/store";
import { toggleTask } from "@/store/todoSlice";
import { TodoItemProps } from "@/features/home/types";

export function useTodo() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const todos = useSelector(
    (state: RootState) => state.todos.todos as TodoItemProps[]
  );

  const latestTodos = todos
    .slice()
    .sort((a, b) => b.id - a.id)
    .slice(0, 3);

  const filteredTodos = useMemo(() => {
    return todos
      .slice()
      .sort((a, b) => b.id - a.id)
      .filter((todo: TodoItemProps) => {
        if (filter === "Completed") return todo.isCompleted;
        if (filter === "Todo") return !todo.isCompleted;
        return true;
      })
      .filter((todo: TodoItemProps) =>
        todo.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
  }, [todos, filter, searchQuery]);

  const handleToggle = (id: number) => {
    dispatch(toggleTask(id));
  };

  return {
    router,
    latestTodos,
    filteredTodos,
    filter,
    setFilter,
    searchQuery,
    setSearchQuery,
    handleToggle,
  };
}
