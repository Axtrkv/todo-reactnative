import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import ConfirmationModal from "@/shared/components/confirmationalModal";
import SelectIcon from "@/utils/selectIcon";
import Colors from "@/constants/Colors";
import { TodoItemProps } from "../types";

const ToDoItem = ({
  title,
  time,
  isCompleted,
  onToggle,
  onDelete,
  icon,
}: TodoItemProps) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleLongPress = () => {
    setIsMenuVisible(true);
  };

  const closeMenu = () => {
    setIsMenuVisible(false);
  };

  return (
    <>
      <TouchableWithoutFeedback onLongPress={handleLongPress}>
        <View style={styles.container}>
          <View style={styles.infoContainer}>
            <SelectIcon icon={icon} isCompleted={isCompleted} />
            <View style={styles.textContainer}>
              <Text style={[styles.title, isCompleted && styles.completedText]}>
                {title.length > 14 ? `${title.substring(0, 14)}...` : title}
              </Text>
              <Text style={[styles.time, isCompleted && styles.completedText]}>
                {time}
              </Text>
            </View>
          </View>

          <BouncyCheckbox
            style={styles.checkbox}
            size={25}
            isChecked={isCompleted}
            fillColor={Colors.dark.background}
            unFillColor={Colors.light.background}
            iconStyle={styles.checkboxIcon}
            innerIconStyle={styles.checkboxInnerIcon}
            onPress={onToggle}
          />
        </View>
      </TouchableWithoutFeedback>

      <ConfirmationModal
        isMenuVisible={isMenuVisible}
        closeMenu={closeMenu}
        onDelete={onDelete}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 80,
    width: "100%",
    paddingHorizontal: 12,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  textContainer: {
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
  time: {
    fontSize: 14,
    fontWeight: "500",
  },
  completedText: {
    color: "#A0A0A0",
    textDecorationLine: "line-through",
  },
  checkbox: {
    marginLeft: 10,
  },
  checkboxIcon: {
    borderWidth: 1,
    borderRadius: 3,
  },
  checkboxInnerIcon: {
    borderWidth: 1,
    borderRadius: 3,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  menuContainer: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    elevation: 4,
  },
  menuItem: {
    paddingVertical: 8,
  },
  menuText: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default ToDoItem;
