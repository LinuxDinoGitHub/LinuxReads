import {React} from "react";
import {View, StyleSheet , Text, TextInput} from "react-native";
//4 props: Title, placeholder, multiline (bool), height

const InputField = (props) => {
    let changeText;
    if (props.onChangeText){
        changeText = msg =>{
            props.onChangeText(msg)
        }
    }
    return (
    <View>
        <Text style={styles.title}>{props.title}</Text>
        <View style={[styles.inputField, {height: props.height}]}>
            <TextInput placeholder={props.placeholder} multiline={props.multiline} inputMode={props.inputMode} onChangeText={msg => changeText(msg)} style={styles.input}></TextInput>
        </View>
    </View>
    )
};
const styles = StyleSheet.create({
    inputField: {
        width: '80%',
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    title: {
        fontSize: 18,
        fontStyle: 'bold',
        fontFamily: 'monospace',
    },
    input: {
        borderRadius: 5,
        backgroundColor: '#D3D3D3',
        height: '120%',
    }
})
export default InputField;