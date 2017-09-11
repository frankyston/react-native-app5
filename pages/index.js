import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const logo = require('../assets/images/logo.png');
const btnJogar = require('../assets/images/botao_jogar.png');
const btnSobreJogo = require('../assets/images/sobre_jogo.png');
const btnOutrosJogos = require('../assets/images/outros_jogos.png');

export default class Index extends Component {
    render() {
        return (
            <View style={styles.cenaPrincipal}>

                <View style={styles.apresentacaoJogo}>
                    <Image source={logo} />
                    <TouchableHighlight onPress={() => { Actions.result(); }}>
                        <Image source={btnJogar} />
                    </TouchableHighlight>
                </View>

                <View style={styles.rodape}>
                    <TouchableHighlight onPress={() => { Actions.about(); }}>
                        <Image source={btnSobreJogo} />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => { Actions.other(); }}>
                        <Image source={btnOutrosJogos} />
                    </TouchableHighlight>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    cenaPrincipal: {
        flex: 1,
        backgroundColor: '#61BD8C'
    },
    apresentacaoJogo: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rodape: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

