import { StyleSheet } from 'react-native';
import { color } from './colors';

export const commonStyle = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flex: 1,
        backgroundColor: color.gray,
    },
    scrollWrapper: {
        flexGrow: 1,
        justifyContent: 'space-between',
        margin: 25,
    },
    contentWrapper: {
        alignItems: 'center',
        flex: 1,
    },
    mainContentWrapper: {
        width: '100%',
    },
    iconWrapper: {
        margin: 30,
    },
    container: {
        display: 'flex',
        minHeight: '100%',
    },
    mainMarginHorizontal: {
        marginHorizontal: 24,
    },
    containerScreens: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'flex-start',
        height: '94%',
        // paddingTop: 24,
    },
    buttonContainerScreen: {
        // paddingBottom: 48,
        paddingTop: 24,
    },
});
