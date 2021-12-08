import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../firebase";
import { IconButton, Colors } from "react-native-paper";

const HomeScreen = ({ navigation }) => {
  const navigation1 = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation1.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
      <View style={{ alignContent: "center", justifyContent: "center" }}>
        <IconButton
          icon="plus"
          color="#0782F9"
          size={20}
          style={{marginLeft:27,marginTop:50}}
          onPress={() => navigation1.push("JarConnect")}
        />

        <Text style={styles.buttonText1}>Add Jars</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonText1: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
});
