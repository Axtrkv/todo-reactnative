  export type RootStackParamList = {
    index: undefined;
    createTodo: undefined;
  };

  export type ConfirmationModalProps = {
    isMenuVisible: boolean;
    closeMenu: () => void;
    onDelete: () => void;
  }