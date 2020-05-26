import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Header = ({ text }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{text} </Text>
    </View>
  );
};

// valeur Par defaut
Header.defaultProps = {
  text: "Shopping List",
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: "darkslateblue",
  },
  text: {
    color: "#fff",
    fontSize: 23,
    textAlign: "center",
  },
});
export default Header;
