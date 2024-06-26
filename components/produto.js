import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Produto = ({ id, productName, quantity, onConfirm, onDeny }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    onConfirm(productName);
    setIsConfirmed(true);
  };

  const handleDeny = () => {
    onDeny(id);
  };

  return (
    <View style={styles.item}>
      <Text style={[styles.itemText, isConfirmed && styles.strikethrough]}>
        {productName}
      </Text>
      <Text style={styles.quantity}>Quantidade: {quantity}</Text>
      <View style={styles.confirmDenyContainer}>
        <TouchableOpacity style={styles.itemConfirm} onPress={handleConfirm}>
          {/* Add a checkmark or any indicator for confirmation */}
          {isConfirmed && <Text style={styles.confirmText}>✓</Text>}
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemDeny} onPress={handleDeny}>
          {/* Add a cross or any indicator for denial */}
          <Text style={styles.denyText}>✕</Text>
        </TouchableOpacity>
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
    backgroundColor: "#ffffff",
    borderRadius: 7,
    height: 60,
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingStart: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2,
    shadowRadius: 2, 
  },
  itemConfirm: {
    backgroundColor: "green",
    width: 40,
    height: 40,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: "purple",
    justifyContent: "center",
    alignItems: "center",
  },
  itemDeny: {
    backgroundColor: "red",
    width: 40,
    height: 40,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "purple",
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    color: "purple",
    fontSize: 18,
  },
  confirmDenyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 10,
    width: 90,
  },
  strikethrough: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  confirmText: {
    color: "white",
    fontSize: 20,
  },
  denyText: {
    color: "white",
    fontSize: 20,
  },
});

export default Produto;
