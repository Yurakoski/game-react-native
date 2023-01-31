import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        color: '#212121',
        textAlign: 'center',
        paddingVertical: 20
    },
    inputContainer: {
        width: "75%",
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    label: {
        fontSize: 15,
        textAlign: 'center',
    },
    input:{
        width: '100%',
        maxWidth: 40,
        borderBottomColor: '#97A1D8',
        borderBottomWidth: 1,
        minWidth: 70,
        fontSize: 22,
        paddingVertical: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 20
    },
    confirmedContainer: {
        width: "75%",
        height: 180,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 30
    },
    confirmedTitle: {
        fontSize: 16,
    }
});