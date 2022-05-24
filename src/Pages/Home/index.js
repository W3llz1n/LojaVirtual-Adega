import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView} from 'react-native';
import Dados from '../../../dados/dados';
import DadosCer from '../../../dados/DadosCer';
import DadosVi from '../../../dados/DadosVi';
import Card from '../../components/Card/card';
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'

export default function Home() {

  const navigation = useNavigation();

    return (
        <View style={styles.container}>
          <ScrollView>
          <View style={styles.header}>
            <Image 
            source={require('../../../assets/banner.jpg')}
            style={styles.img}
            />

            <View style={styles.textContainer}>
              <Text style={styles.titulo}>BEM VINDOS</Text>
            </View>
          </View>

          
          
            <View style={styles.containerCards}>
              <View style={styles.containerTitulo}>

                <Text style={styles.texto}>DESTILADOS</Text>

                <TouchableOpacity>
                <AntDesign name="arrowright" size={24} color="black" />
                </TouchableOpacity>

              </View>
              
              <FlatList
                horizontal={true}
                data = {Dados}
                keyExtractor = {(item) => item.id}
                renderItem = {({item}) => (

                  <Card
                  titulo ={item.nome}
                  imagem ={item.imagem}
                  valor ={item.valor}
                  onClick={() => navigation.navigate('Detalhes', {item})}
                  />
                )}
              />
            </View>

            <View style={styles.containerCards}>
            <View style={styles.containerTitulo}>

              <Text style={styles.texto}>CERVEJAS</Text>

              <TouchableOpacity>
              <AntDesign name="arrowright" size={24} color="black" />
              </TouchableOpacity>

            </View>

            <FlatList
              horizontal={true}
              data = {DadosCer}
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

            <View style={styles.containerCards}>
            <View style={styles.containerTitulo}>

              <Text style={styles.texto}>VINHOS</Text>

              <TouchableOpacity>
              <AntDesign name="arrowright" size={24} color="black" />
              </TouchableOpacity>

            </View>

            <FlatList
              horizontal={true}
              data = {DadosVi}
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
          </ScrollView>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#ECA72C',
      },
      header:{
        borderBottomWidth: 1,
        borderBottomColor: '#000',
      },
      img: {
        width: '100%',
        height: 180,
        backgroundColor: '#000'
      },
      titulo:{
        fontFamily: 'Ultra_400Regular',
        fontSize: 40,
        fontWeight: 'bold'
      },
      textContainer: {
        marginVertical: '2%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      },
      containerCards:{
        width: '100%',
        marginVertical: 20
      },
      containerTitulo:{
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingBottom: 5,
        flexDirection: 'row'
      },
      texto:{
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Ultra_400Regular'
      },
    });