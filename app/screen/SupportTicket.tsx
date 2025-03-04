import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import HeadingField from "@/components/Header";
import SelectInput from "@/components/ui/SelectInput";

export default function SupportTicket() {
  const navigation = useNavigation();
  const [category, setCategory] = useState("Transportation");
  const [title, setTitle] = useState("Administrator");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("High");

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <HeadingField
        title="Support Ticket"
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.subtitle}>
        Send your complaints and we would respond to you
      </Text>
      <SelectInput
        label="CATEGORY"
        items={[
          { label: "New York", value: "New York" },
          { label: "Los Angeles", value: "Los Angeles" },
          { label: "Chicago", value: "Chicago" },
        ]}
        placeholder={{ label: "Transportation", value: "" }}
        onValueChange={(value) => console.log(value)}
        width="100%"
      />

      <View style={styles.inputContainer}>
        <Text style={styles.label}>TITLE</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          editable={false}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>DESCRIPTION</Text>
        <TextInput
          style={[styles.input, styles.descriptionInput]}
          placeholder="Enter Texts"
          multiline
          value={description}
          onChangeText={setDescription}
        />
      </View>
      <SelectInput
        label="ORDER PRIORITY"
        items={[
          { label: "New York", value: "New York" },
          { label: "Los Angeles", value: "Los Angeles" },
          { label: "Chicago", value: "Chicago" },
        ]}
        placeholder={{ label: "High", value: "" }}
        onValueChange={(value) => console.log(value)}
        width="100%"
      />

      {/* Submit Button */}
      <Pressable
        style={styles.submitButton}
        onPress={() => console.log("Complaint Submitted")}
      >
        <Text style={styles.submitText}>Submit</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  backButton: { marginBottom: 15 },
  backText: { fontSize: 18, color: "#000" },
  subtitle: {
    fontSize: 14,
    color: "#181A20",
    marginVertical: 20,
    fontWeight: "600",
  },
  inputContainer: { marginBottom: 15 },
  label: { fontSize: 12, fontWeight: "bold", color: "#333", marginBottom: 5 },
  input: {
    backgroundColor: "#f8fafc",
    padding: 15,
    borderRadius: 10,
    fontSize: 14,
  },
  descriptionInput: { height: 100, textAlignVertical: "top" },
  pickerContainer: { backgroundColor: "#f8fafc", borderRadius: 10 },
  submitButton: {
    backgroundColor: "#F7E55E",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginTop: "auto",
  },
  submitText: { fontSize: 16, fontWeight: "bold", color: "#000" },
});
