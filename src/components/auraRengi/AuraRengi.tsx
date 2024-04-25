import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useTheme } from "../../providers/ThemeContext";

interface AuraRengiProps {
  auraColor: string;
  colorPotantial: string;
  colorDescription: string;
}

const AuraRengi: React.FC<AuraRengiProps> = ({
  auraColor,
  colorPotantial,
  colorDescription,
}) => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: darkMode ? "white" : "black" }]}>
        Aura Rengi:{" "}
      </Text>
      <Text
        style={[
          styles.descriptionItem,
          { color: darkMode ? "white" : "black" },
        ]}
      >
        {auraColor}
      </Text>
      <Text style={[styles.title, { color: darkMode ? "white" : "black" }]}>
        Aura Rengi Potansiyeli:
      </Text>
      <Text
        style={[
          styles.descriptionItem,
          { color: darkMode ? "white" : "black" },
        ]}
      >
        {colorPotantial}
      </Text>
      <Text style={[styles.title, { color: darkMode ? "white" : "black" }]}>
        Aura Rengi Açıklaması:
      </Text>
      <Text
        style={[
          styles.descriptionItem,
          { color: darkMode ? "white" : "black" },
        ]}
      >
        {colorDescription}
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

export default AuraRengi;
