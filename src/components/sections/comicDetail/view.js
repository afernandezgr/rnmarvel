import React from 'react'
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native'
import styles from './styles'
import { Button } from '../../widgets'


export default class extends React.Component {

    constructor(props) {
        super(props)

        this.springValue = new Animated.Value(0.3)

    }

    spring(){
      this.springValue.setValue(0.3)
      Animated.spring(
                      this.springValue,
                       {
                        toValue: 1,
                        friction: 1,
                        tension: 1
                       })
              .start()
    }

    
    render() {
        const { comic } = this.props
        const image = comic && comic.thumbnail.path ? { uri: comic.thumbnail.path + '.' + comic.thumbnail.extension } : null
        const title = comic && comic.title ? comic.title : ''
        const description = comic && comic.description ? comic.description : ''
  
        return (
            <View style={styles.comicContainer}>
                 
                <Animated.Image
                     resizeMode={'contain'}
                     style={[ styles.image, {transform: [{scale: this.springValue}]} ]}
                     source={image}
                     onLoadEnd={this.spring.bind(this)}
                     />

                <TouchableOpacity style={styles.dataContainer}>
                    <View>
                        <Text style={{ color: 'white' }}>{title}</Text>
                    </View>
                </TouchableOpacity>

                <Text style={[styles.description, { marginTop: 5 }]}>{description}</Text>

            </View>
        )
    }
} 