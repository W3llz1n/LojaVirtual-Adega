import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Dados from '../../../dados/dadosTotais';
import Card from '../../components/CardFavorito/index';
import { View, Text, StatusBar, StyleSheet, FlatList} from 'react-native';

export default function Populares() {
    return (
        <View style={styles.container}>
              <FlatList
                horizontal={false}
                data = {Dados}
                keyExtractor = {(item) => item.id}
                renderItem = {({item}) => (

                  <Card
                  titulo ={item.nome}
                  imagem ={item.imagem}
                  valor ={item.valor}
                  />
                )}
              />
            </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#ECA72C',
        padding: 10
      },
    });