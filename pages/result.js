import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const heads = require('../assets/images/moeda_cara.png');
const tails = require('../assets/images/moeda_coroa.png');

export default class Other extends Component {
    componentWillMount() {
        this.state = { image: '' };

        const number = Math.floor(Math.random() * 2);
        if (number === 1) {
            this.setState({ image: heads });
        } else {
            this.setState({ image: tails });
        }
    }
    
    render() {
        return (
            <View style={styles.coin}>
                <Image source={this.state.image} />
			</View>
        );
    }
}

const styles = StyleSheet.create({
    coin: {
        flex: 1, 
        backgroundColor: '#61BD8C', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
    }
});