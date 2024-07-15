import {React, useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Button from "./components/Button";
import InputMenu from "./components/InputMenu";
import Book from './components/Book';
import BookCreation from './components/BookCreation';



export default function App() {
  const [books, setBooks] = useState(
    {"Harry Potter": {entry: 1, max: 369, curr: 10, thoughts: "Blah", time: 120}},
  );
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
  const retrieveData = data => {
    let temp = books;
    setBooks(data);
    console.log(data);
  };
  const sendData = () => {
    return books;
  }
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Linux Reads</Text>
      </View>
      <View style={styles.books}>
       <View style={styles.books}>
      {Object.entries(books).length > 0 ? (
        Object.entries(books).map(([title, book], index) => (
          <Book
            key={title}
            title={title}
            maxPage={book.max}
            currPage={book.curr}
          />
        ))
      ) : (
        <Text>No books to display.</Text>
      )}
    </View>
      </View>
      <BookCreation 
            stylep={BookCreationStatus ? styles.show: styles.hide}
            event={toggleBookCreation}
            style={styles.bookCre}
      />
      <InputMenu 
      bookcreation={toggleBookCreation}
      event={openBookInput} 
      event2={retrieveData}
      stylep={visible ? styles.show: styles.hide}
      style={styles.inputMenu}
      data = {sendData}
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
    position: 'absolute',
    top: 100,
  }
});
