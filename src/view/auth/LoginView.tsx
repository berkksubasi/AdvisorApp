import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Image, Input, Text } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { CustomButton } from "../../components/button";
import { TouchableOpacity } from "react-native-gesture-handler";

function LoginView() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleLogin = () => {
    if (!userName.trim() || !password.trim()) {
      Alert.alert("Uyarı", "Kullanıcı adı ve şifre gereklidir.");
      return;
    }

    // Kullanıcı adı ve şifre kabul edilsin TODO: Kullanıcı adı ve şifre kontrolu eklenecek
    const isLoginSuccessful = true;

    if (isLoginSuccessful) {
      // Giriş başarılı alert göster
      Alert.alert("Başarılı", "Giriş işlemi başarıyla tamamlandı.", [
        {
          text: "Tamam",
          onPress: () => navigation.navigate("Home" as never),
        },
      ]);
    } else {
      Alert.alert("Hata", "Giriş işlemi başarısız oldu.");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../images/page-icon.png")}
        style={{
          width: 250,
          height: 250,
          marginBottom: 30,
        }}
      />
      <Input
        placeholder="Email"
        onChangeText={(text) => setUserName(text)}
        value={userName}
        style={styles.input}
      />
      <Input
        placeholder="Şifre"
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholderTextColor={"#ffffff90"}
        secureTextEntry
        style={styles.input}
      />

      <CustomButton title="Giriş Yap" onPress={handleLogin} />
      <View style={styles.registerLink}>
        <Text style={styles.registerText}>Hesabınız yok mu?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register" as never)}
        >
          <Text style={{ color: "#8576FF", marginLeft: 5 }}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("ForgotPassword" as never)}
      >
        <Text style={styles.forgotPasswordText}>Şifremi Unuttum!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "black",
  },
  input: {
    color: "white",
  },
  registerLink: {
    flexDirection: "row",
    marginTop: 20,
  },
  registerText: {
    color: "white",
  },
  forgotPasswordText: {
    color: "#8576FF50",
    marginTop: 20,
  },
  registerLinkText: {
    color: "#8576FF",
  },
});

export default LoginView;
