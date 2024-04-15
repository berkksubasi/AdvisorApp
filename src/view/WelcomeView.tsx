import React from "react";
import { View, StyleSheet } from "react-native";
import { Image, Text } from "react-native-elements";
import { CustomButton } from "../components/button";

const WelcomeView = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/icon.png")} />
      <Text
        style={{
          textAlign: "center",
          color: "white",
          width: "65%",
        }}
      >
        Soul Touch ile ruhunuzun derinliklerine{"\n"}dokunacak bir yolculuğa
        hazır olun.
      </Text>
      <View style={styles.containerInner}>
        <CustomButton
          title="Giriş Yap"
          variant="primary"
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={{ marginTop: 200, marginBottom: 8 }}
        />
        <CustomButton
          title="Kaydol"
          variant="secondary"
          onPress={() => {
            navigation.navigate("Register");
          }}
        />
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
    backgroundColor: "black",
  },
  containerInner: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    width: "100%",
  },
  image: {
    width: 600,
    height: 180,
    marginBottom: 10,
    marginTop: 50,
  },
});

export default WelcomeView;
