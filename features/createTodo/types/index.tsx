import { DateTimePickerEvent } from "@react-native-community/datetimepicker";

export type InputFieldProps = {
    label: string;
    value: string;
    onChange: (text: string) => void;
    placeholder?: string;
  };

  export type CategorySelectorProps = {
    selectedCategory: string;
    onSelect: (category: string) => void;
  };

  export type DateTimeInputProps = {
    label: string;
    value: Date;
    showPicker: boolean;
    setShowPicker: (show: boolean) => void;
    onChange: (event: DateTimePickerEvent, selectedDate?: Date) => void;
    mode: "date" | "time";
    Icon: React.FC;
  };

  export type NotesInputProps = {
    value: string;
    onChange: (text: string) => void;
  };

  export type DateTimeChangeHandlerProps = (
    event: DateTimePickerEvent,
    selectedDateOrTime?: Date | undefined
  ) => void;
  