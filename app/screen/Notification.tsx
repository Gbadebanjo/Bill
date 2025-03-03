import React from "react";
import { View, Text,  FlatList, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import HeadingField from "@/components/Header";

const notifications = [
  {
    id: "1",
    date: "Today",
    data: [
      { icon: "cog", title: "30% Special Discount!", message: "Special promotion only valid today" },
      { icon: "wallet", title: "Top Up E-Wallet Successful!", message: "You have to top up your e-wallet" },
    ],
  },
  {
    id: "2",
    date: "Yesterday",
    data: [
      { icon: "map-marker-alt", title: "New Services Available!", message: "Now you can track drivers in real-time" },
    ],
  },
  {
    id: "3",
    date: "December 22, 2024",
    data: [
      { icon: "credit-card", title: "Payment Successful!", message: "You have made a taxi payment" },
      { icon: "link", title: "Credit Card Connected!", message: "Credit Card has been linked!" },
    ],
  },
];

const NotificationScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      {/* Header */}
     <HeadingField title="Notification" onPress={() => navigation.goBack()} />

      {/* Notifications List */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>{item.date}</Text>
            {item.data.map((notif, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#f8fafc",
                  padding: 15,
                  borderRadius: 10,
                  marginBottom: 10,
                }}
              >
                <Icon name={notif.icon} size={20} color="#000" style={{ marginRight: 15 }} />
                <View>
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>{notif.title}</Text>
                  <Text style={{ fontSize: 12, color: "#555" }}>{notif.message}</Text>
                </View>
              </View>
            ))}
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default NotificationScreen;
