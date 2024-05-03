import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { Card } from "../components/card";

import Profile from "../components/profile/Profile";
import { useTheme } from "../providers/ThemeContext";

function HomeView() {
  const navigation = useNavigation();
  const { darkMode } = useTheme();

  const numerology = () => {
    navigation.dispatch(CommonActions.navigate("PremiumCalculate"));
  };

  const affirmations = () => {
    navigation.dispatch(CommonActions.navigate("Affirmations"));
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? "black" : "white" },
      ]}
    >
      <View style={styles.header}>
        <Profile />

        <Text
          style={[styles.greeting, { color: darkMode ? "white" : "black" }]}
        >
          Merhaba, Berk Subaşı
        </Text>
        <Card
          title="Numeroloji Analizi"
          backgroundImage={require("../images/result.png")}
          onPress={numerology}
        />

        <View style={styles.cardRow}>
          <Card
            title="JASS Seansı"
            variant="small"
            backgroundImage={require("../images/jass.webp")}
          />
          <Card
            title="Healy Frekans"
            variant="small"
            backgroundImage={require("../images/healy.png")}
          />
        </View>
        <View style={styles.cardRow}>
          <Card
            title="Spritüel Koçluk"
            variant="small"
            backgroundImage={require("../images/coaching.jpeg")}
          />
          <Card
            title="Bio Rezonans"
            variant="small"
            backgroundImage={require("../images/bioresonance.jpeg")}
          />
        </View>
        <View style={styles.cardRow}>
          <Card
            title="Olumlamalar"
            variant="small"
            backgroundImage={require("../images/affirmation.avif")}
            onPress={affirmations}
          />
          <Card
            title="Meditasyonlar"
            variant="small"
            backgroundImage={require("../images/meditation.jpeg")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    paddingTop: 30,
    paddingBottom: 80,
  },
  header: {
    alignItems: "center",
    paddingHorizontal: 10,
  },
  greeting: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    padding: 4,
    textAlign: "left",
    alignSelf: "flex-start",
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default HomeView;
