import React from "react";
import { View, StyleSheet } from "react-native";

export default function ProgressBar({ progress }: any) {
  return (
    <View style={styles.container}>
      <View style={[styles.fill, { width: `${progress}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 10,
    backgroundColor: "#D6E4F0",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 15,
  },
  fill: {
    height: "100%",
    backgroundColor: "#1565C0",
  },
});