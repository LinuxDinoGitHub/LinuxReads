import {React} from "react";
import { TouchableOpacity, View, StyleSheet , Text} from "react-native";

const Button = (props) => {
    return (
        <TouchableOpacity style={[styles.shape, props.style]} onPress={props.onClick}>
            <View style={styles.iconContainer}>
                <Text style={styles.icon}>{props.content}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    shape: {
        borderRadius: 50,
        height: 70,
        width: 70,
        backgroundColor: "#546A7B"
    },
    wrapper: {
        display: "flex"
    },
    icon: {
        fontSize: 34,
        color: 'white',
        fontStyle: 'bold'
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Button;