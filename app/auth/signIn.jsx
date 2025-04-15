import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import Colors from "../../constant/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

export default function SignIn() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.heading}>Welcome Back!</Text>

      <TextInput placeholder="Email" style={styles.textInput} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.textInput}
      />

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.footerText}>
        <Text style={styles.regularText}>Don't have an account?</Text>
        <Pressable onPress={() => router.push("auth/signUp")}>
          <Text style={styles.linkText}>Sign up here</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.WHITE,
      padding: 25,
      alignItems: "center",
    },
    logo: {
      width: 160,
      height: 160,
      marginBottom: 20,
    },
    heading: {
      fontSize: 28,
      fontFamily: "outfit-bold",
      marginBottom: 20,
      textAlign: "center",
      color: Colors.BLACK,
    },
    textInput: {
      width: "100%",
      borderWidth: 1,
      borderColor: Colors.BG_GRAY,
      padding: 15,
      fontSize: 16,
      borderRadius: 10,
      marginTop: 18,
      fontFamily: "outfit",
      backgroundColor: "#f9f9f9",
      shadowColor: "#000",
      shadowOpacity: 0.05,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 2,
    },
    primaryButton: {
      backgroundColor: Colors.PRIMARY,
      width: "100%",
      padding: 16,
      marginTop: 28,
      borderRadius: 12,
      shadowColor: Colors.PRIMARY,
      shadowOpacity: 0.4,
      shadowOffset: { width: 0, height: 8 },
      shadowRadius: 8,
      elevation: 5,
    },
    primaryButtonText: {
      color: Colors.WHITE,
      fontSize: 18,
      fontFamily: "outfit-bold",
      textAlign: "center",
    },
    footerText: {
      flexDirection: "row",
      marginTop: 25,
      gap: 5,
    },
    regularText: {
      fontFamily: "outfit",
      fontSize: 14,
      color: Colors.GRAY,
    },
    linkText: {
      fontFamily: "outfit-bold",
      color: Colors.PRIMARY,
      fontSize: 14,
    },
  });