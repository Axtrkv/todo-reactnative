import { useState } from "react";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { useRouter } from "expo-router";
import { addTask } from "@/store/todoSlice";
import { DateTimeChangeHandlerProps } from "@/features/createTodo/types";

export function useCreateTodo() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("task");
  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [showTimePicker, setShowTimePicker] = useState<boolean>(false);
  const [notes, setNotes] = useState<string>("");

  const handleDateChange: DateTimeChangeHandlerProps = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) setDate(selectedDate);
  };

  const handleTimeChange: DateTimeChangeHandlerProps = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) setTime(selectedTime);
  };

  const handleSave = () => {
    if (!title || !category) {
      Alert.alert("Wait a minute", "Please fill in all fields.");
      return;
    }

    const newTask = {
      title,
      category,
      time: time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      date: date.toLocaleDateString(),
      notes,
    };

    dispatch(addTask(newTask));
    router.push("/(tabs)");
    Alert.alert("Success", "Task added successfully!");

    setTitle("");
    setCategory("task");
    setDate(new Date());
    setTime(new Date());
    setNotes("");
  };

  return {
    title,
    setTitle,
    category,
    setCategory,
    date,
    setDate,
    time,
    setTime,
    showDatePicker,
    setShowDatePicker,
    showTimePicker,
    setShowTimePicker,
    notes,
    setNotes,
    handleDateChange,
    handleTimeChange,
    handleSave,
  };
}
