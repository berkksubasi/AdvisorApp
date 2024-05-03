import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { useTheme } from "../../providers/ThemeContext";

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
  const { darkMode, toggleTheme } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: darkMode ? "white" : "black" }]}>
        Ruh Güdüsü: {title}
      </Text>
      <Text
        style={[
          styles.descriptionItem,
          { color: darkMode ? "white" : "black" },
        ]}
      >
        {content}
      </Text>
      <Text style={[styles.title, { color: darkMode ? "white" : "black" }]}>
        Yapıcı Potansiyeller
      </Text>
      {yapiciPotansiyeller &&
        yapiciPotansiyeller.map((item, index) => (
          <Text
            key={`yapici_${index}`}
            style={[
              styles.descriptionItem,
              { color: darkMode ? "white" : "black" },
            ]}
          >
            {item}
          </Text>
        ))}

      <Text style={[styles.title, { color: darkMode ? "white" : "black" }]}>
        Olumsuz Potansiyeller
      </Text>
      {olumsuzPotansiyeller &&
        olumsuzPotansiyeller.map((item, index) => (
          <Text
            key={`olumsuz_${index}`}
            style={[
              styles.descriptionItem,
              { color: darkMode ? "white" : "black" },
            ]}
          >
            {item}
          </Text>
        ))}
      <Text style={[styles.title, { color: darkMode ? "white" : "black" }]}>
        Yıkıcı Potansiyeller
      </Text>
      {yikiciPotansiyeller &&
        yikiciPotansiyeller.map((item, index) => (
          <Text
            key={`yikici_${index}`}
            style={[
              styles.descriptionItem,
              { color: darkMode ? "white" : "black" },
            ]}
          >
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
