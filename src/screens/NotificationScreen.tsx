import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function NotificationScreen() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Notifications
      </Text>

      <Text style={styles.subtitle}>
        Stay updated with your loan activities
      </Text>

      {/* Notification 1 */}

      <View style={styles.card}>

        <Text style={styles.icon}>🎉</Text>

        <View style={styles.details}>

          <Text style={styles.heading}>
            Loan Approved
          </Text>

          <Text style={styles.message}>
            Your Personal Loan of ₹5,00,000 has been approved.
          </Text>

          <Text style={styles.time}>
            2 Minutes Ago
          </Text>

        </View>

      </View>

      {/* Notification 2 */}

      <View style={styles.card}>

        <Text style={styles.icon}>📄</Text>

        <View style={styles.details}>

          <Text style={styles.heading}>
            Documents Verified
          </Text>

          <Text style={styles.message}>
            Aadhaar, PAN and Salary Slip have been verified successfully.
          </Text>

          <Text style={styles.time}>
            1 Hour Ago
          </Text>

        </View>

      </View>

      {/* Notification 3 */}

      <View style={styles.card}>

        <Text style={styles.icon}>🧮</Text>

        <View style={styles.details}>

          <Text style={styles.heading}>
            EMI Reminder
          </Text>

          <Text style={styles.message}>
            Your EMI payment is due tomorrow.
          </Text>

          <Text style={styles.time}>
            Today
          </Text>

        </View>

      </View>

      {/* Notification 4 */}

      <View style={styles.card}>

        <Text style={styles.icon}>📈</Text>

        <View style={styles.details}>

          <Text style={styles.heading}>
            Credit Score Improved
          </Text>

          <Text style={styles.message}>
            Congratulations! Your credit score has increased to 785.
          </Text>

          <Text style={styles.time}>
            Yesterday
          </Text>

        </View>

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
padding:20,
borderRadius:18,
marginBottom:18,
flexDirection:"row",
elevation:4,
},

icon:{
fontSize:36,
marginRight:18,
},

details:{
flex:1,
},

heading:{
fontSize:19,
fontWeight:"bold",
color:"#222",
},

message:{
fontSize:15,
color:"#666",
marginTop:8,
lineHeight:22,
},

time:{
marginTop:12,
fontSize:13,
color:"#1565C0",
fontWeight:"600",
},

});