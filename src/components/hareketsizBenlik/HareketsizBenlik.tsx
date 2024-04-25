import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { useTheme } from "../../providers/ThemeContext";

interface HareketsizBenlikProps {
  title: string;
  description: string;
}
const HareketsizBenlik: React.FC<HareketsizBenlikProps> = ({
  title,
  description,
}) => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: darkMode ? "white" : "black" }]}>
        Hareketsiz Benlik:{title}
      </Text>
      <Text style={[styles.content, { color: darkMode ? "white" : "black" }]}>
        Hareketsiz Benlik, daha çok olgunluk yaşlarınızda dış dünyaya nasıl
        göründüğünü umursamaz olduğunuzda, toplumdan uzak olup yalnız
        anlarınızda belirginleştiğini görürürsünüz. Bilinçaltınızın işleyiş
        biçimidir, ödül gibidir.İsmin hakkı verilirse ödülünüzü alırsınız.
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
    color: "yellow",
    lineHeight: 12,
  },
});

export default HareketsizBenlik;
