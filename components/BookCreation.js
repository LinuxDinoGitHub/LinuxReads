import {React} from "react";
import { TouchableOpacity, View, StyleSheet , Text} from "react-native";
import InputField from "./InputField";

const BookCreation = props => {
    return (
        <View style={[styles.container, props.style]}>
        <Text style={styles.title}>Create New Book Diary</Text>
            <InputField title="New book name" placeholder="Enter title of your book" multiline={true} height={20}/>
            <TouchableOpacity style={styles.submitButton} onPress={props.event}>
                <Text style={styles.submitButtonText}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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