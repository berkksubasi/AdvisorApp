import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";

interface HareketsizBenlikProps {
  title: string;
  description: string;
}
const HareketsizBenlik: React.FC<HareketsizBenlikProps> = ({
  title,
  description,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hareketsiz Benlik:{title}</Text>
      <Text style={styles.content}>
        Hareketsiz Benlik, daha çok olgunluk yaşlarınızda dış dünyaya nasıl
        göründüğünü umursamaz olduğunuzda, toplumdan uzak olup yalnız
        anlarınızda belirginleştiğini görürürsünüz. Bilinçaltınızın işleyiş
        biçimidir, ödül gibidir.İsmin hakkı verilirse ödülünüzü alırsınız.
      </Text>
      <Text style={styles.descriptionItem}>{description}</Text>
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
