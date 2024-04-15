import React, { useState } from "react";
import { View, StyleSheet, Alert, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputField from "../components/form/InputField";
import { CustomButton } from "../components/button";
import { calculate, mainLaneDATA } from "../functions/anaKulvar";

const CalculateView: React.FC = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [maidenName, setMaidenName] = useState("");
  const navigation = useNavigation();

  const handleCalculate = () => {
    if (!name.trim() || !lastname.trim()) {
      Alert.alert("Uyarı", "Lütfen tüm alanları doldurun.");
      return;
    }

    const conclusion = calculate(name, lastname, maidenName);
    const data = mainLaneDATA(conclusion);
    navigation.navigate("MainLaneResult", {
      conclusion: conclusion,
      typologyDescription: data,
    });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../images/page-icon.png")}
        style={{ width: 250, height: 250, marginBottom: 50 }}
      />
      <InputField
        placeholder="İsim"
        onChangeText={(text) => setName(text)}
        value={name}
        placeholderTextColor="#ffffff90"
      />
      <InputField
        placeholder="Soyad"
        onChangeText={(text) => setLastname(text)}
        placeholderTextColor="#ffffff90"
        value={lastname}
      />
      <InputField
        placeholder="Kızlık Soyadı"
        onChangeText={(text) => setMaidenName(text)}
        placeholderTextColor="#ffffff90"
        value={maidenName}
      />
      <CustomButton title="Hesapla" onPress={handleCalculate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "black",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default CalculateView;
