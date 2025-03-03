import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import HeadingField from "@/components/Header";

const ChangePasswordScreen: React.FC = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  // Handle input change
  const handleChange = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  // Toggle password visibility
  const toggleVisibility = (key: keyof typeof showPassword) => {
    setShowPassword((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Check if all fields are filled
  const isFormValid = form.oldPassword && form.newPassword && form.confirmPassword;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <HeadingField title="Change Password" onPress={() => navigation.goBack()} />

      {/* Password Input Fields */}
      <View style={styles.inputContainer}>
        {renderPasswordField("Old Password", "oldPassword", "old")}
        {renderPasswordField("New Password", "newPassword", "new")}
        {renderPasswordField("Confirm Password", "confirmPassword", "confirm")}
      </View>

      {/* Update Button */}
      <Pressable style={[styles.updateButton, !isFormValid && styles.disabledButton]} disabled={!isFormValid}>
        <Text style={styles.updateText}>Update</Text>
      </Pressable>
    </SafeAreaView>
  );

  // Function to render password fields
  function renderPasswordField(label: string, key: keyof typeof form, toggleKey: keyof typeof showPassword) {
    return (
      <View style={styles.inputBox}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            value={form[key]}
            onChangeText={(value) => handleChange(key, value)}
            secureTextEntry={!showPassword[toggleKey]}
          />
          <Pressable onPress={() => toggleVisibility(toggleKey)}>
            <Icon name={showPassword[toggleKey] ? "eye" : "eye-off"} size={16} color="#000" />
          </Pressable>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 20 },
  header: { flexDirection: "row", alignItems: "center", paddingVertical: 15 },
  headerTitle: { fontSize: 18, fontWeight: "600", marginLeft: 10 },
  inputContainer: { marginTop: 20 },
  inputBox: { marginBottom: 15, backgroundColor: "#f8f8f8", borderRadius: 10, padding: 12 },
  label: { fontSize: 12, color: "#000", marginBottom: 5 },
  inputWrapper: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  input: { flex: 1, fontSize: 14, color: "#000", letterSpacing: 2 },
  updateButton: { backgroundColor: "#FBEA43", paddingVertical: 15, borderRadius: 30, alignItems: "center", marginTop: "auto", marginBottom: 20 },
  disabledButton: { backgroundColor: "#ddd" },
  updateText: { fontSize: 16, fontWeight: "600", color: "#000" },
});

export default ChangePasswordScreen;
