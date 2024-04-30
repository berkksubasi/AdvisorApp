import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { useTheme } from "../../providers/ThemeContext";

interface KaderSayisiProps {
  title: string;
  description: string;
}
const KaderSayisi: React.FC<KaderSayisiProps> = ({ title, description }) => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: darkMode ? "white" : "black" }]}>
        Kader Sayısı: {title}
      </Text>
      <Text style={[{ color: darkMode ? "white" : "black" }, styles.content]}>
        Kader sayısı, bu hayatta neyi gerçekleştireceğinizi ve kime
        dönüşeceğinizi gösterebilen bir sayıdır. Adınızın verdiği özellikleri
        öğrenmenizi sağlar, Dünya'ya, atalara ve mekana bağlı özellikler
        şeklinde düşünebilirsiniz.
      </Text>
      <Text
        style={[
          styles.descriptionItem,
          { color: darkMode ? "white" : "black" },
        ]}
      >
        {description}
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
    lineHeight: 20,
  },
  content: {
    fontSize: 10,
    marginBottom: 10,
    lineHeight: 12,
  },
});

export default KaderSayisi;
