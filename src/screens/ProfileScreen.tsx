import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>BS</Text>
        </View>

        <Text style={styles.name}>
          Bhavani Shanker
        </Text>

        <Text style={styles.email}>
          bhavanishankerbhale1@gmail.com
        </Text>

        <Text style={styles.mobile}>
          +91 8374852628
        </Text>

      </View>

      <View style={styles.card}>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.icon}>📄</Text>
          <Text style={styles.text}>My Documents</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.icon}>🏦</Text>
          <Text style={styles.text}>Loan Applications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.icon}>💳</Text>
          <Text style={styles.text}>Credit Score</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.icon}>🧮</Text>
          <Text style={styles.text}>EMI Calculator</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.icon}>⚙️</Text>
          <Text style={styles.text}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.icon}>🔔</Text>
          <Text style={styles.text}>Notifications</Text>
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
},

header:{
backgroundColor:"#1565C0",
paddingVertical:40,
alignItems:"center",
borderBottomLeftRadius:30,
borderBottomRightRadius:30,
},

avatar:{
width:110,
height:110,
borderRadius:55,
backgroundColor:"#fff",
justifyContent:"center",
alignItems:"center",
marginBottom:20,
},

avatarText:{
fontSize:38,
fontWeight:"bold",
color:"#1565C0",
},

name:{
fontSize:28,
fontWeight:"bold",
color:"#fff",
},

email:{
fontSize:16,
color:"#fff",
marginTop:8,
},

mobile:{
fontSize:16,
color:"#fff",
marginTop:5,
},

card:{
margin:20,
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