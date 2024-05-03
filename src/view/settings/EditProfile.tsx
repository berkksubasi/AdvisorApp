import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Avatar, Input, Switch } from "react-native-elements";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { CustomButton } from "../../components/button";
import RNPickerSelect from "react-native-picker-select";
import { useTheme } from "../../providers/ThemeContext";
import { ScrollView } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";

const dummyData = {
  name: "Berk Subaşı",
  email: "johndoe@example.com",
  gender: "male",
  age: 30,
  birthDate: "1994-10-18",
  birthTime: "10:00:00",
  birthPlace: "Turkey",
  zodiacSign: "Terazi",
  occupation: "Software Developer",
  relationshipStatus: "Single",
  lgbtq: false,
  avatarUrl: "https://example.com/avatar.jpg",
};

const EditProfile: React.FC = () => {
  const [name, setName] = useState(dummyData.name);
  const [age, setAge] = useState(dummyData.age);
  const [email, setEmail] = useState(dummyData.email);
  const [gender, setGender] = useState(dummyData.gender);
  const [birthDate, setBirthDate] = useState(dummyData.birthDate);
  const [birthTime, setBirthTime] = useState(dummyData.birthTime);
  const [birthPlace, setBirthPlace] = useState(dummyData.birthPlace);
  const [zodiacSign, setZodiacSign] = useState(dummyData.zodiacSign);
  const [occupation, setOccupation] = useState(dummyData.occupation);
  const [relationshipStatus, setRelationshipStatus] = useState(
    dummyData.relationshipStatus
  );
  const [lgbtq, setLGBTQ] = useState(dummyData.lgbtq);
  const [avatarUrl, setAvatarUrl] = useState(dummyData.avatarUrl);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedBirthDate, setSelectedBirthDate] = useState<string | null>(
    null
  );
  const [selectedBirthTime, setSelectedBirthTime] = useState<string | null>(
    null
  );

  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Galeriye erişim izni gereklidir.");
        }
      }
    })();
  }, []);

  const selectAvatar = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

    if (!result.canceled) {
      setAvatarUrl(result.assets[0].uri);
    }
  };

  const updateProfile = () => {
    // Profil güncelleme işlemini burada gerçekleştirin
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmDate = (date: Date) => {
    setBirthDate(date.toISOString());
    setSelectedBirthDate(date.toDateString());
    hideDatePicker();
  };

  const handleConfirmTime = (time: Date) => {
    setBirthTime(time.toISOString());
    setSelectedBirthTime(time.toLocaleTimeString());
    hideTimePicker();
  };

  const renderInput = (
    placeholder: string,
    value: string,
    onChangeText: (text: string) => void
  ) => {
    return (
      <Input
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        inputStyle={styles.input}
        containerStyle={styles.inputContainer}
        inputContainerStyle={styles.inputInnerContainer}
      />
    );
  };

  useEffect(() => {
    if (birthDate !== "") {
      setSelectedBirthDate(new Date(birthDate).toDateString());
    }
    if (birthTime !== "") {
      setSelectedBirthTime(new Date(birthTime).toLocaleTimeString());
    }
  }, [birthDate, birthTime]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? "black" : "white" },
      ]}
    >
      <View style={styles.avatarContainer}>
        <TouchableOpacity onPress={selectAvatar}>
          <Avatar
            rounded
            size="large"
            source={{ uri: avatarUrl }}
            containerStyle={styles.avatar}
          />
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <Text
            style={[styles.userName, { color: darkMode ? "white" : "black" }]}
          >
            {name && `${name}`}
            {name && email && ", "}
            {age && `${age}`}
          </Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {renderInput("Ad Soyad", name, setName)}
        {renderInput("E-posta", email, setEmail)}

        <RNPickerSelect
          placeholder={{ label: "Cinsiyet Seçiniz", value: null }}
          onValueChange={(value) => setGender(value)}
          items={[
            { label: "Kadın", value: "female" },
            { label: "Erkek", value: "male" },
          ]}
          style={{
            inputIOS: styles.pickerInput,
            inputAndroid: styles.pickerInput,
          }}
        />

        <TouchableOpacity
          style={styles.datePickerContainer}
          onPress={showDatePicker}
        >
          <Text style={styles.datePickerText}>
            {selectedBirthDate
              ? `Seçilen Doğum Tarihi: ${selectedBirthDate}`
              : "Doğum Tarihi Seç"}
          </Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirmDate}
          onCancel={hideDatePicker}
          cancelTextIOS="İptal"
          confirmTextIOS="Tamam"
        />

        <TouchableOpacity
          style={styles.datePickerContainer}
          onPress={showTimePicker}
        >
          <Text style={styles.datePickerText}>
            {selectedBirthTime
              ? `Seçilen Doğum Saati: ${selectedBirthTime}`
              : "Doğum Saati Seç"}
          </Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleConfirmTime}
          onCancel={hideTimePicker}
          is24Hour
          cancelTextIOS="İptal"
          confirmTextIOS="Tamam"
        />

        {renderInput("Doğum Yeri", birthPlace, setBirthPlace)}
        {renderInput("Burcun", zodiacSign, setZodiacSign)}
        {renderInput("Meslek", occupation, setOccupation)}
        {renderInput(
          "İlişki Durumu",
          relationshipStatus,
          setRelationshipStatus
        )}

        <View style={styles.lgbtqContainer}>
          <Text
            style={[
              styles.datePickerText,
              {
                justifyContent: "space-between",
                flexDirection: "row",
                flex: 1,
                padding: 10,
              },
            ]}
          >
            LGBTQ
          </Text>
          <Switch
            value={lgbtq}
            onValueChange={(value) => setLGBTQ(value)}
            color="#8576FF"
          />
        </View>
      </ScrollView>
      <CustomButton
        variant="primary"
        title="Güncelle"
        onPress={updateProfile}
        style={{ marginBottom: 30 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#8576FF",
    marginBottom: 20,
  },
  lgbtqContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
  },
  inputInnerContainer: {
    borderRadius: 10,
    padding: 8,
    borderWidth: 0.5,
    borderColor: "#8576FF",
  },
  datePickerContainer: {
    marginBottom: 20,
    padding: 10,
  },
  datePickerText: {
    fontSize: 18,
    color: "#C0C0FF",
  },
  pickerInput: {
    color: "#C0C0FF",
    fontSize: 20,
    padding: 10,
    marginBottom: 20,
  },
  input: {
    color: "#000",
  },
  userInfo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginLeft: "auto",
  },
});

export default EditProfile;
