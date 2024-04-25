// InputField.tsx

import React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";

interface InputFieldProps extends TextInputProps {
  inputTextColor?: string; // Add inputTextColor prop
}

const InputField: React.FC<InputFieldProps> = ({
  inputTextColor,
  ...props
}) => {
  return (
    <TextInput
      {...props}
      style={[styles.input, { color: inputTextColor || "black" }]} // Use inputTextColor for text color
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 0.5,
    borderColor: "gray",
    paddingVertical: 15,
    marginBottom: 10,
  },
});

export default InputField;
