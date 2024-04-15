import React from "react";
import { Input } from "react-native-elements";

interface InputFieldProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholderTextColor: string;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  value,
  onChangeText,
  placeholderTextColor,
}) => {
  return (
    <Input
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      placeholderTextColor={placeholderTextColor}
      inputStyle={{ color: "white" }}
    />
  );
};

export default InputField;
