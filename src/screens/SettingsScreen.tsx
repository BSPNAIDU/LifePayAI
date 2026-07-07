import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Settings
      </Text>

      <Text style={styles.subtitle}>
        Manage your LifePayAI account
      </Text>

      <View style={styles.card}>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.icon}>👤</Text>
          <Text style={styles.text}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.icon}>🔒</Text>
          <Text style={styles.text}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.icon}>🌙</Text>
          <Text style={styles.text}>Dark Mode</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.icon}>🌐</Text>
          <Text style={styles.text}>Language</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.icon}>🔔</Text>
          <Text style={styles.text}>Notification Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.icon}>📞</Text>
          <Text style={styles.text}>Help & Support</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.icon}>📧</Text>
          <Text style={styles.text}>Contact Us</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.icon}>ℹ️</Text>
          <Text style={styles.text}>About LifePayAI</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.icon}>🚪</Text>
          <Text style={styles.logout}>
            Logout
          </Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#F4F8FC",
padding:20,
},

title:{
fontSize:30,
fontWeight:"bold",
color:"#1565C0",
marginTop:20,
},

subtitle:{
fontSize:16,
color:"#666",
marginTop:8,
marginBottom:25,
},

card:{
backgroundColor:"#fff",
borderRadius:20,
padding:15,
elevation:5,
},

item:{
flexDirection:"row",
alignItems:"center",
paddingVertical:18,
borderBottomWidth:1,
borderColor:"#ECECEC",
},

icon:{
fontSize:28,
marginRight:18,
},

text:{
fontSize:18,
fontWeight:"600",
color:"#222",
},

logout:{
fontSize:18,
fontWeight:"bold",
color:"red",
},

});