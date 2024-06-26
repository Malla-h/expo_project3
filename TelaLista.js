import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const TelaLista = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Screen 1</Text>
      <Button
        onPress={() => props.navigation.navigate("TelaAdicionar")}
        title="Go to Screen 2"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TelaLista;
