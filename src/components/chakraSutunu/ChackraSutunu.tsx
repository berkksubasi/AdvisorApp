import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { useTheme } from "../../providers/ThemeContext";

interface ChakraSutunuProps {
  chakraCounts: number[];
}

const ChakraSutunu: React.FC<ChakraSutunuProps> = ({ chakraCounts }) => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: darkMode ? "white" : "black" }]}>
        Çakra Sütunu:
      </Text>
      <Text style={[styles.content, { color: darkMode ? "white" : "black" }]}>
        Çakralar bedene enerji aktaran merkezlerdir. Bu giriş kapıları
        blokajlandığında bedeni besleyen enerji kısıtlanmaktadır. Bu enerji
        kısıtlaması belli organları güçsüz düşürerek hastalıklara dönüşmektedir.
        Her çakra beynin muayyen bölgesini açan ve uyandıran bir anahtar veya
        düğme gibidir. Birçok insanda bu enerji akımı artırılabilir,
        canlandırılabilir ve daha iyi çalışmasına imkan sağlanabilir. Çakralar
        enerji kanalları ile bağlantıdadır. İnsanda 72.000 enerji kanalı
        mevcuttur.
      </Text>
      {chakraCounts.map((count, index) => (
        <Text
          key={index}
          style={[styles.chakraItem, { color: darkMode ? "white" : "black" }]}
        >
          {`${index + 1}. Çakra = ${count} Birim`}
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
  content: {
    fontSize: 10,
    marginBottom: 10,
    color: "yellow",
    lineHeight: 12,
  },
  chakraItem: {
    fontSize: 16,
    marginBottom: 5,
    color: "white",
  },
});

export default ChakraSutunu;
