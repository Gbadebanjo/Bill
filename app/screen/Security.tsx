import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import HeadingField from "@/components/Header";

const SecuritySettingsScreen: React.FC = () => {
  const navigation = useNavigation();
  const [settings, setSettings] = useState({
    biometricValidation: true,
    faceIDValidation: true,
  });

  // Toggle function
  const toggleSwitch = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeadingField title="Security"/>

      {/* Security Options */}
      <View style={styles.list}>
        {renderSwitch("Biometric Validation", "biometricValidation")}
        {renderSwitch("FaceID Validation", "faceIDValidation")}

        {/* Change Password */}
        <Pressable style={styles.option} onPress={() => console.log("Change Password")}>
          <Text style={styles.optionText}>Change Password</Text>
          <Icon name="chevron-right" size={20} color="#000" />
        </Pressable>
      </View>
    </SafeAreaView>
  );

  // Function to render toggle switches
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
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },
  optionText: { fontSize: 14, color: "#000" },
});

export default SecuritySettingsScreen;
