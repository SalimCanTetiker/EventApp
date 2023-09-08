import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 8,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        margin: 30
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    text: {
        fontSize: 18,
        textAlign: 'center'
    }
})