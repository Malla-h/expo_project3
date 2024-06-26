import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Produto from "./components/produto";

const TelaAdicionar = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Lista de Produtos</Text>
      </View>
      <Produto />
      <Produto />
      <Produto />
      <View style={styles.bottomContainer}>
        <View style={styles.buttonWrapper}>
          <Button
            onPress={() => props.navigation.navigate("TelaAdicionar")}
            title="Adicionar"
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            onPress={() => props.navigation.navigate("TelaLista")}
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
    backgroundColor: "black",
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
    // borderWidth: 2,
    // borderColor: "white",
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

export default TelaAdicionar;
