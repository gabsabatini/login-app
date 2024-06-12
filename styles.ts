import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 50
    },
    scrollViewContent: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    inputArea: {
        width: '100%',
        marginTop: 20
    },
    input: {
        fontSize: 16,
        textAlign: 'left',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#DDD',
        padding: 15,
        marginBottom: 15
    },
    button: {
        width: '100%',
        borderRadius: 5,
        backgroundColor: '#97D5C8',
        padding: 15,
        marginTop: 10
    },
    textButton: {
        textAlign: 'center',
        fontSize: 16,
        color: '#FFF',
        fontWeight: "bold"
    },
    title: {
        color: '#000',
        fontSize: 27,
        fontWeight: 700,
        marginVertical: 10
    },
    subtitle: {
        color: '#999',
        fontSize: 20,
    },
    logo: {
        width: 200,
        height: 200,
    },
    devArea: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
        alignItems: 'center',
    },
    devText: {
        fontSize: 14,
        color: 'gray',
    },
});