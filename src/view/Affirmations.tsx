import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Animated,
  Easing,
  Dimensions,
} from "react-native";
import Star from "../components/animatebackground/Star";
import rootChakraAffirmationsData from "../data/rootChakraAffirmationsData";
import { ButtonGoBack } from "../components/button";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../providers/ThemeContext";

const Affirmations = () => {
  const { darkMode } = useTheme();
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const [animatedValue] = useState(new Animated.Value(0));
  const starColors = [
    "#FFD700",
    "#FFA500",
    "#FF6347",
    "#00FFFF",
    "#FFFF00",
    "#32CD32",
    "#FF1493",
    "#7B68EE",
  ];

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 0.1,
        duration: 100000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  const numberOfStars = 500;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? "black" : "white" },
      ]}
    >
      <Animated.View style={styles.background}>
        {[...Array(numberOfStars)].map((_, index) => (
          <Star
            key={index}
            size={Math.random() * 1 + 0.5}
            color={starColors[Math.floor(Math.random() * starColors.length)]}
            style={{
              left: Math.random() * Dimensions.get("window").width,
              top: Math.random() * Dimensions.get("window").height,
            }}
            animatedValue={animatedValue}
          />
        ))}
      </Animated.View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {rootChakraAffirmationsData.map((chakraData) => (
          <ChakraAffirmations key={chakraData.id} chakraData={chakraData} />
        ))}
      </ScrollView>
      <View style={{ width: "100%", marginBottom: -50 }}>
        <ButtonGoBack onPress={handleGoBack} />
      </View>
    </View>
  );
};

const ChakraAffirmations = ({ chakraData }) => {
  const { darkMode } = useTheme();
  return (
    <View style={styles.chakraContainer}>
      <View style={styles.innerContainer}>
        <Text
          style={[styles.chakraTitle, { color: darkMode ? "white" : "black" }]}
        >
          {chakraData.chakra}
        </Text>
        {chakraData.affirmations.map((affirmation, index) => (
          <Text
            key={index}
            style={[
              styles.affirmation,
              { color: darkMode ? "white" : "black" },
            ]}
          >
            {`${index + 1}. ${affirmation}`}
          </Text>
        ))}
      </View>
    </View>
  );
};

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
  },
  innerContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#8576FF30",
    borderRadius: 16,
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  affirmationsContainer: {
    zIndex: 1,
  },
  chakraContainer: {
    marginBottom: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 40,
    textAlign: "left",
  },

  chakraTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
    textAlign: "left",
  },
  affirmation: {
    fontSize: 16,
    color: "white",
    marginBottom: 10,
    textAlign: "left",
  },
});

export default Affirmations;
