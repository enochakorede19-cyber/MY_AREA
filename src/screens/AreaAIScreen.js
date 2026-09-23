import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../theme/colors";
export default function AreaAIScreen(){return <View style={styles.container}><Text style={styles.title}>AREA AI</Text><Text style={styles.text}>Your local AI assistant will be available here.</Text></View>}
const styles=StyleSheet.create({container:{flex:1,backgroundColor:COLORS.bg,padding:24,justifyContent:"center"},title:{fontSize:28,fontWeight:"800",color:COLORS.text,marginBottom:10},text:{fontSize:16,color:COLORS.muted,lineHeight:24}});
