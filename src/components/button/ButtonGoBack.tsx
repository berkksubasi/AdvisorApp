import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";

interface ButtonGoBackProps extends TouchableOpacityProps {
  onPress: () => void;
}

const ButtonGoBack: React.FC<ButtonGoBackProps> = ({ onPress, ...props }) => (
  <TouchableOpacity style={styles.button} onPress={onPress} {...props}>
    <Text style={styles.buttonText}>Geri Dön</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 10,
    borderRadius: 16,
    borderWidth: 1.5,
    width: "100%",
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8576FF",
    borderColor: "#00000040",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ButtonGoBack;
