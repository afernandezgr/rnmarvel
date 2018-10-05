import React from 'react'
import { View, TextInput, Text } from 'react-native'
import styles from './styles'

export default class extends React.Component {
    static defaultProps = {
        label: '',
        value: '',
        placeholder: '',
        onChangeText: () => { },
        inputStyle: {},
        labelStyle: {},
        containerStyle: {}
    }
    render() {
        return (
            <View style={[this.props.containerStyle]}>
                <Text style={[styles.label, this.props.labelStyle]}>{this.props.label}</Text>
                <TextInput
                    onChangeText={v => this.props.onChangeText(v)}
                    value={this.props.name}
                    style={[styles.textInput, this.props.inputStyle]}
                    placeholder={this.props.placeholder}
                    placeholderTextColor='rgb(80,80,80)'
                    multiline={true}
                    numberOfLines={4}
                />
            </View>
        )
    }
}