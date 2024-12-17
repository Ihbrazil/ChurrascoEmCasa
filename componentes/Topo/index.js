import React from 'react';
import { View, Text, Image } from 'react-native';

import churrasco from '../../assets/images/churrasco.png';

import estilo from './estilo';

export default function Topo() {
  return (
    <View style={ estilo.box }>
      <Image source = { churrasco } style={ estilo.boxIcone }/>

      <View>
        <Text style={ estilo.boxTitulo }>Churrasco em casa</Text>
        <Text style={ estilo.boxSubtitulo }>Calculando a comida e a bebida</Text>
      </View>
    </View>
  )
}
