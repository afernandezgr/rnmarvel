import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')
export default StyleSheet.create({
    cellContainer: {
        width: '100%',
        height: 250,
        backgroundColor: 'rgb(20,20,20)',
        paddingHorizontal: 0,
        paddingVertical: 1,
        //borderColor: 'white',
        borderWidth: 1,
        borderRadius: 0
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: 8,
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(255,255,255,0.3)',
    },
    title: {
        textAlign: 'right',
        flex: 1,
        fontSize: 12,
        fontWeight: 'bold',
        color: 'rgb(20,20,20)',
    },
})