import React, { useState } from "react";
import { StyleSheet, Text, View, Image, FlatList, Alert } from "react-native";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./AddItem";

const App = () => {
  const [items, setItems] = useState([
    { id: uuidv4(), text: "Milk" },
    { id: uuidv4(), text: "Eggs" },
    { id: uuidv4(), text: "Bread" },
    { id: uuidv4(), text: "Juice" },
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id != id));
  };

  const addItem = (item) => {
    if (!item.text) {
      Alert.alert("Error", "Please enter an item", { text: "ok" });
    } else {
      setItems((prevItems) => [item, ...prevItems]);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});

export default App;
