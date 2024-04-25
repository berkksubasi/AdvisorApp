import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { Avatar, Icon, Image } from "react-native-elements";
import { Card } from "../components/card";
import { useTheme } from "../providers/ThemeContext";

function HomeView() {
  const navigation = useNavigation();
  const { darkMode } = useTheme();

  const windowWidth = useWindowDimensions().width;
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
          <View
            style={[
              styles.currency,
              { borderColor: darkMode ? "white" : "black" },
            ]}
          >
            <Icon
              name="dollar-sign"
              type="feather"
              color={darkMode ? "white" : "black"}
              size={24}
              style={styles.currencyIcon}
            />
            <Text
              style={[
                styles.currencyText,
                { color: darkMode ? "white" : "black" },
              ]}
            >
              0.1
            </Text>
          </View>
          <Image
            source={require("../images/logoText.png")}
            style={{
              width: windowWidth - 88,
              height: (windowWidth - 88) * 0.2,
              resizeMode: "contain",
            }}
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

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Card
            title="JASS Seansı"
            variant="small"
            backgroundImage={require("../images/jass.webp")}
          />
          <Card
            title="Healy Frekans "
            variant="small"
            backgroundImage={require("../images/healy.png")}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Card
            title="Spritüel Koçluk"
            variant="small"
            backgroundImage={require("../images/coaching.jpeg")}
          />
          <Card
            title="Bio Rezonans "
            variant="small"
            backgroundImage={require("../images/bioresonance.jpeg")}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Card
            title="Olumlamalar "
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
    paddingTop: 50,
    paddingBottom: 80,
    width: "100%",
    height: "100%",
  },
  header: {
    alignItems: "center",
    paddingHorizontal: 10,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    paddingHorizontal: 20,
  },
  currency: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 100,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  currencyIcon: {
    marginRight: 5,
  },
  currencyText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  logo: {
    width: "50%",
    resizeMode: "contain",
  },
  avatarIcon: {
    borderColor: "white",
    borderWidth: 1,
  },
  greeting: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    padding: 4,
    textAlign: "left",
    alignSelf: "flex-start",
  },
});

export default HomeView;
