import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";

interface RuhGudusuProps {
  title: string;
  content: string;
  yapiciPotansiyeller?: string[];
  olumsuzPotansiyeller?: string[];
  yikiciPotansiyeller?: string[];
}

const RuhGudusu: React.FC<RuhGudusuProps> = ({
  title,
  content,
  yapiciPotansiyeller,
  olumsuzPotansiyeller,
  yikiciPotansiyeller,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ruh Güdüsü: {title}</Text>
      <Text style={styles.descriptionItem}>{content}</Text>
      <Text style={styles.title}>Yapıcı Potansiyeller</Text>
      {yapiciPotansiyeller &&
        yapiciPotansiyeller.map((item, index) => (
          <Text key={index} style={styles.descriptionItem}>
            {item}
          </Text>
        ))}
      <Text style={styles.title}>Olumsuz Potansiyeller</Text>
      {olumsuzPotansiyeller &&
        olumsuzPotansiyeller.map((item, index) => (
          <Text key={index} style={styles.descriptionItem}>
            {item}
          </Text>
        ))}
      <Text style={styles.title}>Yıkıcı Potansiyeller</Text>
      {yikiciPotansiyeller &&
        yikiciPotansiyeller.map((item, index) => (
          <Text key={index} style={styles.descriptionItem}>
            {item}
          </Text>
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
    lineHeight: 20,
  },
});

export default RuhGudusu;
