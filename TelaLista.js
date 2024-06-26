import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Produto from "./components/produto";

const TelaLista = ({ navigation, tasks, onRemove }) => {
  const handleConfirm = (productName) => {
    // Implement your confirmation logic here if needed
    console.log(`Confirmed: ${productName}`);
  };

  const handleDeny = (id) => {
    // Call onRemove with the productId to remove the specific product instance
    onRemove(id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Lista de Produtos</Text>
      </View>

      {tasks.map((task) => (
        <Produto
          key={task.id} // Use a unique identifier (id) as the key
          id={task.id} // Pass id as a prop to identify the specific product instance
          productName={task.product}
          quantity={task.quantity}
          onConfirm={handleConfirm}
          onDeny={handleDeny}
        />
      ))}

      <View style={styles.bottomContainer}>
        <View style={styles.buttonWrapper}>
          <Button
            onPress={() => navigation.navigate("TelaAdicionar")}
            title="Adicionar"
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            onPress={() => navigation.navigate("TelaLista")}
            title="Ver"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingVertical: 40,
    backgroundColor: "#e5e7eb",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingHorizontal: 20,
  },
  buttonWrapper: {
    flex: 1,
    width: "100%",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "left",
    margin: 20,
  },
  title: {
    flex: 1,
    textAlign: "left",
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
  },
});

export default TelaLista;
