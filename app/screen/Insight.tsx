import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import Header from "@/components/Header";

export default function InsightScreen () {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get("window").width - 40;

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Insight"
        onPress={() => navigation.goBack()}
      />

      {/* Balance Section */}
      <View style={styles.balanceContainer}>
        <Text style={{ fontSize: 16, color: "#000" }}>Balance</Text>
        <Text style={{ fontSize: 16, color: "#A0E86F", fontWeight: "bold" }}>620 Points</Text>
      </View>

      {/* Energy Quota */}
      <View style={styles.energyContainer}>
        <Text style={styles.energy}>Energy Quota</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <QuotaItem title="Light" value="32" />
          <QuotaItem title="Charge" value="24" />
          <QuotaItem title="Rent" value="15" />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
          <QuotaItem title="Top-Up" value="8" />
          <QuotaItem title="Donation" value="6" />
          <QuotaItem title="Total" value="85" />
        </View>
      </View>

      {/* Monthly Expenses Chart */}
      <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>Monthly Expenses</Text>
      <BarChart
        data={{
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            {
              data: [200, 300, 250, 450, 300, 200, 150], // Amount
              color: () => "#0000ff", // Blue
            },
            {
              data: [100, 200, 150, 400, 250, 150, 100], // Power
              color: () => "#ff0000", // Red
            },
          ],
        }}
        width={screenWidth}
        height={250}
        yAxisLabel=""
        yAxisSuffix=""
        chartConfig={{
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          barPercentage: 0.5,
        }}
        style={{ borderRadius: 10 }}
      />
    </SafeAreaView>
  );
};

// Reusable Quota Item Component
interface QuotaItemProps {
  title: string;
  value: string;
}

const QuotaItem = ({ title, value }: QuotaItemProps) => (
  <View style={styles.quotaEachContainer}>
    <Text style={{ fontSize: 16, fontWeight: "bold" }}>{value}</Text>
    <Text style={{ fontSize: 12, color: "#555" }}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#f8fafc",
    marginVertical: 20,
  },
  energyContainer: {
    padding: 15,
    backgroundColor: "#f8fafc",
    borderRadius: 10,
    marginBottom: 20,
  },
  energy: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 20,
  },
  quotaEachContainer: {
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderLeftWidth: 1,
    borderColor: "#9E9E9F",

  },

});
 