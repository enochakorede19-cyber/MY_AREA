import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../theme/colors";
export default function HomeScreen(){return <View style={styles.container}><Text style={styles.kicker}>MY AREA</Text><Text style={styles.title}>Everything around you.</Text><Text style={styles.text}>Discover local places, services, rides and more.</Text></View>}
const styles=StyleSheet.create({container:{flex:1,backgroundColor:COLORS.bg,padding:24,justifyContent:"center"},kicker:{fontSize:13,fontWeight:"800",letterSpacing:2,color:COLORS.teal,marginBottom:10},title:{fontSize:30,fontWeight:"800",color:COLORS.text,marginBottom:10},text:{fontSize:16,color:COLORS.muted,lineHeight:24}});
