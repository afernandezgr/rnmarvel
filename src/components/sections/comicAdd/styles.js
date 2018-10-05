import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(20,20,20)'
    },
    imageContainer: {
        borderWidth: 1,
        borderColor: 'rgb(80,80,80)',
        borderRadius: 15,
        height: 250,
        width: '100%'
    },
    image: {
        borderRadius: 15,
        width: '100%',
        height: '100%'
    },
    imageText: {
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        top: '50%',
        textAlign: 'center',
        left: 0,
        right: 0
    }
})