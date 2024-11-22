import React from "react";
import { StyleSheet, View } from "react-native";
import { useCreateTodo } from "@/features/createTodo/hooks/useCreateTodo";
import { FloatingActionButton } from "@/shared/components/floatingButton";
import { CalendarIcon } from "@/assets/icons/CalendarIcon";
import { ClockIcon } from "@/assets/icons/ClockIcon";
import { InputField } from "@/features/createTodo/components/inputField";
import { CategorySelector } from "@/features/createTodo/components/categorySelector";
import { DateTimeInput } from "@/features/createTodo/components/dateTimeInput";
import { NotesInput } from "@/features/createTodo/components/notesInput";

export default function CreateTodoScreen() {
  const {
    title,
    setTitle,
    category,
    setCategory,
    date,
    time,
    showDatePicker,
    setShowDatePicker,
    showTimePicker,
    setShowTimePicker,
    notes,
    setNotes,
    handleDateChange,
    handleTimeChange,
    handleSave,
  } = useCreateTodo();

  return (
    <View style={styles.container}>
      <InputField
        label="Task Title"
        value={title}
        onChange={setTitle}
        placeholder="Task Title"
      />
      <CategorySelector
        selectedCategory={category}
        onSelect={setCategory}
      />
      <View style={styles.row}>
        <DateTimeInput
          label="Date"
          value={date}
          showPicker={showDatePicker}
          setShowPicker={setShowDatePicker}
          onChange={handleDateChange}
          mode="date"
          Icon={CalendarIcon}
        />
        <DateTimeInput
          label="Time"
          value={time}
          showPicker={showTimePicker}
          setShowPicker={setShowTimePicker}
          onChange={handleTimeChange}
          mode="time"
          Icon={ClockIcon}
        />
      </View>
      <NotesInput value={notes} onChange={setNotes} />
      <FloatingActionButton onPress={handleSave} label="Save" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7FB",
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    gap: 16
  },
});
