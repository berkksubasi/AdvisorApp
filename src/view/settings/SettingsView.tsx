import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { ListItem, Icon, Switch, Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../providers/ThemeContext";
import * as Notifications from "expo-notifications";

const SettingsView = () => {
  const navigation = useNavigation();
  const goToEditProfile = () => {
    navigation.navigate("EditProfile");
  };

  const { darkMode, toggleTheme } = useTheme();

  // User DummyData
  const user = {
    name: "Berk Subaşı",
    age: 30,
    avatarUrl: "https://via.placeholder.com/150",
  };

  // Notification State
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  useEffect(() => {
    // Uygulama başladığında bildirim izni kontrolü
    checkNotificationPermission();
  }, []);

  const checkNotificationPermission = async () => {
    const { status } = await Notifications.getPermissionsAsync();
    setNotificationsEnabled(status === "granted");
  };

  // Bildirim izni talep etme
  const requestNotificationPermission = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    setNotificationsEnabled(status === "granted");
  };

  // Notification Toggle
  const toggleNotifications = () => {
    if (notificationsEnabled) {
      Alert.alert(
        "Bildirimler Kapatılsın mı?",
        "Bildirimleri kapatmak istediğinizden emin misiniz?",
        [
          {
            text: "İptal",
            style: "cancel",
          },
          {
            text: "Kapat",
            onPress: () => {
              setNotificationsEnabled(false);
              Notifications.cancelAllScheduledNotificationsAsync();
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      requestNotificationPermission();
    }
  };

  const settingsList = [
    {
      title: "Bildirimler",
      icon: "notifications",
      switch: true,
      switchState: notificationsEnabled,
      onSwitchChange: toggleNotifications,
    },
    {
      title: "Açılış Sesi",
      icon: "volume-up",
      switch: true,
      switchState: false,
      onSwitchChange: () => {},
    },
    {
      title: "Dil Seçeneği",
      icon: "language",
      onPress: () => {},
    },
    {
      title: "Karanlık Mod",
      icon: "brightness-4",
      switch: true,
      switchState: darkMode,
      onSwitchChange: toggleTheme,
    },
    {
      title: "Yardım",
      icon: "help",
      onPress: () => {},
    },
    {
      title: "Çıkış Yap",
      icon: "exit-to-app",
    },
    {
      title: "Hesabımı Sil",
      icon: "delete",
      onPress: () => {},
    },
  ];

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? "black" : "white" },
      ]}
    >
      <Text style={[styles.mainTitle, { color: darkMode ? "white" : "black" }]}>
        Genel Ayarlar
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.userContainer}>
          <Avatar
            size={60}
            rounded
            source={{ uri: user.avatarUrl }}
            containerStyle={styles.avatar}
          />
          <View style={styles.userInfo}>
            <Text
              style={[styles.userName, { color: darkMode ? "white" : "black" }]}
            >
              {user.name}
            </Text>
            <Text style={styles.userAge}>{user.age} yaşında</Text>
          </View>
          <TouchableOpacity onPress={goToEditProfile}>
            <Icon
              name="edit"
              type="material"
              color="#8576FF"
              style={styles.editIcon}
            />
          </TouchableOpacity>
        </View>
        {settingsList.map((item, index) => (
          <ListItem
            key={item.title} // Her bir öğe için benzersiz bir anahtar ekleyin
            containerStyle={styles.listItem}
            bottomDivider
            onPress={item.onPress ? item.onPress : null} // onPress işlevi yoksa null kullanın
          >
            <Icon name={item.icon} color="#8576FF" style={styles.icon} />
            <ListItem.Content style={styles.content}>
              <ListItem.Title
                style={[styles.title, { color: darkMode ? "white" : "black" }]}
              >
                {item.title}
              </ListItem.Title>
            </ListItem.Content>
            {item.switch && (
              <Switch
                value={item.switchState}
                onValueChange={item.onSwitchChange}
                color="#8576FF"
              />
            )}
          </ListItem>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingBottom: 80,
    paddingHorizontal: 20,
    backgroundColor: "white",
    justifyContent: "space-evenly",
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 10,
    borderColor: "#8576FF",
    borderWidth: 2,
    backgroundColor: "transparent",
    padding: 10,
  },
  avatar: {
    marginRight: 20,
    borderColor: "#8576FF",
    borderRadius: 50,
    borderWidth: 2,
  },
  userInfo: {
    flex: 1,
    marginRight: "auto",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  userAge: {
    fontSize: 16,
    color: "gray",
  },
  editIcon: {
    fontSize: 24,
  },
  listItem: {
    borderRadius: 10,
    padding: 16,
    borderWidth: 0.5,
    borderColor: "#8576FF",
    marginBottom: 20,
    backgroundColor: "transparent",
  },
  icon: {
    fontSize: 24,
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
    color: "black",
    textAlign: "center",
  },
});

export default SettingsView;
