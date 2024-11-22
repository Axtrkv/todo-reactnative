import React from "react";
import { Modal, Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import { ConfirmationModalProps } from "../types";

const ConfirmationModal = ({ isMenuVisible, closeMenu, onDelete }: ConfirmationModalProps) => {
  return (
    <Modal transparent={true} visible={isMenuVisible} animationType="fade">
      <Pressable style={styles.modalOverlay} onPress={closeMenu}>
        <View style={styles.menuContainer}>
          <Text style={styles.confirmationText}>
            Would you to remove this task?
          </Text>
          <View style={styles.buttonContainer}>
            <Pressable
              style={[styles.button, styles.cancelButton]}
              onPress={closeMenu}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.deleteButton]}
              onPress={() => {
                onDelete();
                closeMenu();
              }}
            >
              <Text style={styles.deleteText}>Delete</Text>
            </Pressable>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  menuContainer: {
    width: "80%",
    backgroundColor: Colors.light.background,
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    elevation: 4,
  },
  confirmationText: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 50,
    alignItems: "center",
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: "#F6F7FB",
  },
  cancelText: {
    fontWeight: "600",
  },
  deleteButton: {
    backgroundColor: "#cf5f61",
  },
  deleteText: {
    color: "#fff",
    fontWeight: "600",
  },
});

export default ConfirmationModal;
