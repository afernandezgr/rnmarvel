import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')
export default StyleSheet.create({
    cellContainer: {
        width: '100%',
        height: 250,
        backgroundColor: 'rgb(20,20,20)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 15
    }
})