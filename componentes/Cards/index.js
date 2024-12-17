import React from 'react';
import { Image, Text, View } from 'react-native';

import convidado from '../../assets/images/convidado.png';
import carne from '../../assets/images/carne.png';
import refrigerante from '../../assets/images/refrigerante.png';
import cerveja from '../../assets/images/cerveja.png';

import estilo from './estilo';

export default function Cards () {
  return (
    <View style={ estilo.boxDados }>
      <View style={ estilo.boxCard }>
        <Image source = { convidado } style={ estilo.boxCardIcone }/>

        <Text style={ estilo.boxCardTexto } >
          Convidados
        </Text>

        <Text style={ estilo.boxCardValor } >
          1
        </Text>
      </View>

      <View style={ estilo.boxCard } >
        <Image source = { carne } style={ estilo.boxCardIcone } />
        
        <Text style={ estilo.boxCardTexto } >
          Carne
        </Text>

        <Text style={ estilo.boxCardValor } >
          400 GR
        </Text>
      </View>

      <View style={ estilo.boxCard } >
        <Image source = { refrigerante } style={ estilo.boxCardIcone } />
        
        <Text style={ estilo.boxCardTexto } >
          Refrigerante
        </Text>

        <Text style={ estilo.boxCardValor } >
          700 ML
        </Text>
      </View>

      <View style={ estilo.boxCard } >
        <Image source = { cerveja } style={ estilo.boxCardIcone } />
        
        <Text style={ estilo.boxCardTexto } >
          Cerveja
        </Text>

        <Text style={ estilo.boxCardValor } >
          4 Latas
        </Text>
      </View>
    </View>
  );
}