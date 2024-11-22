export type TodoItemProps = {
  id: number;
  title: string;
  time: string;
  date?: string;
  isCompleted: boolean;
  category: string;
  onToggle: (completed: boolean) => void;
  onDelete: () => void;
  icon: string;
};

export type ToDoListProps = {
  todos: TodoItemProps[];
  onToggle: (id: number) => void;
  title: string;
};