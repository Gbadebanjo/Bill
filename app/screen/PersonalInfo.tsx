import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Picker } from "@react-native-picker/picker";
import HeadingField from "@/components/Header";
import SelectInput from "@/components/ui/SelectInput";

const PersonalInfoScreen: React.FC = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    firstName: "Temitope",
    lastName: "Temitope",
    email: "temitopedml@gmail.com",
    address: "12, Fatoye Street, Ebute West, Lagos",
    phone: "08164626619",
    meterNumber: "1234567858",
    accumulatedUnits: "1,025 Unit",
    property: "2 bedroom",
  });

  // Function to update form values
  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Reusable Function for Editable Input Fields
  const renderEditableField = (
    label: string,
    field: keyof typeof formData,
    value: string,
    onChange: (field: keyof typeof formData, value: string) => void
  ) => (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => onChange(field, text)}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <HeadingField title="Personal Info" onPress={() => navigation.goBack()} />

      {/* Form Fields */}
      <View style={styles.form}>
        {renderEditableField("First Name", "firstName", formData.firstName, handleInputChange)}
        {renderEditableField("Last Name", "lastName", formData.lastName, handleInputChange)}
        {renderEditableField("Email", "email", formData.email, handleInputChange)}
        {renderEditableField("Address", "address", formData.address, handleInputChange)}
        {renderEditableField("Phone", "phone", formData.phone, handleInputChange)}
        {renderEditableField("Metre Number", "meterNumber", formData.meterNumber, handleInputChange)}
        {renderEditableField("Accumulated Units", "accumulatedUnits", formData.accumulatedUnits, handleInputChange)}

        {/* Dropdown */}
        <View style={styles.dropdownContainer}>
          <Text style={styles.label}>Choose Property</Text>
          <SelectInput
        items={[
          { label: "New York", value: "New York" },
          { label: "Los Angeles", value: "Los Angeles" },
          { label: "Chicago", value: "Chicago" },
        ]}
        placeholder={{ label: "Select city", value: "" }}
        onValueChange={(value) => console.log(value)}
        width="100%"
      />
        </View>
      </View>

      {/* Update Button */}
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Update</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 20 },
  form: { marginTop: 20 },
  inputContainer: { marginBottom: 10, paddingVertical: 5, backgroundColor: '#f8fafc' },
  label: { fontSize: 12, color: "#666", paddingLeft: 10 },
  input: {
    backgroundColor: "#f8fafc",
    padding: 12,
    borderRadius: 8,
    fontSize: 14,
    color: "#333",
  },
  dropdownContainer: {
     marginBottom: 15,
     backgroundColor: '#f8fafc',
     },
  dropdown: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F8F9",
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#F7E95E",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: { fontSize: 16, fontWeight: "600", color: "#000" },
});

export default PersonalInfoScreen;
