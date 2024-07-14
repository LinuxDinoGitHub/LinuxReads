import {React} from "react";
import { View, StyleSheet ,Text, TouchableOpacity } from "react-native";
//props: title, maxPage, currPage
const Book = props => {
    const maxPage = props.maxPage
    const currPage = props.currPage
    const percentageRead = (currPage/maxPage)*100
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.BackgroundImage}>
                <Text style={styles.header}>{props.title}</Text>
                <Text style={styles.percentageRead}>Percentage read: {percentageRead}%</Text>
                <Text style={styles.percentageRead2}>{currPage}/{maxPage}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '90%',
        zIndex: -4,
    },
    BackgroundImage:{
        minHeight: 100,
        maxHeight: 500,
        backgroundColor: '#d4d0c7',
        borderRadius: 10,
        paddingBottom: 10,
    },
    header:{
        position: 'relative',
        top: 10,
        left: 10,
        fontSize: 25,
        width: '60%',
    },
    percentageRead:{
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    percentageRead2:{
        position: 'absolute',
        top: 10,
        right: 10,
        fontSize: 18,
    },
})
export default Book;