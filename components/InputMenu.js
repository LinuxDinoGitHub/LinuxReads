import {React, useState} from "react";
import { TouchableOpacity, View, StyleSheet , Text, TouchableWithoutFeedback, TextInput} from "react-native";

const InputMenu = (props) => {
    /* Book name (Selection) if new book -> BookSelection.js
    Current page (int input)
    Time spent reading
    Entry comments (text area)
    Submit button
    */
    const [bookName, setBookName] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [timeSpent, setTimeSpent] = useState('');
  const [comments, setComments] = useState('');
  const [showBookSelection, setShowBookSelection] = useState(false);

  const handleSubmit = () => {
    console.log({
      bookName,
      currentPage,
      timeSpent,
      comments,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reading Log</Text>

      {showBookSelection ? (
        <BookSelection onSelect={(book) => setBookName(book.title)} />
      ) : (
        <TextInput
          style={styles.input}
          placeholder="Book Name"
          value={bookName}
          onChangeText={setBookName}
          onFocus={() => setShowBookSelection(true)}
        />
      )}

      <TextInput
        style={styles.input}
        placeholder="Current Page"
        value={currentPage.toString()}
        onChangeText={(text) => setCurrentPage(parseInt(text))}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Time Spent Reading (in minutes)"
        value={timeSpent}
        onChangeText={setTimeSpent}
        keyboardType="numeric"
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Entry Comments"
        value={comments}
        onChangeText={setComments}
        multiline
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default InputMenu;