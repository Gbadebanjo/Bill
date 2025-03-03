import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
interface HeadingFieldProps {
  title: string;
  onPress?: () => void;
}

export default function HeadingField({ title, onPress }: HeadingFieldProps) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress || navigation.goBack}>
        <AntDesign name="arrowleft" size={24} color="#616161"/>
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",    },
    text: {
        flex: 1,
        paddingLeft: 14,
        fontSize: 24,
        fontWeight: "bold",
        color: "#131313",        
    },
});
