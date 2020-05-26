import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const ListItem = ({ item, deleteItem }) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}> {item.text} </Text>
        <FontAwesome
          name="remove"
          size={20}
          color="firebrick"
          onPress={() => deleteItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    marginTop: 5,
    backgroundColor: "#f8F8F8",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  listItemView: {
    // padding: 15,
    // marginTop: 5,
    // backgroundColor: "#f8F8F8",
    // borderBottomWidth: 1,
    // borderColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemText: {
    fontSize: 18,
  },
});

export default ListItem;
