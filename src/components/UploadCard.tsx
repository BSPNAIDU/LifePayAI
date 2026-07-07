import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function UploadCard({ icon, title, subtitle, fileName, onPress }: any) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.icon}>{icon}</Text>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{fileName ? fileName : subtitle}</Text>
      </View>

      <Text style={styles.status}>{fileName ? "✅" : "⬆️"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    elevation: 4,
  },
  icon: {
    fontSize: 36,
    marginRight: 15,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#222",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  status: {
    fontSize: 24,
  },
});