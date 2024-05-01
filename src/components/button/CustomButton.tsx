import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  View,
} from "react-native";
import { Icon, Switch } from "react-native-elements";
import { useTheme } from "../../providers/ThemeContext";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  variant?: "primary" | "secondary" | "tertiary";
  icon?: string;
  switch?: boolean;
  switchState?: boolean;
  onSwitchChange?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  style,
  variant = "primary",
  icon,
  switch: switchProp,
  switchState,
  onSwitchChange,
}) => {
  const { darkMode } = useTheme();

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
      style={[
        styles.button,
        getButtonStyle(),
        style,
        switchProp && styles.switchButton,
      ]}
      onPress={onPress}
    >
      <View style={styles.buttonContent}>
        {icon && <Icon name={icon} color="#8576FF" style={styles.buttonIcon} />}
        {!icon && (
          <Text
            style={[
              styles.buttonText,
              { color: darkMode ? "black" : "white" },
              !icon && { textAlign: "center", width: "100%" },
            ]}
          >
            {title}
          </Text>
        )}
        {icon && (
          <Text
            style={[
              styles.buttonText,
              { color: darkMode ? "white" : "black" },
              styles.buttonTextWithIcon,
            ]}
          >
            {title}
          </Text>
        )}
      </View>
      {switchProp && (
        <Switch
          value={switchState}
          onValueChange={onSwitchChange}
          color="#8576FF"
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 10,
    borderRadius: 16,
    borderWidth: 1,
    width: "100%",
    height: 56,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonTextWithIcon: {
    marginLeft: 8,
  },
  buttonIcon: {
    marginRight: 8,
  },
  switchButton: {
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default CustomButton;
