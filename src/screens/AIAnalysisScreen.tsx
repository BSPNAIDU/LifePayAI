import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

export default function AIAnalysisScreen({ navigation }: any) {

  useEffect(() => {

    const timer = setTimeout(() => {

      navigation.replace("LoanResult");

    }, 5000);

    return () => clearTimeout(timer);

  }, []);

  return (

    <View style={styles.container}>

      <Text style={styles.robot}>🤖</Text>

      <Text style={styles.title}>
        AI Loan Analysis
      </Text>

      <ActivityIndicator
        size="large"
        color="#1565C0"
      />

      <Text style={styles.message}>
        Reading uploaded documents...
      </Text>

      <Text style={styles.message}>
        Verifying Aadhaar...
      </Text>

      <Text style={styles.message}>
        Verifying PAN...
      </Text>

      <Text style={styles.message}>
        Checking Salary Slip...
      </Text>

      <Text style={styles.message}>
        Reading Bank Statement...
      </Text>

      <Text style={styles.message}>
        Calculating Credit Score...
      </Text>

      <Text style={styles.message}>
        Predicting Loan Eligibility...
      </Text>

    </View>

  );

}

const styles = StyleSheet.create({

container:{
flex:1,
justifyContent:"center",
alignItems:"center",
backgroundColor:"#F4F8FC",
padding:20,
},

robot:{
fontSize:80,
marginBottom:25,
},

title:{
fontSize:30,
fontWeight:"bold",
color:"#1565C0",
marginBottom:30,
},

message:{
fontSize:18,
marginTop:12,
color:"#444",
},

});