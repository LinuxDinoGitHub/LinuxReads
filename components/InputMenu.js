import {React} from "react";
import { TouchableOpacity, View, StyleSheet , Text, TouchableWithoutFeedback, TextInput} from "react-native";

const InputMenu = (props) => {
    /* Book name (Selection) if new book -> BookSelection.js
    Current page (int input)
    Time spent reading
    Entry comments (text area)
    Submit button
    */
    return (
    <View style={styles.menu}>
        <Text>Book name</Text>
        <View style={styles.inputField}>
            <TextInput placeholder="Book name"></TextInput>
        </View>
        <Text>Current page</Text>
        <View style={styles.inputField}>
            <TextInput placeholder="P. "></TextInput>
        </View>
        <Text>Time spent reading</Text>
        <View style={styles.inputField}>
            <TextInput placeholder="Time in minutes"></TextInput>
        </View>
        <Text>Entry comments</Text>
        <View style={styles.inputField}>
            <TextInput placeholder="Entry comments"></TextInput>
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={props.event}>
            <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
    </View>
    )
};
const styles = StyleSheet.create({
    inputField: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    menu: {
        margin: 10,
        flex: 1,
        alignContent: 'center',
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
});

export default InputMenu;