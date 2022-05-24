import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

export default function Detalhes(props) {
 return (
   <View style={styles.container}> 
    <View style={styles.header}>
        <Image
          source={require('../../../assets/vodka-askov.png')}
          style={styles.img}
        />
        <View style={styles.textContainer}>
              <Text style={styles.titulo}>ASKOV</Text>
        </View>
        <View style={styles.containerDesc}>
              <Text style={styles.texto}>PREÇO: 25,99</Text>
        </View>
        <View style={styles.containerDesc}>
              <Text style={styles.texto}></Text>
              <Text style={styles.texto}></Text>
              <Text style={styles.texto}></Text>
              <Text style={styles.texto}></Text>
        </View>
    </View>
   </View>
  
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ECA72C',
  },
  header:{
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    backgroundColor: '#fff'
  },
  img: {
    width: '100%',
    height: 350,
    backgroundColor: '#000'
  },
  textContainer:{
    padding: '2%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  titulo:{
    fontFamily: 'Ultra_400Regular',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff'
  },
  containerDesc:{
    padding: '5%',
    width: '100%',
  },
})