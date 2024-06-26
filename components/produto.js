import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Produto = ({ productName, quantity, onConfirm, onDeny }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed(true);
    onConfirm(productName);
  };

  const handleDeny = () => {
    onDeny(productName);
  };

  return (
    <View style={styles.item}>
      <Text style={[styles.itemText, isConfirmed && styles.strikethrough]}>
        {productName}
      </Text>
      <Text style={styles.quantity}>Quantidade: {quantity}</Text>
      <View style={styles.confirmDenyContainer}>
        <TouchableOpacity
          style={[styles.itemConfirm, isConfirmed && styles.disabled]}
          onPress={handleConfirm}
          disabled={isConfirmed}
        ></TouchableOpacity>
        <TouchableOpacity
          style={styles.itemDeny}
          onPress={handleDeny}
        ></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  quantity: {
    color: "purple",
    marginLeft: "auto",
    paddingHorizontal: 20,
  },
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
  strikethrough: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  disabled: {
    opacity: 0.5,
  },
});

export default Produto;
