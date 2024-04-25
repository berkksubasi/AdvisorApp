import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useTheme } from "../../providers/ThemeContext";

interface MucadeleNumaralariProps {
  matchedStruggles: { struggleTitle: string; struggleDescription: string }[];
}

const MucadeleNumaralari: React.FC<MucadeleNumaralariProps> = ({
  matchedStruggles,
}) => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: darkMode ? "white" : "black" }]}>
        Mücadele Numaraları:
      </Text>
      {matchedStruggles.map((struggle, index) => (
        <View key={index}>
          <Text
            style={[styles.title, { color: darkMode ? "white" : "black" }]}
          >{`${index + 1}. Mücadele: ${
            struggle ? struggle.struggleTitle : "Bilinmeyen"
          }`}</Text>
          {struggle && (
            <Text
              style={[
                styles.descriptionItem,
                { color: darkMode ? "white" : "black" },
              ]}
            >
              {struggle.struggleDescription}
            </Text>
          )}
        </View>
      ))}
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

export default MucadeleNumaralari;
