import {React, useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Button from "./components/Button";
import InputMenu from "./components/InputMenu";
import Book from './components/Book';
import BookCreation from './components/BookCreation';



export default function App() {
  const [books, setBooks] = useState([{title: "Harry Potter",max:100,curr:15},{title: "Harry Potter",max:100,curr:15}]);
  const [visible, setvisible] = useState(false);
  const [BookCreationStatus, setBookCreationStatus] = useState(false);
  const toggleBookCreation = () => {
      setBookCreationStatus(!BookCreationStatus);
      console.log(BookCreationStatus);
  };
  const openBookInput = () => {
    setvisible(!visible);
    console.log(visible);
  };
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Linux Reads</Text>
      </View>
      <View style={styles.books}>
        {books.map((obj) => {
          return (
            <Book title={obj.title} maxPage={obj.max} currPage={obj.curr}/>
          );
        })}
      </View>
        <BookCreation 
              stylep={BookCreationStatus ? styles.show: styles.hide}
              event={toggleBookCreation}
              style={styles.bookCre}
        />
      <InputMenu 
      bookcreation={toggleBookCreation}
      event={openBookInput} 
      stylep={visible ? styles.show: styles.hide}
      style={styles.inputMenu}
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
  },
  title: {
    fontSize: 24,
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
  },
  books: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    paddingTop: 0,
  },
  textContainer: {
    position: 'relative',
    left: 40,
    paddingTop: 50,
    marginBottom: 40,
  },
  inputMenu:{
    position: 'absolute',
  },
  bookCre:{
    zIndex: 999,
    flex: 1,
    alignItems: 'center',
  }
});
