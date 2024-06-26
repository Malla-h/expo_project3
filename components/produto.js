import React from "react";
import { StyleSheet, View, Text, Button, Touchable } from "react-native";
import { TouchableOpacity } from "react-native";

const Produto = () => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>Item 1</Text>
      <View style={styles.confirmDenyContainer}>
        <TouchableOpacity style={styles.itemConfirm}></TouchableOpacity>
        <TouchableOpacity style={styles.itemDeny}></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "lightblue",
    borderRadius: 7,
    height: 40,
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingStart: 10,
  },
  itemConfirm: {
    backgroundColor: "green",
    width: 40,
    height: 40,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: "purple",
    padding: 0,
  },
  itemDeny: {
    backgroundColor: "red",
    width: 40,
    height: 40,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "purple",
    paddingRight: 0,
  },

  itemText: {
    color: "purple",
    fontSize: 18,
  },
  confirmDenyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 90,
  },
});

export default Produto;
