import {React} from "react";
import { View, StyleSheet ,Text, TouchableOpacity } from "react-native";
//props: title, 
const Book = props => {
    const maxPage = props.maxPage
    const currPage = props.currPage
    const percentageRead = (currPage/maxPage)*100
    return (
        <TouchableOpacity style={styles.container}>
            <View>
                <Text style={styles.header}>{props.title}placeholderdxfasdfsadfdasafsaaefsgaesagadfsadfadf</Text>
                <Text style={styles.percentageRead}>Percentage read: {percentageRead}%</Text>
                <Text style={styles.percentageRead2}>{currPage}/{maxPage}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '90%',
        height: 'auto',
        backgroundColor: '#d4d0c7',
        zIndex: -4,
        borderRadius: 10,
    },
    header:{
        position: 'relative',
        top: 10,
        left: 10,
        fontSize: 25,
        width: '50%',
        backgroundColor: 'red',
    },
    percentageRead:{
        position: 'absolute',
        top: 70,
        right: 10,
    },
    percentageRead2:{
        position: 'absolute',
        top: 10,
        right: 10,
    },
})
export default Book;