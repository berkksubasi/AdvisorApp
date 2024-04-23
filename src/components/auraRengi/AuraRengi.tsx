import React from "react";
import { StyleSheet, View, Text } from "react-native";

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
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aura Rengi: </Text>
      <Text style={styles.descriptionItem}>{auraColor}</Text>
      <Text style={styles.title}>Aura Rengi Potansiyeli:</Text>
      <Text style={styles.descriptionItem}>{colorPotantial}</Text>
      <Text style={styles.title}>Aura Rengi Açıklaması:</Text>
      <Text style={styles.descriptionItem}>{colorDescription}</Text>
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
