import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Colors from "../styles/colors";

type Props = NativeStackScreenProps<any>;

export default function SplashScreen({ navigation }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>💳</Text>
      <Text style={styles.title}>LifePay AI</Text>
      <Text style={styles.subtitle}>Smart Payment Solution</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
  logo: {
    fontSize: 70,
    marginBottom: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: Colors.white,
  },
  subtitle: {
    marginTop: 10,
    fontSize: 18,
    color: Colors.white,
  },
});