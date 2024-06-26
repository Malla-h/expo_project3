import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";

const TelaAdicionar = ({ navigation, onAddTask }) => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const handleAddTask = () => {
    const task = { product, quantity };
    onAddTask(task);
    // Optionally, you can reset the input fields after adding the task
    setProduct("");
    setQuantity("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={styles.container}
    >
      <View style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={"Adicionar um produto:"}
          onChangeText={(text) => setProduct(text)}
          value={product}
        />
        <TextInput
          style={styles.input}
          placeholder={"Quantidade:"}
          onChangeText={(text) => setQuantity(text)}
          value={quantity}
        />

        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>Confirmar</Text>
          </View>
        </TouchableOpacity>
      </View>

      {!keyboardVisible && (
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
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  writeTaskWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 15,
    borderColor: "#b3e0fa",
    borderWidth: 2,
    width: "90%",
    marginBottom: 20,
  },
  addWrapper: {
    width: 160,
    height: 60,
    backgroundColor: "#2196f3",
    borderRadius: 15,
    borderColor: "#b3e0fa",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  addText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  bottomContainer: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  buttonWrapper: {
    flex: 1,
    width: "50%",
  },
});

export default TelaAdicionar;
