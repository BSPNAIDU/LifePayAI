import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function EMICalculatorScreen() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate);
    const years = parseFloat(tenure);

    if (!P || !annualRate || !years) {
      return;
    }

    const R = annualRate / 12 / 100;
    const N = years * 12;

    const EMI =
      (P * R * Math.pow(1 + R, N)) /
      (Math.pow(1 + R, N) - 1);

    const payment = EMI * N;
    const interest = payment - P;

    setEmi(EMI);
    setTotalInterest(interest);
    setTotalPayment(payment);
  };

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        EMI Calculator
      </Text>

      <Text style={styles.subtitle}>
        Calculate your monthly loan EMI
      </Text>

      <TextInput
        placeholder="Loan Amount"
        keyboardType="numeric"
        style={styles.input}
        value={loanAmount}
        onChangeText={setLoanAmount}
      />

      <TextInput
        placeholder="Interest Rate (%)"
        keyboardType="numeric"
        style={styles.input}
        value={interestRate}
        onChangeText={setInterestRate}
      />

      <TextInput
        placeholder="Loan Tenure (Years)"
        keyboardType="numeric"
        style={styles.input}
        value={tenure}
        onChangeText={setTenure}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={calculateEMI}
      >
        <Text style={styles.buttonText}>
          Calculate EMI
        </Text>
      </TouchableOpacity>

      {emi > 0 && (

        <View style={styles.resultCard}>

          <Text style={styles.heading}>
            Monthly EMI
          </Text>

          <Text style={styles.value}>
            ₹ {emi.toFixed(2)}
          </Text>

          <Text style={styles.heading}>
            Total Interest
          </Text>

          <Text style={styles.value}>
            ₹ {totalInterest.toFixed(2)}
          </Text>

          <Text style={styles.heading}>
            Total Payment
          </Text>

          <Text style={styles.value}>
            ₹ {totalPayment.toFixed(2)}
          </Text>

        </View>

      )}

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
marginBottom:25,
marginTop:8,
},

input:{
backgroundColor:"#fff",
padding:16,
borderRadius:15,
fontSize:18,
marginBottom:18,
elevation:4,
},

button:{
backgroundColor:"#1565C0",
padding:18,
borderRadius:15,
marginBottom:25,
},

buttonText:{
textAlign:"center",
fontSize:18,
fontWeight:"bold",
color:"#fff",
},

resultCard:{
backgroundColor:"#fff",
padding:25,
borderRadius:20,
elevation:5,
marginBottom:30,
},

heading:{
fontSize:18,
fontWeight:"bold",
marginTop:10,
color:"#1565C0",
},

value:{
fontSize:30,
fontWeight:"bold",
color:"#2E7D32",
marginBottom:15,
},

});