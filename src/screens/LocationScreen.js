import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../theme/colors";

export default function LocationScreen() {
  return <View style={styles.container}><Text style={styles.title}>My Area</Text><Text style={styles.text}>Location services and nearby places will appear here.</Text></View>;
}
const styles = StyleSheet.create({container:{flex:1,backgroundColor:COLORS.bg,padding:24,justifyContent:"center"},title:{fontSize:28,fontWeight:"800",color:COLORS.text,marginBottom:10},text:{fontSize:16,color:COLORS.muted,lineHeight:24}});
