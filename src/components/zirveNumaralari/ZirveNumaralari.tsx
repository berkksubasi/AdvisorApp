import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useTheme } from "../../providers/ThemeContext";

interface ZirveNumaralariProps {
  matchedPeaks: { peakTitle: string; peakDescription: string }[];
}

const ZirveNumaralari: React.FC<ZirveNumaralariProps> = ({ matchedPeaks }) => {
  const { darkMode, toggleTheme } = useTheme();

  const zirveYasAraliklari = [
    {
      title: "Birinci Zirve Döngüsü",
      ageRange: "0 - 35 Yaş",
    },
    {
      title: "İkinci Zirve Döngüsü",
      ageRange: "36 - 44 Yaş",
    },
    {
      title: "Üçüncü Zirve Döngüsü",
      ageRange: "45 - 53 Yaş",
    },
    {
      title: "Dördüncü Zirve Döngüsü",
      ageRange: "54+ Yaş",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: darkMode ? "white" : "black" }]}>
        Zirve Numaraları ve Yaş Aralıkları:
      </Text>
      {matchedPeaks.map((peak, index) => (
        <View key={index}>
          <Text
            style={[styles.title, { color: darkMode ? "white" : "black" }]}
          >{`${index + 1}. Zirve: ${peak ? peak.peakTitle : "Bilinmeyen"
            }`}</Text>
          {peak && (
            <Text
              style={[
                styles.descriptionItem,
                { color: darkMode ? "white" : "black" },
              ]}
            >
              {peak.peakDescription}
            </Text>
          )}
          <Text style={[styles.descriptionItem, { color: darkMode ? "white" : "black", fontWeight: "bold" }]}>
            {zirveYasAraliklari[index].title}: {zirveYasAraliklari[index].ageRange}
          </Text>
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
