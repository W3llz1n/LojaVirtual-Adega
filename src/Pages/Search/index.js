import React from 'react';
import {useState, useEffect} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Dados from '../../../dados/dadosTotais';
import Card from '../../components/CardFavorito/index';
import { View, Text, StatusBar, StyleSheet, FlatList, TextInput} from 'react-native';


export default function Search() {

    const [searchText, setSearchText] = useState('');
    const [list, setList] = useState(Dados);

    useEffect(()=>{
        if(searchText === ''){
            setList(Dados);
        }else {
            setList(
                Dados.filter(
                    (item) => 
                    item.nome.toLowerCase().indexOf(searchText.toLowerCase()) > -1)
            );
        }
    }, [searchText]);

    return (
        <View style={styles.container}>
            <View style={styles.searchArea}>
                <TextInput
                style={styles.input}
                placeholder='Pesquise uma bebida'
                value={searchText}
                onChangeText={(t) => setSearchText(t)}
                />
                <Ionicons name="search" size={26} color='#000' style={{marginRight: 15}}/>
            </View>
              <FlatList
                horizontal={false}
                data = {list}
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
        padding: 10,
        
      },
      searchArea: {
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
          flexDirection: 'row',
          backgroundColor: '#fff',
          borderRadius: 10
      },
      input:{
          width: '100%',
          padding: 15
      },
    });