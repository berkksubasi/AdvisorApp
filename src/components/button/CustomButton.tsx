import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  variant?: "primary" | "secondary" | "tertiary";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  style,
  variant = "primary",
}) => {
  const getButtonStyle = () => {
    switch (variant) {
      case "primary":
        return {
          backgroundColor: "#8576FF",
          borderColor: "#00000040",
        };
      case "secondary":
        return {
          backgroundColor: "#000000",
          borderColor: "#8576FF",
        };
      case "tertiary":
        return {
          backgroundColor: "#FF5722",
          borderColor: "#FF572260",
        };
      default:
        return {
          backgroundColor: "#8576FF",
          borderColor: "#8576FF60",
        };
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, getButtonStyle(), style]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

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
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CustomButton;
