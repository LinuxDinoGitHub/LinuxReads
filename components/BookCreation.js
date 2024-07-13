import {React} from "react";
import { TouchableOpacity, View, StyleSheet , Text} from "react-native";
import InputField from "./InputField";
import Button from "./Button";

//props needed: style, event
const BookCreation = props => {
    return (
        <View style={[styles.container, props.style]}> //hide or show
        //add preview of card
        <Text style={styles.title}>Create New Book Diary</Text>
        <Button style={{height: 15, width: 15}} onClick={props.event}/>
        <InputField title="New book name" placeholder="Enter title of your book" multiline={true} height={20}/>
        //Image picker and camera idk how to do yet
        <TouchableOpacity style={styles.submitButton} onPress={props.event}>//NOT THIS ONE WRONG EVENT
            <Text style={styles.submitButtonText}>Save</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize
    },
    container: {
        height: 250,
        width: '50%',
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
})

export default BookCreation;