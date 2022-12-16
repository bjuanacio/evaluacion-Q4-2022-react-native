import { StyleSheet } from "react-native";

export const giftListStyles = StyleSheet.create({
    rowContainer: {
        flex: 1,
        flexDirection: 'column',
        marginVertical: 8,
        padding: 0,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 4,
        height: 250,
    },
    item1: {
        flex: 2
    },
    buttonContainer: {
        // alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
}); 
