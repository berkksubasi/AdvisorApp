// InputFields.tsx

import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "../providers/ThemeContext";
import InputField from "../shared/InputField";

interface InputFieldsProps {
  setName: (name: string) => void;
  setLastname: (lastname: string) => void;
  setMaidenName: (maidenName: string) => void;
  name: string;
  lastname: string;
  maidenName: string;
}

const InputFields: React.FC<InputFieldsProps> = ({
  setName,
  setLastname,
  setMaidenName,
  name,
  lastname,
  maidenName,
}) => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <View style={styles.container}>
      <InputField
        placeholder="Ad"
        onChangeText={(text) => setName(text)}
        value={name}
        placeholderTextColor={darkMode ? "#ffffff90" : "#00000090"}
        inputTextColor={darkMode ? "#ffffff" : "#000000"}
      />
      <InputField
        placeholder="Soyad"
        onChangeText={(text) => setLastname(text)}
        placeholderTextColor={darkMode ? "#ffffff90" : "#00000090"}
        inputTextColor={darkMode ? "#ffffff" : "#000000"}
        value={lastname}
      />
      <InputField
        placeholder="Kızlık Soyadı"
        onChangeText={(text) => setMaidenName(text)}
        placeholderTextColor={darkMode ? "#ffffff90" : "#00000090"}
        inputTextColor={darkMode ? "#ffffff" : "#000000"}
        value={maidenName}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
  },
});

export default InputFields;
