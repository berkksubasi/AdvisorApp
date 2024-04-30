import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Avatar, Input, Switch } from "react-native-elements";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { CustomButton } from "../../components/button";
import RNPickerSelect from "react-native-picker-select";
import { useTheme } from "../../providers/ThemeContext";
import { ScrollView } from "react-native-gesture-handler";

const EditProfile: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [zodiacSign, setZodiacSign] = useState("");
  const [occupation, setOccupation] = useState("");
  const [relationshipStatus, setRelationshipStatus] = useState("");
  const [lgbtq, setLGBTQ] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedBirthDate, setSelectedBirthDate] = useState<string | null>(
    null
  );
  const [selectedBirthTime, setSelectedBirthTime] = useState<string | null>(
    null
  );

  const { darkMode, toggleTheme } = useTheme();

  const selectAvatar = () => {
    // Burada fotoğraf seçme işlemi gerçekleştirilebilir
  };

  const updateProfile = () => {
    // Burada profil güncelleme işlemi gerçekleştirilebilir
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.avatarContainer}>
          <TouchableOpacity onPress={selectAvatar}>
            <Avatar
              rounded
              size="large"
              source={{ uri: avatarUrl }}
              containerStyle={styles.avatar}
            />
          </TouchableOpacity>
        </View>

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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingBottom: 80,
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
});

export default EditProfile;
