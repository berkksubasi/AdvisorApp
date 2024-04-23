import React from "react";
import { StyleSheet, View, Text } from "react-native";

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
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hayat Amacı Sayısı: {purposeID}</Text>
      <Text style={styles.title}>{purposeTitle}</Text>
      <Text style={styles.descriptionItem}>{purposeDescription}</Text>
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
