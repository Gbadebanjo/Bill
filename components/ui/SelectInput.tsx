import React from "react";
import { StyleSheet, View, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { AntDesign } from "@expo/vector-icons";

interface SelectInputProps {
  label?: string;
  items: { label: string; value: string }[];
  placeholder: { label: string; value: string };
  onValueChange: (value: string) => void;
  width: string | number;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  items,
  placeholder,
  onValueChange,
  width,
}) => {
  const colors = {
    text: "black",
    lightText: "#666",
    icon: "#666",
  };

  return (
    <View style={styles.container}>
      {label && (
        <Text style={[styles.label, { color: colors.text }]}>{label}</Text>
      )}
      <RNPickerSelect
        placeholder={placeholder}
        items={items}
        onValueChange={onValueChange}
        style={{
          iconContainer: {
            ...styles.iconContainer,
            right: typeof width === "string" && width.endsWith("%") ? "4%" : 4,
          },
          inputIOS: {
            ...styles.inputIOS,
            width: "100%",
            color: colors.text,
          },
          inputAndroid: {
            ...styles.inputAndroid,
            width: "100%",
            color: colors.text,
          },
          placeholder: {
            color: colors.lightText,
            fontSize: 14,
          },
        }}
        useNativeAndroidPickerStyle={false}
        Icon={() => <AntDesign name="down" size={14} color={colors.icon} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 15,
    paddingHorizontal: 10,
    color: "black",
    paddingRight: 40,
    backgroundColor: "#f8fafc",
    borderRadius: 8,
  },
  inputAndroid: {
    fontSize: 15,
    paddingHorizontal: 15,
    paddingVertical: 8,
    color: "black",
    paddingRight: 40,
    height: 50,
    backgroundColor: "#f8fafc",
    borderRadius: 8,
  },
  iconContainer: {
    top: 16,
  },
});

export default SelectInput;
