import {React, useState} from "react";
import { TouchableOpacity, View, StyleSheet , Text} from "react-native";
import InputField from "./InputField";
import BookCreation from "./BookCreation";
const InputMenu = (props) => {
    /* Book name (Selection) if new book -> BookCreation.js
    Current page (int input)
    Time spent reading
    Entry comments (text area)
    Submit button
    */
    const [BookCreationStatus, setBookCreationStatus] = useState(true);
    const toggleBookCreation = () => {
        setBookCreationStatus(!BookCreationStatus);
        console.log(BookCreationStatus);
      };
    return (
    <View>
        <View style={[styles.container, props.stylep]}>
            <BookCreation 
            stylep={BookCreationStatus ? styles.show: styles.hide}
            event={toggleBookCreation}
            style={styles.bookCre}
            />
            <InputField title="Book Title" placeholder=" " multiline={true} height={20}/>
            <TouchableOpacity onPress={toggleBookCreation}>
                <Text><View style={styles.edit}></View>New book</Text>
            </TouchableOpacity>
            <InputField title="Current page" placeholder=" " multiline={false} height={20}/>
            <InputField title="Time spent reading" placeholder="Time in minutes" multiline={false} height={20}/>
            <InputField title="Entry comments" placeholder="Enter your thoughts about the book here!" multiline={true} height={100}/>
            <TouchableOpacity style={styles.submitButton} onPress={props.event}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
};
const styles = StyleSheet.create({
    bookCre:{
        position: 'absolute',
        top: 0,
        zIndex: 999,
    },
    container:{
        backgroundColor: '#e0dbce',
        padding: 20,
    },
    submitButton: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 5,
        marginTop: 20,
        width: '40%'
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    show: {
        display: 'flex',
      },
    hide: {
        display: 'none',
    }
});

export default InputMenu;