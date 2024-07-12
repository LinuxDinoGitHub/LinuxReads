import { StatusBar } from 'expo-status-bar';
import {React, useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from "./components/Button"
import InputMenu from "./components/InputMenu"


export default function App() {
  const [books, setBooks] = useState([]);
  const openBookInput = () => {
    console.log("yes");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title</Text>
      <View style={styles.buttonContainer}>
        <Button onClick={openBookInput} />
      </View>
      <InputMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
  },
  title: {
    flex: 1,
    fontSize: 24,
    margin: 40,
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 40,
    marginRight: 30,
  },
});
