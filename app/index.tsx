import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from "react-native";
import Colors from "../constant/Colors";

const { height } = Dimensions.get("window");

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/landing.png")}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Welcome to Syllabuild</Text>

        <Text style={styles.subtitle}>
          Organize. Collaborate. Simplify your study flow with custom syllabi.
        </Text>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Already have an account?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  image: {
    width: "100%",
    height: height * 0.35,
    marginTop: 70,
  },
  bottomContainer: {
    flex: 1,
    padding: 30,
    backgroundColor: Colors.PRIMARY,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 10,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    color: Colors.WHITE,
    fontFamily: "outfit-bold",
  },
  subtitle: {
    fontSize: 18,
    color: Colors.WHITE,
    marginTop: 15,
    textAlign: "center",
    fontFamily: "outfit",
    opacity: 0.9,
  },
  primaryButton: {
    padding: 16,
    backgroundColor: Colors.WHITE,
    marginTop: 30,
    borderRadius: 12,
    elevation: 3,
  },
  primaryButtonText: {
    fontSize: 18,
    fontFamily: "outfit-bold",
    color: Colors.PRIMARY,
    textAlign: "center",
  },
  secondaryButton: {
    padding: 14,
    marginTop: 15,
    borderRadius: 12,
    borderColor: Colors.WHITE,
    borderWidth: 1.5,
  },
  secondaryButtonText: {
    fontSize: 16,
    fontFamily: "outfit",
    color: Colors.WHITE,
    textAlign: "center",
  },
});
