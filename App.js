import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaLista from "./TelaLista";
import TelaAdicionar from "./TelaAdicionar";

const MyStack = createNativeStackNavigator();

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleRemoveTask = (productName) => {
    setTasks(tasks.filter((task) => task.product !== productName));
  };

  return (
    <NavigationContainer>
      <MyStack.Navigator screenOptions={{ headerShown: false }}>
        <MyStack.Screen name="TelaLista">
          {(props) => (
            <TelaLista {...props} tasks={tasks} onRemove={handleRemoveTask} />
          )}
        </MyStack.Screen>
        <MyStack.Screen name="TelaAdicionar">
          {(props) => <TelaAdicionar {...props} onAddTask={handleAddTask} />}
        </MyStack.Screen>
      </MyStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
