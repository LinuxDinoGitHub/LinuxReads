import {React, useState, useRef} from "react";
import { TouchableOpacity, View, StyleSheet , Text} from "react-native";
import InputField from "./InputField";
const InputMenu = (props) => {
    /* Book name (Selection) if new book -> BookCreation.js
    Current page (int input)
    Time spent reading
    Entry comments (text area)
    Submit button
    */
    const existingBooks = useRef(props.data)
    const [bookTitle, setBookTitle] = useState('');
    const [maxPage, setMaxPage] = useState(0);
    const [currPage, setcurrPage] = useState(0);
    const [review, setreview] = useState('');
    const sendData = () => {
            props.event2({title: {bookTitle}, max: {maxPage}, curr: {currPage}, thoughts: {review}})
    };
    return (
    <View>
        <View style={[styles.container, props.stylep]}>
            <TouchableOpacity style={styles.close} onPress={props.event}>
                <Text style={styles.x}>+</Text>
            </TouchableOpacity>
            <InputField 
            title="Book Title" 
            placeholder=" " 
            multiline={true} 
            height={20} 
            onChangeText={newText => setBookTitle(newText)}
            />
            <TouchableOpacity onPress={props.bookcreation}>
                <Text><View style={styles.edit}></View>+ Add New book</Text>
            </TouchableOpacity>
            <InputField 
            title="Current page" 
            placeholder=" " 
            multiline={false} 
            height={20}
            inputMode = "numeric"
            onChangeText={newText => setcurrPage(newText)}
            />
            <InputField title="Time spent reading" placeholder="Time in minutes" multiline={false} height={20}/>
            <InputField 
            title="Entry comments"
            placeholder="Enter your thoughts about the book here!" 
            multiline={true} 
            height={100}
            onChangeText={newText => setreview(newText)}
            />
            <TouchableOpacity style={styles.submitButton} onPress={sendData}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
};
const styles = StyleSheet.create({
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
    },
    close: {
        position: 'absolute',
        top: 10,
        right: 10,
        height: 35,
        width: 35,
        maxWidth: 'fit-content',
    },
    x: {
        fontSize: 35,
        transform: [
            { rotateZ: '45deg' }
        ],
    }
});

export default InputMenu;