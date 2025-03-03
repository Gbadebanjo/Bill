import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
// import DateTimePicker from "@react-native-community/datetimepicker";
import HeadingField from "@/components/Header";

const StatementToSelfScreen: React.FC = () => {
  const navigation = useNavigation();
  const [dates, setDates] = useState({ startDate: "", endDate: "" });
  const [showPicker, setShowPicker] = useState({ start: false, end: false });

  const handleDateChange = (event: any, selectedDate: Date | undefined, type: "startDate" | "endDate") => {
    setShowPicker((prev) => ({ ...prev, [type === "startDate" ? "start" : "end"]: false }));
    if (selectedDate) {
      setDates((prev) => ({
        ...prev,
        [type]: selectedDate.toISOString().split("T")[0], // Format YYYY-MM-DD
      }));
    }
  };

  const isFormValid = dates.startDate && dates.endDate;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
     <HeadingField title="Statement to Self" onPress={() => navigation.goBack()} />

      {/* Info Section */}
      <Text style={styles.infoText}>
        Your statement will be sent to t*********@gmail.com. The maximum possible period for statement request is the
        last 6 months.
      </Text>

      {/* Date Selection */}
      <Text style={styles.periodLabel}>Period</Text>

      <View style={styles.inputBox}>
        <Pressable style={styles.inputWrapper} onPress={() => setShowPicker((prev) => ({ ...prev, start: true }))}>
          <Icon name="calendar" size={18} color="#000" />
          <Text style={[styles.input, !dates.startDate && styles.placeholder]}>{dates.startDate || "Start date"}</Text>
        </Pressable>
      </View>

      <View style={styles.inputBox}>
        <Pressable style={styles.inputWrapper} onPress={() => setShowPicker((prev) => ({ ...prev, end: true }))}>
          <Icon name="calendar" size={18} color="#000" />
          <Text style={[styles.input, !dates.endDate && styles.placeholder]}>{dates.endDate || "End date"}</Text>
        </Pressable>
      </View>

      {/* Date Pickers */}
      {/* {showPicker.start && (
        <DateTimePicker value={new Date()} mode="date" display="default" onChange={(e, date) => handleDateChange(e, date, "startDate")} />
      )}
      {showPicker.end && (
        <DateTimePicker value={new Date()} mode="date" display="default" onChange={(e, date) => handleDateChange(e, date, "endDate")} />
      )} */}

      {/* Send Button */}
      <Pressable style={[styles.sendButton, !isFormValid && styles.disabledButton]} disabled={!isFormValid}>
        <Text style={styles.sendText}>Send</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 20 },
  header: { flexDirection: "row", alignItems: "center", paddingVertical: 15 },
  headerTitle: { fontSize: 18, fontWeight: "600", marginLeft: 10 },
  infoText: { fontSize: 14, color: "#333", marginVertical: 10, lineHeight: 20 },
  periodLabel: { fontSize: 14, fontWeight: "600", marginVertical: 10 },
  inputBox: { marginBottom: 15, backgroundColor: "#f8f8f8", borderRadius: 10, padding: 12 },
  inputWrapper: { flexDirection: "row", alignItems: "center", gap: 10 },
  input: { fontSize: 14, color: "#000" },
  placeholder: { color: "#aaa" },
  sendButton: { backgroundColor: "#FBEA43", paddingVertical: 15, borderRadius: 30, alignItems: "center", marginTop: "auto", marginBottom: 20 },
  disabledButton: { backgroundColor: "#ddd" },
  sendText: { fontSize: 16, fontWeight: "600", color: "#000" },
});

export default StatementToSelfScreen;
