import { useState } from "react";
import Task from "./components/Task";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";


export default function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addNewTask = () => {
    if (inputValue) {
      Keyboard.dismiss();
      setTasks([...tasks, inputValue].reverse());
      setInputValue("");
    }
  };

  const removeTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index,1);
    setTasks(newTasks);   
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.title}>Today's tasks</Text>
        <ScrollView style={styles.items}>
          {tasks.map((task, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => removeTask(index)}>
                <Task text={task} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.inputWrapper}
      >
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
        <TouchableOpacity onPress={() => addNewTask()}>
          <View style={styles.addButtonWrapper}>
            <Text style={styles.addButtonText}>Add</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3D4849",
  },

  tasksWrapper: {
    marginTop: 60,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },

  items: {
    marginTop: 40,
    height:"62%",
  },

  inputWrapper: {
    position: "absolute",
    bottom: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 15,
  },

  input: {
    width: 280,
    borderRadius: 15,
    padding: 12,
    backgroundColor: "#292929",
    color: "#fff",
    fontSize:14
  },

  addButtonWrapper: {
    width: 70,
    height: 50,
    backgroundColor: "#fbab60",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
