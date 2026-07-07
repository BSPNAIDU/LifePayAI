import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>💳</Text>

      <Text style={styles.title}>LifePayAI</Text>

      <Text style={styles.subtitle}>
        Smart Payment Solution
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#666"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#666"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
  style={styles.loginButton}
  onPress={() => navigation.navigate("Home")}
>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.register}>
          Create New Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
    backgroundColor: "#F5F7FA",
  },

  logo: {
    fontSize: 60,
    textAlign: "center",
    marginBottom: 10,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1565C0",
  },

  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: 40,
    fontSize: 16,
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 15,
    marginBottom: 18,
    fontSize: 16,
    color: "#000",
  },

  loginButton: {
    backgroundColor: "#1565C0",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
  },

  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  register: {
    textAlign: "center",
    marginTop: 25,
    color: "#1565C0",
    fontWeight: "bold",
    fontSize: 16,
  },
});