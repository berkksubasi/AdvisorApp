import React from "react";
import { StyleSheet, View, Text } from "react-native";

interface ZirveNumaralariProps {
  matchedPeaks: { peakTitle: string; peakDescription: string }[];
}

const ZirveNumaralari: React.FC<ZirveNumaralariProps> = ({ matchedPeaks }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Zirve Numaraları:</Text>
      {matchedPeaks.map((peak, index) => (
        <View key={index}>
          <Text style={styles.title}>{`${index + 1}. Zirve: ${
            peak ? peak.peakTitle : "Bilinmeyen"
          }`}</Text>
          {peak && (
            <Text style={styles.descriptionItem}>{peak.peakDescription}</Text>
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

export default ZirveNumaralari;
