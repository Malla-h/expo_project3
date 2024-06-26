import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Produto from "./components/produto";

const TelaLista = ({ navigation, tasks, onRemove }) => {
  const handleConfirm = (productName) => {    
    console.log(`Confirmed: ${productName}`);
  };

  const handleDeny = (productName) => {
    
    onRemove(productName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Lista de Produtos</Text>
      </View>

      {tasks.map((task, index) => (
        <Produto
          key={index}
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
    backgroundColor: "gray",
    borderWidth: 3,
    borderColor: "purple",
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
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    marginVertical: 20,
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 30,
    color: "purple",
    fontWeight: "bold",
  },
});

export default TelaLista;
