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
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 20,
        paddingLeft: 15,
    },
    label: {

    },
    input:{
        width: '100%',
        borderBottomColor: '#97A1D8',
        borderBottomWidth: 1,
        minWidth: 70,
        fontSize: 22,
        paddingVertical: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '50%',
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