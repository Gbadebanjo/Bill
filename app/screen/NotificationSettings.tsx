import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import HeadingField from "@/components/Header";

const NotificationSettings: React.FC = () => {
  const navigation = useNavigation();
  const [settings, setSettings] = useState({
    generalNotification: true,
    sound: true,
    vibrate: false,
    specialOffers: true,
    promoDiscount: false,
    payment: true,
    appUpdates: true,
    newServices: false,
    newTips: false,
  });

  // Toggle function
  const toggleSwitch = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
     <HeadingField title="Notification" onPress={() => navigation.goBack()} />

      {/* Notification List */}
      <View style={styles.list}>
        {renderSwitch("General Notification", "generalNotification")}
        {renderSwitch("Sound", "sound")}
        {renderSwitch("Vibrate", "vibrate")}
        {renderSwitch("Special Offers", "specialOffers")}
        {renderSwitch("Promo & Discount", "promoDiscount")}
        {renderSwitch("Payment", "payment")}
        {renderSwitch("App Updates", "appUpdates")}
        {renderSwitch("New Services Available", "newServices")}
        {renderSwitch("New Tips Available", "newTips")}
      </View>

      {/* Update Button */}
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Update</Text>
      </Pressable>
    </SafeAreaView>
  );

  // Function to render each toggle switch
  function renderSwitch(label: string, key: keyof typeof settings) {
    return (
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>{label}</Text>
        <Switch
          value={settings[key]}
          onValueChange={() => toggleSwitch(key)}
          thumbColor={"#fff"}
          trackColor={{ false: "#ddd", true: "#000" }} // Black when on
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 20 },
  header: { flexDirection: "row", alignItems: "center", paddingVertical: 15 },
  headerTitle: { fontSize: 18, fontWeight: "600", marginLeft: 10 },
  list: { marginTop: 10 },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  switchLabel: { fontSize: 14, color: "#000" },
  button: {
    backgroundColor: "#F7E95E",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: { fontSize: 16, fontWeight: "600", color: "#000" },
});

export default NotificationSettings;
