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

const ChakraAffirmations = ({ chakraData }) => {
  return (
    <View style={styles.chakraContainer}>
      <Text style={styles.chakraTitle}>{chakraData.chakra}</Text>
      {chakraData.affirmations.map((affirmation, index) => (
        <Text key={index} style={styles.affirmation}>
          {`${index + 1}. ${affirmation}`}
        </Text>
      ))}
    </View>
  );
};

const Affirmations = () => {
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
    <View style={styles.container}>
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
