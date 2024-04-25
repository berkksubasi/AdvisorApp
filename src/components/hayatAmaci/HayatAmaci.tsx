import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useTheme } from "../../providers/ThemeContext";

interface HayatAmaciProps {
  purposeID: number;
  purposeTitle: string;
  purposeDescription: string;
}

const HayatAmaci: React.FC<HayatAmaciProps> = ({
  purposeID,
  purposeTitle,
  purposeDescription,
}) => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: darkMode ? "white" : "black" }]}>
        Hayat Amacı Sayısı: {purposeID}
      </Text>
      <Text style={[styles.title, { color: darkMode ? "white" : "black" }]}>
        {purposeTitle}
      </Text>
      <Text
        style={[
          styles.descriptionItem,
          { color: darkMode ? "white" : "black" },
        ]}
      >
        {purposeDescription}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
    color: "white",
    textAlign: "justify",
  },
  descriptionItem: {
    fontSize: 16,
    marginBottom: 5,
    color: "white",
  },
});

export default HayatAmaci;
