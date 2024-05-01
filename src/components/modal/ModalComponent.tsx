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

const windowHeight = Dimensions.get("window").height;

const ModalComponent: React.FC<ModalProps> = ({ isVisible, onClose }) => {
  const translateY = useRef(new Animated.Value(1)).current;
  const { darkMode } = useTheme();

  useEffect(() => {
    if (isVisible) {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateY, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible]);

  const onDeleteAccount = () => {
    // Hesap silme
    onClose(); // Modalı kapat
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateY: translateY.interpolate({
                inputRange: [0, 1],
                outputRange: [0, windowHeight * 0.3],
              }),
            },
          ],
        },
      ]}
    >
      <View
        style={[
          styles.modal,
          {
            backgroundColor: darkMode ? "black" : "white",
            borderColor: darkMode ? "white" : "black",
          },
        ]}
      >
        <Text style={[styles.title, { color: darkMode ? "white" : "black" }]}>
          Hesabınızı silmek istediğinizden emin misiniz?
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={[, { color: darkMode ? "white" : "black" }]}>
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
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
  },
  modal: {
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderWidth: 1,
    borderTopColor: "#8576FF",
    borderLeftColor: "#8576FF",
    borderRightColor: "#8576FF",
    height: 300,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#8576FF",
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
    marginBottom: 50,
  },
  deleteButton: {
    backgroundColor: "#FF6347",
    borderColor: "#FF6347",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
});

export default ModalComponent;
