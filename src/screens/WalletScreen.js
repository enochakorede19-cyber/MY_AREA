import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../theme/colors";
export default function WalletScreen(){return <View style={styles.container}><Text style={styles.kicker}>WALLET</Text><Text style={styles.balance}>₦0.00</Text><Text style={styles.text}>Your MY AREA wallet balance will appear here.</Text></View>}
const styles=StyleSheet.create({container:{flex:1,backgroundColor:COLORS.bg,padding:24,justifyContent:"center"},kicker:{fontSize:13,fontWeight:"800",letterSpacing:2,color:COLORS.teal,marginBottom:12},balance:{fontSize:40,fontWeight:"800",color:COLORS.text,marginBottom:10},text:{fontSize:16,color:COLORS.muted,lineHeight:24}});
