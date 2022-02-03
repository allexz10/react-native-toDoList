import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Task = {
  text: string; 
};

const Task = ({ text }: Task) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <Text style={styles.removeButtonText}>x</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#292929",
    padding: 18,
    borderRadius: 10,
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },

  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    width: "80%",
  },

  square: {
    width: 15,
    height: 15,
    backgroundColor: "#fbab60",
    borderRadius: 5,
  },

  itemText: {
    maxWidth: "80%",
    color: "#fff",
    paddingLeft: 7,
  },

  removeButtonText: {
    fontWeight: "bold",
    color: "#fbab60",
    fontSize: 16,
  },
});

export default Task;

