import React from "react";
import { StyleSheet, View, Text } from "react-native";

interface MucadeleNumaralariProps {
  matchedStruggles: { struggleTitle: string; struggleDescription: string }[];
}

const MucadeleNumaralari: React.FC<MucadeleNumaralariProps> = ({
  matchedStruggles,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mücadele Numaraları:</Text>
      {matchedStruggles.map((struggle, index) => (
        <View key={index}>
          <Text style={styles.title}>{`${index + 1}. Mücadele: ${
            struggle ? struggle.struggleTitle : "Bilinmeyen"
          }`}</Text>
          {struggle && (
            <Text style={styles.descriptionItem}>
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
