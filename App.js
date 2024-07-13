import { StatusBar } from 'expo-status-bar';
import {React, useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from "./components/Button";
import InputMenu from "./components/InputMenu";
import BookCreation from './components/BookCreation';



export default function App() {
  const [books, setBooks] = useState([]);
  const [visible, setvisible] = useState(false);
  const [BookCreationStatus, setBookCreationStatus] = useState(false)
  const openBookInput = () => {
    setvisible(!visible);
    console.log(visible);
  };
  const toggleBookCreation = () => {
    setBookCreationStatus(!BookCreationStatus);
    console.log(BookCreationStatus);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Linux Reads</Text>
      <BookCreationStatus 
      style={BookCreationStatus ? styles.show: styles.hide}
      event={toggleBookCreation}
      
      />
      <InputMenu 
      event={openBookInput} 
      style={visible ? styles.show: styles.hide}
      />
      <View style={styles.buttonContainer}>
        <Button onClick={openBookInput} content="+"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 40,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    right: 30,
  },
  show: {
    display: 'flex',
  },
  hide: {
    display: 'none',
  }
});
