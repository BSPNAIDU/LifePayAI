import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good Morning 👋</Text>
          <Text style={styles.username}>Bhavani Shanker</Text>
        </View>

        <TouchableOpacity style={styles.notification}>
          <Text style={styles.notificationText}>🔔</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>BS</Text>
        </View>

        <View>
          <Text style={styles.profileName}>LifePayAI User</Text>
          <Text style={styles.profileSub}>AI powered loan assistant</Text>
        </View>
      </View>

      <View style={styles.mainCard}>
        <Text style={styles.cardLabel}>Available Loan Limit</Text>
        <Text style={styles.loanAmount}>₹ 5,00,000</Text>
        <Text style={styles.cardSubText}>Based on your AI credit profile</Text>

        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>✔ Eligible</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.smallCard}>
          <Text style={styles.smallIcon}>💳</Text>
          <Text style={styles.smallTitle}>Credit Score</Text>
          <Text style={styles.smallValue}>785</Text>
          <Text style={styles.smallStatus}>Excellent</Text>
        </View>

        <View style={styles.smallCard}>
          <Text style={styles.smallIcon}>📈</Text>
          <Text style={styles.smallTitle}>Risk Level</Text>
          <Text style={styles.smallValue}>Low</Text>
          <Text style={styles.smallStatus}>Safe Profile</Text>
        </View>
      </View>
            <Text style={styles.sectionTitle}>Quick Services</Text>

      <View style={styles.grid}>

        <TouchableOpacity
          style={styles.serviceCard}
          onPress={() => navigation.navigate("UploadDocuments")}
        >
          <Text style={styles.serviceIcon}>📄</Text>
          <Text style={styles.serviceText}>Upload{"\n"}Documents</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.serviceCard}
          onPress={() => navigation.navigate("AIAnalysis")}
        >
          <Text style={styles.serviceIcon}>🤖</Text>
          <Text style={styles.serviceText}>AI{"\n"}Analysis</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.serviceCard}
          onPress={() => navigation.navigate("EMICalculator")}
        >
          <Text style={styles.serviceIcon}>🧮</Text>
          <Text style={styles.serviceText}>EMI{"\n"}Calculator</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.serviceCard}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.serviceIcon}>👤</Text>
          <Text style={styles.serviceText}>My{"\n"}Profile</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.summaryCard}>

        <Text style={styles.summaryTitle}>
          AI Recommendation
        </Text>

        <Text style={styles.summaryText}>
          Based on your uploaded documents and credit profile,
          you have a strong chance of getting loan approval.
        </Text>

      </View>

      <View style={{ height: 40 }} />

    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8FC",
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },

  greeting: {
    fontSize: 18,
    color: "#666",
  },

  username: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1565C0",
  },

  notification: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },

  notificationText: {
    fontSize: 22,
  },

  profileCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    elevation: 4,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#1565C0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  avatarText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },

  profileName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
  },

  profileSub: {
    fontSize: 15,
    color: "#777",
    marginTop: 5,
  },

  mainCard: {
    backgroundColor: "#1565C0",
    borderRadius: 22,
    padding: 25,
    marginBottom: 20,
    elevation: 5,
  },

  cardLabel: {
    color: "#fff",
    fontSize: 18,
  },

  loanAmount: {
    color: "#fff",
    fontSize: 42,
    fontWeight: "bold",
    marginTop: 12,
  },

  cardSubText: {
    color: "#fff",
    marginTop: 8,
    fontSize: 15,
  },

  statusBadge: {
    marginTop: 20,
    backgroundColor: "#fff",
    alignSelf: "flex-start",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },

  statusText: {
    color: "#1565C0",
    fontWeight: "bold",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  smallCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
    elevation: 4,
  },

  smallIcon: {
    fontSize: 30,
  },

  smallTitle: {
    fontSize: 16,
    marginTop: 10,
    color: "#666",
  },

  smallValue: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1565C0",
    marginTop: 8,
  },

  smallStatus: {
    marginTop: 5,
    color: "#2E7D32",
    fontWeight: "600",
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 18,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  serviceCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 18,
    paddingVertical: 25,
    alignItems: "center",
    marginBottom: 18,
    elevation: 4,
  },

  serviceIcon: {
    fontSize: 36,
    marginBottom: 10,
  },

  serviceText: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "600",
    color: "#333",
  },

  summaryCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 20,
    elevation: 4,
    marginTop: 10,
  },

  summaryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 10,
  },

  summaryText: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
  },
});