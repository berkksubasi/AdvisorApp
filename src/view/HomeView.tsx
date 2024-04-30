import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { Avatar, Icon } from "react-native-elements";
import { Card } from "../components/card";
import { useTheme } from "../providers/ThemeContext";
import LogoText from "../svg/LogoText";

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
        <View style={styles.profile}>
          <View style={styles.currencyContainer}>
            <Icon
              name="dollar-sign"
              type="feather"
              color={darkMode ? "#fff" : "#000"}
              size={24}
              style={styles.currencyIcon}
            />
            <Text style={styles.currencyText}>0.1</Text>
          </View>

          <LogoText
            width={300}
            height={75}
            color={darkMode ? "#fff" : "#8576FF"}
          />

          <Avatar
            rounded
            source={{ uri: "https://i.pravatar.cc/300" }}
            iconStyle={styles.avatarIcon}
          />
        </View>
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
  profile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around", // Spacing items equally
    width: "100%",
    paddingHorizontal: 20, // Adjust as needed
    paddingTop: 12,
    marginBottom: 20,
  },

  currencyContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#8576FF",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  currencyIcon: {
    marginRight: 5,
  },
  currencyText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  avatarIcon: {
    borderColor: "#fff",
    borderWidth: 1,
  },
  greeting: {
    color: "#000",
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
