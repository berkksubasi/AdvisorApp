import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import { useTheme } from "../../providers/ThemeContext";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const { height: windowHeight } = Dimensions.get("window");

const ModalComponent: React.FC<ModalProps> = ({ isVisible, onClose }) => {
  const translateY = useRef(new Animated.Value(windowHeight)).current;
  const { darkMode } = useTheme();

  useEffect(() => {
    if (isVisible) {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateY, {
        toValue: windowHeight,
        duration: 0,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible]);

  const onDeleteAccount = () => {
    onClose(); // Modalı kapat
    // delete account logic here
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateY }],
        },
      ]}
    >
      <View
        style={[
          styles.modal,
          {
            backgroundColor: darkMode ? "black" : "white",
          },
        ]}
      >
        <Text style={[styles.title, { color: darkMode ? "white" : "black" }]}>
          Hesabınızı silmek istediğinizden emin misiniz?
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text
              style={[
                styles.buttonText,
                { color: darkMode ? "white" : "black" },
              ]}
            >
              İptal
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.deleteButton]}
            onPress={onDeleteAccount}
          >
            <Text style={styles.buttonText}>Hesabımı Sil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    padding: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#8576FF",
    width: "80%",
    maxHeight: "80%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#8576FF",
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "#FF6347",
    borderColor: "#FF6347",
  },
  buttonText: {
    fontWeight: "bold",
  },
});

export default ModalComponent;
