import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  ListRenderItem,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import HeadingField from "@/components/Header";

interface SettingOption {
  title?: string;
  icon?: string;
  route?: string;
  isDivider?: boolean;
  isLogout?: boolean;
}

const SettingsScreen: React.FC = () => {
  const navigation = useNavigation();

  const settingsOptions: SettingOption[] = [
    { title: "Personal Info", icon: "user", route: "PersonalInfo" },
    { title: "Notification", icon: "bell", route: "Notification" },
    { title: "Security", icon: "lock", route: "Security" },
  ];

  const aboutOptions: SettingOption[] = [
    { title: "Privacy Policy", icon: "info", route: "PrivacyPolicy" },
    {
      title: "Download Statement",
      icon: "download",
      route: "DownloadStatement",
    },
    { title: "Help Center", icon: "help-circle", route: "HelpCenter" },
  ];

  const renderItem: ListRenderItem<SettingOption> = ({ item }) => {
    if (item.isDivider) {
      return (
        <>
          <Text style={styles.sectionTitle}>About</Text>
          <View style={styles.divider} />
        </>
      );
    }

    if (item.isLogout) {
      return (
        <Pressable
          style={styles.logout}
          onPress={() => console.log("Logging Out")}
        >
          <Icon name="log-out" size={20} color="red" />
          <Text style={styles.logoutText}>LogOut</Text>
        </Pressable>
      );
    }

    return (
      <Pressable
        style={styles.item}
        onPress={() => item.route && navigation.navigate(item.route as never)}
      >
        {item.icon && <Icon name={item.icon} size={20} color="#000" />}
        <Text style={styles.itemText}>{item.title}</Text>
        <MaterialIcon name="chevron-right" size={22} color="#000" />
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeadingField title="Settings" />
      <Text style={styles.sectionTitle}>General</Text>
      <View style={styles.divider} />

      <FlatList
        data={[
          ...settingsOptions,
          { isDivider: true },
          ...aboutOptions,
          { isLogout: true },
        ]}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingVertical: 0 }}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  sectionTitle: { fontSize: 14, color: "#666", marginTop: 15, marginBottom: 5 },
  divider: { height: 1, backgroundColor: "#ccc", marginBottom: 10 },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12, // Adjusted padding for better spacing
  },
  itemText: { flex: 1, fontSize: 16, marginLeft: 10 },
  logout: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20, // Increased margin for spacing
    paddingVertical: 10,
  },
  logoutText: {
    fontSize: 16,
    color: "red",
    marginLeft: 10,
    fontWeight: "bold",
  },
});

export default SettingsScreen;
