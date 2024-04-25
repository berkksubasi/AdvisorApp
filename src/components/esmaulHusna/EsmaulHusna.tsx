import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useTheme } from "../../providers/ThemeContext";

interface EsmaulHusnaProps {
  esmaulHusnaResult: string;
}

const EsmaulHusna: React.FC<EsmaulHusnaProps> = ({ esmaulHusnaResult }) => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: darkMode ? "white" : "black" }]}>
        Esma'ül Hüsna:{" "}
      </Text>
      <Text
        style={[
          styles.descriptionItem,
          { color: darkMode ? "white" : "black" },
        ]}
      >
        {esmaulHusnaResult}. Esma
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

export default EsmaulHusna;
