import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CCCCFF',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    backLogo: {
        right: 150,
        bottom: 60
    },
    favLogo: {
        left: 120

    },
    locationLogo: {
        right: 120,
        top: 40
    },
    locationTitle: {
        fontSize: 20,
        right: 100,
        top: 45
    },
    datetimeTitle: {
        fontSize: 20
    },
    title: {
        fontSize: 24,
        marginBottom: 20
    }
})