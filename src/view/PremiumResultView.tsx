import React from "react";
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
import FonLaneCalculateView from "./FonLaneCalculateView";

interface FonLaneResultProps {
  route: {
    params: {
      typologyId?: number;
      title: string;
      description: string;
      chakraCounts: number[];
      name: string;
      lastname: string;
      birthdate: string;
    };
  };
}

const PremiumResultView: React.FC<FonLaneResultProps> = ({ route }) => {
  const typologyId = route.params.typologyId - 1;
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const windowWidth = useWindowDimensions().width;
  const [animatedValue] = React.useState(new Animated.Value(0));
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

  React.useEffect(() => {
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

  const { name, title, description, chakraCounts } = route.params; // 'user' değerini al

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
          <View style={{ flexDirection: "row" }}>
            <Text style={{ ...styles.title, fontWeight: "300" }}>Sevgili </Text>
            <Text style={styles.title}>
              {route.params.name} {route.params.lastname},
            </Text>
          </View>
          <Text style={styles.content}>{route.params.birthdate}</Text>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{description}</Text>
          <Text style={styles.title}>Çakra Sütunu</Text>
          {chakraCounts.map((count, index) => (
            <Text key={index} style={styles.chakraItem}>
              {`${index + 1}. Çakra = ${count} Birim`}
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
  chakraItem: {
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

export default PremiumResultView;
