import React, { useState } from "react";
import { View, StyleSheet, Alert, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputField from "../components/form/InputField";
import { CustomButton } from "../components/button";
import { calculateFonKulvar } from "../functions/fonKulvar";
import fonLaneDATA from "../data/fonLaneDATA";
import calculateChakras from "../functions/calculateChakras";

interface FonLaneResultParams {
  typologyId: number;
  title: string;
  description: string;
  chakraCounts: number[];
  name: string;
  lastname: string;
}

const FonLaneCalculateView: React.FC = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [maidenName, setMaidenName] = useState("");
  const navigation = useNavigation();

  const handleCalculate = () => {
    if (!name.trim() || !lastname.trim()) {
      Alert.alert("Uyarı", "Lütfen tüm alanları doldurun.");
      return;
    }

    const conclusion = calculateFonKulvar(name, lastname, maidenName);
    console.log("Fon Kulvar Sonuç :", conclusion);

    const selectedTypology = fonLaneDATA.find(
      (typology) => typology.typologyId === conclusion
    );

    if (selectedTypology) {
      const chakraCounts = calculateChakras(name, lastname, maidenName); // Çakra sayılarını hesapla
      console.log("Çakra Sayıları:");
      chakraCounts.forEach((count, index) => {
        console.log(`${index + 1}. Çakra = ${count} Birim`);
      });

      const params: FonLaneResultParams = {
        typologyId: selectedTypology.typologyId,
        title: selectedTypology.title,
        description: selectedTypology.description,
        chakraCounts: chakraCounts,
        name: name,
        lastname: lastname,
      };
      navigation.navigate("PremiumResult", params);
    } else {
      console.error("Seçilen tipoloji fonLaneDATA içinde bulunamadı.");
    }
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
});

export default FonLaneCalculateView;
