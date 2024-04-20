import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import InputField from "./form/InputField";

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
  return (
    <View style={styles.container}>
      <InputField
        placeholder="Name"
        onChangeText={(text) => setName(text)}
        value={name}
        placeholderTextColor="#ffffff90"
      />
      <InputField
        placeholder="Lastname"
        onChangeText={(text) => setLastname(text)}
        placeholderTextColor="#ffffff90"
        value={lastname}
      />
      <InputField
        placeholder="Maiden Name"
        onChangeText={(text) => setMaidenName(text)}
        placeholderTextColor="#ffffff90"
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
