import React, { useState } from "react";
import { View, StyleSheet, Alert, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputField from "../components/form/InputField";
import { CustomButton } from "../components/button";
import { calculateFonKulvar } from "../functions/fonKulvar";
import fonLaneDATA from "../data/fonLaneDATA";
import calculateChakras from "../functions/calculateChakras";
import DateTimePicker from "react-native-modal-datetime-picker";

interface FonLaneResultParams {
  typologyId: number;
  title: string;
  description: string;
  chakraCounts: number[];
  name: string;
  lastname: string;
  birthdate: string;
}

const PremiumCalculateView: React.FC = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [maidenName, setMaidenName] = useState("");
  const [birthdate, setBirthdate] = useState<Date | undefined>(undefined);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const navigation = useNavigation();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    console.warn("A date has been picked: ", date);
    setBirthdate(date); // Tarihi state'e ata
    hideDatePicker();
    console.log("Formatted Date:", date.toLocaleDateString());
  };

  const handleCalculate = () => {
    if (!name.trim() || !lastname.trim()) {
      Alert.alert("Warning", "Please fill in all fields.");
      return;
    }

    if (!birthdate) {
      Alert.alert("Warning", "Please pick a birthdate.");
      return;
    }

    const conclusion = calculateFonKulvar(name, lastname, maidenName);
    console.log("Fon Kulvar Result :", conclusion);

    const selectedTypology = fonLaneDATA.find(
      (typology) => typology.typologyId === conclusion
    );

    if (selectedTypology) {
      const chakraCounts = calculateChakras(name, lastname, maidenName);
      console.log("Chakra Counts:");
      chakraCounts.forEach((count, index) => {
        console.log(`${index + 1}. Chakra = ${count} Units`);
      });

      const params: FonLaneResultParams = {
        typologyId: selectedTypology.typologyId,
        title: selectedTypology.title,
        description: selectedTypology.description,
        chakraCounts: chakraCounts,
        name: name,
        lastname: lastname,
        birthdate: birthdate?.toLocaleDateString() || "", //Tarih'i biçimlendir
      };
      navigation.navigate("PremiumResult", params);
    } else {
      console.error("Selected typology not found in fonLaneDATA.");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../images/page-icon.png")} style={styles.image} />
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
      <View style={styles.datePickerContainer}>
        <CustomButton
          style={{ width: "100%" }}
          variant="secondary"
          title="Doğum Tarihi Seç"
          onPress={showDatePicker}
        />
        <DateTimePicker
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
      <CustomButton title="Calculate" onPress={handleCalculate} />
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
  image: {
    width: 250,
    height: 250,
    marginBottom: 50,
  },
  datePickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
    flexWrap: "wrap",
  },
});

export default PremiumCalculateView;
