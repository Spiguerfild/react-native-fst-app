import React from 'react';
import wateringImg from '../assets/watering.png'
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
export function Welcome() {

  const navigation = useNavigation();

  const handleStart = () => {
    navigation.navigate('UserIdentificationer')
  }

  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper} >
        <Text style={styles.title}>
          Gerencie{'\n'}
          suas plantas de{'\n'}
          forma fácil
        </Text>
        <Image source={wateringImg} style={styles.image} resizeMode='contain' />
        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar
        </Text>

        <TouchableOpacity onPress={handleStart} activeOpacity={.7} style={styles.button}>

          <Feather name='chevron-right'
            style={styles.buttonIcon} />

        </TouchableOpacity>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 38,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 34
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text
  },
  image: {

    height: Dimensions.get('window').width * 0.7
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56
  },

  buttonIcon: {
    fontSize: 32,
    color: colors.white
  }
});