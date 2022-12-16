import { StyleSheet } from "react-native";

export const giftListStyles = StyleSheet.create({
    rowContainer: {
        flex: 1,
        flexDirection: 'column',
        marginVertical: 8,
        padding: 4,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)"
    },
    item1: {
        flex: 3
    },
    winner: {
        backgroundColor: 'green'
    },
    loser: {
        backgroundColor: 'gray'
    },
    buttonContainer: {
        alignItems: 'center',
        backgroundColor: '#CCC8D1',
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    addRowContainer: {
        flexDirection: 'row',
        borderColor: 'violet',
        marginTop: 16,
    },
    addRowItem1: {
        flex: 1,
    },
    addTextInput: {
        borderColor: 'gray',
        borderRadius: 4,
        borderWidth: 1,
    }

}); 
