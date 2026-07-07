import React from "react";
import {
View,
Text,
StyleSheet,
TouchableOpacity,
} from "react-native";

export default function LoanResultScreen(){

return(

<View style={styles.container}>

<Text style={styles.icon}>
🎉
</Text>

<Text style={styles.title}>
Congratulations
</Text>

<Text style={styles.sub}>
Your AI Analysis is Complete
</Text>

<View style={styles.card}>

<Text style={styles.heading}>
Credit Score
</Text>

<Text style={styles.score}>
785
</Text>

<Text style={styles.heading}>
Loan Eligibility
</Text>

<Text style={styles.amount}>
₹ 5,00,000
</Text>

<Text style={styles.status}>
✅ Eligible
</Text>

</View>

<TouchableOpacity style={styles.button}>

<Text style={styles.buttonText}>
Apply for Loan
</Text>

</TouchableOpacity>

</View>

);

}

const styles=StyleSheet.create({

container:{
flex:1,
backgroundColor:"#F4F8FC",
justifyContent:"center",
alignItems:"center",
padding:20,
},

icon:{
fontSize:70,
},

title:{
fontSize:32,
fontWeight:"bold",
marginTop:20,
color:"#1565C0",
},

sub:{
fontSize:18,
marginTop:10,
color:"#666",
marginBottom:30,
},

card:{
width:"100%",
backgroundColor:"#fff",
padding:25,
borderRadius:20,
elevation:5,
},

heading:{
fontSize:20,
fontWeight:"bold",
marginTop:10,
},

score:{
fontSize:45,
fontWeight:"bold",
color:"#2E7D32",
},

amount:{
fontSize:38,
fontWeight:"bold",
color:"#1565C0",
},

status:{
marginTop:20,
fontSize:22,
fontWeight:"bold",
color:"#2E7D32",
},

button:{
backgroundColor:"#1565C0",
padding:18,
borderRadius:15,
marginTop:35,
width:"100%",
},

buttonText:{
textAlign:"center",
fontSize:20,
fontWeight:"bold",
color:"#fff",
},

});