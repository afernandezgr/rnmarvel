import React, { Component } from 'react'
import { TouchableOpacity, Image, View, Text } from 'react-native'
import styles from './styles'
export default class extends Component {
    static defaultProps = {
        comic: null,
        onComicPress: () => { },
    }
    render() {
        const { comic } = this.props
        const image = comic.thumbnail.path ? { uri: comic.thumbnail.path + '.' + comic.thumbnail.extension } : null
        const title = comic && comic.title ? comic.title : ''
        return (
            <TouchableOpacity
                onPress={() => this.props.onComicPress(comic)}
                style={styles.cellContainer}>
                <Image
                    source={image}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode={'cover'}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}