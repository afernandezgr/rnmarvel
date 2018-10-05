import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    comicContainer: {
        flex: 1,
        backgroundColor: 'rgb(255,255,255)'
    },
    image: {
        width: '100%',
        height: 400,
    },
    dataContainer: {
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        alignItems: 'flex-end',
        padding: 8,
        backgroundColor: 'rgba(52,52,52, 0.9)',
    },
    text: {
        textAlign: 'right',
        flex: 1,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',

    },
    description: {
        color: 'white',
        padding: 12,
        textAlign: 'justify',
        backgroundColor: 'rgb(52,52,52)',
        height: 200
    }
})