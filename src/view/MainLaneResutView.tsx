import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Animated,
  Easing,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { Image } from "react-native-elements";
import Star from "../components/animatebackground/Star";
import { CustomButton } from "../components/button";

interface MainLaneResutViewProps {
  route: {
    params: {
      typologyDescription: {
        title: string;
        content: string;
        yapiciPotansiyeller?: string[];
        olumsuzPotansiyeller?: string[];
        yikiciPotansiyeller?: string[];
      };
    };
  };
}

const MainLaneResutView: React.FC<MainLaneResutViewProps> = ({ route }) => {
  const { typologyDescription } = route.params;
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const windowWidth = useWindowDimensions().width;
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
  const numberOfStars = 500;

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
          <Text style={styles.content}>{typologyDescription.content}</Text>
          <Text style={styles.title}>Yapıcı Potansiyeller</Text>
          {typologyDescription.yapiciPotansiyeller &&
            typologyDescription.yapiciPotansiyeller.map((item, index) => (
              <Text key={index} style={styles.descriptionItem}>
                {item}
              </Text>
            ))}

          <Text style={styles.title}>Olumsuz Potansiyeller</Text>
          {typologyDescription.olumsuzPotansiyeller &&
            typologyDescription.olumsuzPotansiyeller.map((item, index) => (
              <Text key={index} style={styles.descriptionItem}>
                {item}
              </Text>
            ))}

          <Text style={styles.title}>Yıkıcı Potansiyeller</Text>
          {typologyDescription.yikiciPotansiyeller &&
            typologyDescription.yikiciPotansiyeller.map((item, index) => (
              <Text key={index} style={styles.descriptionItem}>
                {item}
              </Text>
            ))}
        </View>
      </ScrollView>
      <View style={{ width: "100%", marginBottom: -50 }}>
        <CustomButton title="Geri Dön" onPress={handleGoBack} />
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
  descriptionItem: {
    fontSize: 16,
    marginBottom: 5,
    color: "white",
    lineHeight: 30,
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default MainLaneResutView;
