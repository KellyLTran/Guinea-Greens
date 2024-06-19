
import { StyleSheet } from 'react-native';

// Create styles involving texts, containers, etc. to be used in multiple screens for a consistent theme.
export const styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    titleText: {
        fontSize: 24,
        textAlign: 'center',
    },
    headerText: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
        color: '#A2D9A2',
    },
    buttonContainer: {
        marginTop: 20,
        alignItems: 'center',
        padding: 20,
    },
    button: {
        padding: 12,
        borderRadius: 5,
        marginBottom: 16,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    gpLogo: {
        height: 178,
        width: 290,
        resizeMode: 'contain',
    },
    inputContainer: {
        padding: 20,
    },
});
