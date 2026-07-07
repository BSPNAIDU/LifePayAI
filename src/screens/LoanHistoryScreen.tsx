import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function LoanHistoryScreen() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Loan History
      </Text>

      <Text style={styles.subtitle}>
        Track all your loan applications
      </Text>

      {/* Loan 1 */}

      <View style={styles.card}>

        <Text style={styles.loanIcon}>🏦</Text>

        <View style={styles.details}>

          <Text style={styles.loanName}>
            Personal Loan
          </Text>

          <Text style={styles.amount}>
            ₹ 5,00,000
          </Text>

          <Text style={styles.date}>
            Applied : 01 July 2026
          </Text>

        </View>

        <View style={styles.approved}>
          <Text style={styles.approvedText}>
            Approved
          </Text>
        </View>

      </View>

      {/* Loan 2 */}

      <View style={styles.card}>

        <Text style={styles.loanIcon}>🏠</Text>

        <View style={styles.details}>

          <Text style={styles.loanName}>
            Home Loan
          </Text>

          <Text style={styles.amount}>
            ₹ 25,00,000
          </Text>

          <Text style={styles.date}>
            Applied : 15 June 2026
          </Text>

        </View>

        <View style={styles.pending}>
          <Text style={styles.pendingText}>
            Pending
          </Text>
        </View>

      </View>

      {/* Loan 3 */}

      <View style={styles.card}>

        <Text style={styles.loanIcon}>🚗</Text>

        <View style={styles.details}>

          <Text style={styles.loanName}>
            Vehicle Loan
          </Text>

          <Text style={styles.amount}>
            ₹ 8,00,000
          </Text>

          <Text style={styles.date}>
            Applied : 10 May 2026
          </Text>

        </View>

        <View style={styles.rejected}>
          <Text style={styles.rejectedText}>
            Rejected
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
marginBottom:25,
marginTop:8,
},

card:{
backgroundColor:"#fff",
padding:20,
borderRadius:20,
flexDirection:"row",
alignItems:"center",
marginBottom:20,
elevation:5,
},

loanIcon:{
fontSize:40,
marginRight:18,
},

details:{
flex:1,
},

loanName:{
fontSize:20,
fontWeight:"bold",
},

amount:{
fontSize:24,
fontWeight:"bold",
color:"#1565C0",
marginTop:6,
},

date:{
marginTop:8,
fontSize:14,
color:"#666",
},

approved:{
backgroundColor:"#DFF6DD",
paddingHorizontal:15,
paddingVertical:8,
borderRadius:20,
},

approvedText:{
color:"#2E7D32",
fontWeight:"bold",
},

pending:{
backgroundColor:"#FFF4D6",
paddingHorizontal:15,
paddingVertical:8,
borderRadius:20,
},

pendingText:{
color:"#F57C00",
fontWeight:"bold",
},

rejected:{
backgroundColor:"#FADADA",
paddingHorizontal:15,
paddingVertical:8,
borderRadius:20,
},

rejectedText:{
color:"#D32F2F",
fontWeight:"bold",
},

});