import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { v4 as uuidv4 } from "uuid";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const AddItem = ({ addItem }) => {
  const [item, SetItem] = useState("");

  const handleAddItem = () => {
    const newItem = {
      id: uuidv4(),
      text: item,
    };
    console.log(newItem);
    addItem(newItem);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="add item ..."
        value={item}
        onChangeText={(val) => SetItem(val)}
      />
      <TouchableOpacity style={styles.btn} onPress={handleAddItem}>
        <Text style={styles.btnText}>
          Add Item{" "}
          <Ionicons name="md-add" size={20} color="black" style={styles.icon} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
  },
  input: {
    // flex: 2,
    height: 60,
    padding: 20,
    fontSize: 16,
    // borderBottomWidth: 1,
    // borderBottomColor: "#ddd",
  },
  btn: {
    padding: 9,
    margin: 5,
    backgroundColor: "#c2bad8",
  },

  btnText: {
    color: "darkslateblue",
    textAlign: "center",
    fontSize: 20,
  },
});

export default AddItem;
