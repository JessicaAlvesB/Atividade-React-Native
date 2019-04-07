import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Post extends Component{

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.cabecalho}>
                    <Text style={styles.tema}> {this.props.titulo}</Text>

                    <Text style={styles.nome}>{this.props.autor}</Text>

                </View>
                    <Text style={styles.assunto}>{this.props.assunto}</Text>

            </View>

        )
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        margin: 15,
      },
      
      cabecalho:{
          margin:15,
      },

      tema:{
        color: '#00000f',
        fontSize: 18,
        marginRight: 80,
        fontWeight:'bold',
      },

      nome:{
        fontSize:14,
        fontWeight: 'bold',
        marginRight: 80,
      },

      assunto:{
          fontSize:16,
          margin: 15,
          fontWeight: 'bold',
      },
});