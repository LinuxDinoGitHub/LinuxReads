import {React} from "react";
import { TouchableOpacity, View, StyleSheet , Text, TouchableWithoutFeedback, TextInput} from "react-native";
import InputField from "./InputField";
import BookCreation from "./BookCreation";
const InputMenu = (props) => {
    /* Book name (Selection) if new book -> BookCreation.js
    Current page (int input)
    Time spent reading
    Entry comments (text area)
    Submit button
    */
    return (
    <View style={props.style}>
        <InputField title="Book Name" placeholder="Note that you have to add your book in the previous page first to choose here" multiline={true} height={40}/>
        <InputField title="Current page" placeholder=" " multiline={false} height={20}/>
        <InputField title="Time spent reading" placeholder="Time in minutes" multiline={false} height={20}/>
        <InputField title="Entry comments" placeholder="Enter your thoughts about the book here!" multiline={true} height={100}/>
        <TouchableOpacity style={styles.submitButton} onPress={props.event}>
            <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
    </View>
    )
};
const styles = StyleSheet.create({
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
});

export default InputMenu;