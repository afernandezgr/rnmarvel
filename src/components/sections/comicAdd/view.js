import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import { Button, TextInput } from '../../widgets'
import styles from './styles'
import ImagePicker from 'react-native-image-picker'


export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            image: null
        }
        this.options = {
            title: 'Select image',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
    }
    _validateForm() {
        const { title, description, image } = this.state
        console.log("Title: " + title + " - Description: " + description + " - Image: " + image)
        if (title && description && image) {
            return true
        } else {
            return false
        }
    }
    _onSubmit() {
        if (this._validateForm()) {
            const { title, description, image } = this.state
            const data = {
                title: title,
                description: description,
                image: image.data,
            }
            this.props.onSubmitComic(data)
            Alert.alert('Warning', 'Data not persisted, you are in demo mode')
        } else {
            Alert.alert('Attention', 'Please complete fields marked with *')
        }
    }

    _onImagePickerTapped() {
        ImagePicker.showImagePicker(this.options, (response) => {
            if (response.uri && response.data) {
                let preview = { uri: response.uri };
                let data = 'data:image/jpeg;base64,' + response.data
                this.setState({
                    image: { preview, data }
                });
            }
        });
    }
   

    _renderTextInput(label, key, placeholder = '', heightTextInput) {
        return (
            <TextInput
                label={label}
                value={this.state[key]}
                onChangeText={v => this.setState({ [key]: v })}
                placeholder={placeholder}
                inputStyle={{ height: heightTextInput}}
            />
        )
    }
    _renderImageInput() {

        const imageUri = this.state.image ? this.state.image.preview : null
        const imageLabel = this.state.image ? 'Click to choose another image' : 'Click to chose image*'
        return (
            <View>
                <TouchableOpacity style={styles.imageContainer} onPress={() => this._onImagePickerTapped()}>
                    <Image source={imageUri} style={styles.image} resizeMode={'contain'} />
                    <Text style={styles.imageText}>{imageLabel}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ padding: 20, paddingTop: 40 }}>
                    {this._renderTextInput('Title: *', 'title', 'Comic name',40)}
                </View>

                 <View style={{ padding: 20, paddingTop: 10 }}>
                    {this._renderTextInput('Description: *', 'description', 'Comic description',90)}
                </View>

                <View style={{ paddingHorizontal: 20, paddingBottom: 10 }}>
                    {this._renderImageInput()}
                </View>

                <View style={{ paddingHorizontal: 20, paddingBottom: 10 }}>
                    <Button label={'SAVE'.toUpperCase()} onPress={() => this._onSubmit()} />
                </View>
            </View>
        )
    }
}