import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { CustomButton } from "../components/button";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native-elements";
import sideLaneTypologyDescription from "../data/sideLaneDATA";

interface SideLaneTypologyDescription {
  id: number;
  title: string;
  description: string;
}

function SideLaneResultView({ route }) {
  const { id } = route.params;
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const windowWidth = useWindowDimensions().width;

  // ID'ye göre tipoloji açıklamasını bul.
  const typologyDescription: SideLaneTypologyDescription | undefined =
    sideLaneTypologyDescription.find((desc) => desc.id === id);

  if (!typologyDescription) {
    return null; // tipoloji açıklaması bulunmazsa null döndür.
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../images/result.png")}
        style={{
          width: windowWidth - 40,
          height: (windowWidth - 40) * 0.3,
          resizeMode: "contain",
        }}
      />
      <ScrollView>
        <View style={styles.descriptionContainer}>
          <Text style={styles.title}>{typologyDescription.title}</Text>
          <Text style={styles.content}>{typologyDescription.description}</Text>
        </View>
      </ScrollView>
      <View style={{ width: "100%", marginBottom: -50 }}>
        <CustomButton title="Geri Dön" onPress={handleGoBack} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    paddingTop: 100,
    paddingBottom: 100,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
  resultText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  descriptionContainer: {
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
    color: "white",
    textAlign: "justify",
  },
  content: {
    fontSize: 16,
    marginBottom: 10,
    color: "white",
    lineHeight: 30,
  },
});

export default SideLaneResultView;
