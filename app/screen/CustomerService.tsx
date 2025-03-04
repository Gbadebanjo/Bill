import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import HeadingField from "@/components/Header";

const CustomerServiceScreen = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Hi Daniel, good morning",
      time: "10:00am",
      sender: "user",
    },
    {
      id: "2",
      text: "I'm currently on the side of the road, the sidewalk is close to Mall Plaza",
      time: "10:00am",
      sender: "user",
    },
    {
      id: "3",
      text: "Can you pick up right away ?? I'm in a bit of a hurry",
      time: "10:00am",
      sender: "user",
    },
    {
      id: "4",
      text: "Hi Daniel, good morning",
      time: "10:00am",
      sender: "support",
    },
    {
      id: "5",
      text: "Of course, I'll pick you up, right away, I'll be there in 2 minutes",
      time: "10:00am",
      sender: "support",
    },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        {
          id: Date.now().toString(),
          text: message,
          time: "10:01am",
          sender: "user",
        },
      ]);
      setMessage("");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <HeadingField title="Customer Service" />

      {/* Date Badge */}
      <View style={styles.dateBadge}>
        <Text style={styles.dateText}>Today</Text>
      </View>

      {/* Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.sender === "user"
                ? styles.userMessage
                : styles.supportMessage,
            ]}
          >
            <Text style={styles.messageText}>{item.text}</Text>
            <Text style={styles.timeText}>{item.time}</Text>
          </View>
        )}
        inverted
      />

      {/* Reply Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Reply message"
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity onPress={handleSendMessage} style={styles.sendButton}>
          <Ionicons name="paper-plane" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", paddingHorizontal: 20, paddingTop: 20 },
  dateBadge: {
    alignSelf: "center",
    backgroundColor: "#d3d3d3",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 16,
    marginVertical: 10,
  },
  dateText: { fontSize: 12, fontWeight: "bold" },
  messageContainer: {
    padding: 10,
    marginVertical: 4,
    borderRadius: 12,
    maxWidth: "75%",
  },
  userMessage: { alignSelf: "flex-end", backgroundColor: "black" },
  supportMessage: { alignSelf: "flex-start", backgroundColor: "#616161" },
  messageText: { color: "white" },
  timeText: {
    fontSize: 10,
    alignSelf: "flex-end",
    marginTop: 4,
    color: "gray",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFD700",
    paddingHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 8,
  },
  input: { flex: 1, fontSize: 16 },
  sendButton: { padding: 8, borderRadius: 8 },
});

export default CustomerServiceScreen;
