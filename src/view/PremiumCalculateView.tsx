import React, { useState } from "react";
import { View, StyleSheet, Alert, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CustomButton } from "../components/button";
import DateTimePicker from "react-native-modal-datetime-picker";
import esmaulHusna from "../functions/esmaulHusna";
import { calculateSideLane } from "../functions/yanKulvar";
import fonLaneDATA from "../data/fonLaneDATA";
import { calculateFonKulvar } from "../functions/fonKulvar";
import calculateChakras from "../functions/calculateChakras";
import InputFields from "../components/InputFields";
import calculatePeakAndStruggleNumbers from "../functions/calculatePeakAndStruggleNumbers";
import calculatePurposeOfLife from "../functions/calculatePurposeOfLife";
import { useTheme } from "../providers/ThemeContext";

interface FonLaneResultParams {
  typologyId: number;
  title: string;
  description: string;
  chakraCounts: number[];
  name: string;
  lastname: string;
  birthdate: string;
  sideLaneNumber: number;
  esmaulHusnaResult: number;
  peaks: number[];
  struggles: number[];
  purposes: number;
}

const PremiumCalculateView: React.FC = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [maidenName, setMaidenName] = useState("");
  const [birthdate, setBirthdate] = useState<Date | undefined>(undefined);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const navigation = useNavigation();
  const { darkMode, toggleTheme } = useTheme();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    console.log("A date has been picked: ", date);
    setBirthdate(date); // Tarihi state'e ata
    hideDatePicker();
  };

  const handleCalculate = () => {
    if (!name.trim() || !lastname.trim()) {
      Alert.alert("Warning", "Please fill in all fields.");
      return;
    }

    if (!birthdate) {
      Alert.alert("Warning", "Please select a birthdate.");
      return;
    }

    // Calculate side lane
    const sideLaneNumber = calculateSideLane(name, lastname, maidenName);

    // Calculate Esmaül Hüsna
    const esmaulHusnaResult = esmaulHusna(
      `${birthdate.getDate()}.${
        birthdate.getMonth() + 1
      }.${birthdate.getFullYear()}`
    );

    // Calculate Fon Kulvar
    const fonKulvarResult = calculateFonKulvar(name, lastname, maidenName);

    // Calculate peaks and struggles
    const { peaks, struggles } = calculatePeakAndStruggleNumbers(birthdate);
    // Calculate Purpose of Life
    const purposes = calculatePurposeOfLife(birthdate);

    const selectedTypology = fonLaneDATA.find(
      (typology) => typology.typologyId === fonKulvarResult
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
        birthdate: birthdate?.toLocaleDateString() || "", // Format date
        sideLaneNumber: sideLaneNumber, // Side lane result
        esmaulHusnaResult: esmaulHusnaResult, // Esmaül Hüsna result
        peaks: peaks, // Peak numbers
        struggles: struggles, // Struggle numbers
        purposes: purposes, // Purpose Numbers
      };

      // Navigate with result
      navigation.navigate("PremiumResult", params);
    }
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? "black" : "white" },
      ]}
    >
      <Image source={require("../images/page-icon.png")} style={styles.image} />
      <InputFields
        setName={setName}
        setLastname={setLastname}
        setMaidenName={setMaidenName}
        name={name}
        lastname={lastname}
        maidenName={maidenName}
      />
      <View style={styles.datePickerContainer}>
        <CustomButton
          style={{ width: "100%" }}
          variant="secondary"
          title="Select Birthdate"
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
