import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../theme/colors";
export default function ProfileScreen(){return <View style={styles.container}><Text style={styles.title}>Profile</Text><Text style={styles.text}>Manage your MY AREA account here.</Text></View>}
const styles=StyleSheet.create({container:{flex:1,backgroundColor:COLORS.bg,padding:24,justifyContent:"center"},title:{fontSize:28,fontWeight:"800",color:COLORS.text,marginBottom:10},text:{fontSize:16,color:COLORS.muted,lineHeight:24}});
