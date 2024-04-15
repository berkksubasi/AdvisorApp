import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { Input, Text } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { CustomButton } from "../../components/button";

function RegisterView() {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation();
  const { height } = useWindowDimensions();

  const handleRegister = () => {
    if (
      !fullName.trim() ||
      !userName.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      Alert.alert("Uyarı", "Lütfen tüm alanları doldurun.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Uyarı", "Şifreler uyuşmuyor.");
      return;
    }

    // Kayıt başarılı alert göster
    Alert.alert("Başarılı", "Kayıt işlemi başarıyla tamamlandı.", [
      { text: "Tamam", onPress: () => navigation.navigate("Login" as never) },
    ]);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={[styles.container, { minHeight: height }]}>
        <Image
          source={require("../../images/page-icon.png")}
          style={styles.image}
        />

        <Input
          placeholder="Ad Soyad"
          onChangeText={(text) => setFullName(text)}
          value={fullName}
          placeholderTextColor="#ffffff90"
          leftIcon={{
            type: "font-awesome",
            name: "user-circle",
            color: "#ffffff90",
          }}
          autoComplete="off"
          inputStyle={{ color: "white" }}
        />
        <Input
          placeholder="Kullanıcı Adı"
          onChangeText={(text) => setUserName(text)}
          value={userName}
          placeholderTextColor="#ffffff90"
          leftIcon={{
            type: "font-awesome",
            name: "user",
            color: "#ffffff90",
          }}
          autoComplete="off"
          inputStyle={{ color: "white" }}
        />
        <Input
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholderTextColor="#ffffff90"
          leftIcon={{
            type: "font-awesome",
            name: "envelope",
            color: "#ffffff90",
          }}
          autoComplete="off"
          inputStyle={{ color: "white" }}
        />
        <Input
          placeholder="Telefon Numarası"
          onChangeText={(text) => setPhone(text)}
          value={phone}
          placeholderTextColor="#ffffff90"
          leftIcon={{
            type: "font-awesome",
            name: "phone",
            color: "#ffffff90",
          }}
          autoComplete="off"
          inputStyle={{ color: "white" }}
        />
        <Input
          placeholder="Şifre"
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholderTextColor="#ffffff90"
          leftIcon={{
            type: "font-awesome",
            name: "lock",
            color: "#ffffff90",
          }}
          secureTextEntry={true}
          autoComplete="off"
          textContentType="password"
          inputStyle={{ color: "white" }}
        />
        <Input
          placeholder="Şifreyi Onayla"
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          placeholderTextColor="#ffffff90"
          leftIcon={{
            type: "font-awesome",
            name: "lock",
            color: "#ffffff90",
          }}
          secureTextEntry={true}
          autoComplete="off"
          textContentType="password"
          inputStyle={{ color: "white" }}
        />
        <CustomButton title="Kaydol" onPress={handleRegister} />
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Text style={{ color: "white" }}>Zaten bir hesabın var mı?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login" as never)}
          >
            <Text style={{ color: "#8576FF", marginLeft: 5 }}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
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
  image: {
    width: 250,
    height: 250,
    marginBottom: 10,
    marginTop: 30,
  },
});

export default RegisterView;
