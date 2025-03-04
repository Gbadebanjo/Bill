import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HeadingField from "@/components/Header";

const PrivacyPolicy = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView contentContainerStyle={styles.content}>
     <HeadingField title="Privacy Policy" onPress={() => navigation.goBack()} />    
        {sections.map((section, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.heading}>
              {index + 1}. {section.title}
            </Text>
            <Text style={styles.text}>{section.content}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const sections = [
  {
    title: "Types of Data We Collect",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam bibendum metus, sit amet fermentum purus sollicitudin vel. Pellentesque vitae lacinia justo. Cras nec arcu nec leo dignissim tincidunt. Sed in tellus non libero varius pharetra. Fusce et nisl vitae est suscipit vulputate eu at mi. Morbi eget massa ac justo condimentum feugiat. Proin vel nunc eu elit varius gravida.",
  },
  {
    title: "Use of Your Personal Data",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam bibendum metus, sit amet fermentum purus sollicitudin vel. Pellentesque vitae lacinia justo. Cras nec arcu nec leo dignissim tincidunt. Sed in tellus non libero varius pharetra. Fusce et nisl vitae est suscipit vulputate eu at mi. Morbi eget massa ac justo condimentum feugiat. Proin vel nunc eu elit varius gravida.",
  },
  {
    title: "Disclosure of Your Personal Data",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam bibendum metus, sit amet fermentum purus sollicitudin vel. Pellentesque vitae lacinia justo. Cras nec arcu nec leo dignissim tincidunt. Sed in tellus non libero varius pharetra. Fusce et nisl vitae est suscipit vulputate eu at mi. Morbi eget massa ac justo condimentum feugiat. Proin vel nunc eu elit varius gravida.",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,

  },
  content: {
    paddingHorizontal: 20,
  },
  section: {
    marginVertical: 20,
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
    color: "#333",
  },
});

export default PrivacyPolicy;
