import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const TelaAdicionar = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Screen 2</Text>
      <Button
        onPress={() => props.navigation.navigate("TelaLista")}
        title="Go to Screen 1"
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

export default TelaAdicionar;
