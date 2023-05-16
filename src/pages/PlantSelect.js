import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native'
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native'
import { Header } from '../components/Header';
import { EnviromentButton } from '../components/EnviromentButton';
import api from '../services/api';
import { PlantCardPrimary } from '../components/PlantCardPrimary';

export const PlantSelect = () => {

  const [enviroment, setEnviroment] = useState([])
  const [plants, setPlants] = useState([])
  // const [enviromentSelected, setEnviromentSelected] = useState('bedroom')

  useEffect(() => {

    const fetchEnviroment = async () => {
      const { data } = await api.get('plants_environments?_sort=title&_order=asc')
      setEnviroment([
        {
          key: 'all',
          title: 'Todos'
        },
        ...data
      ])
    }
    fetchEnviroment()

  }, [])


  useEffect(() => {

    const fetchPlants = async () => {

      const { data } = await api.get('plants?_sort=name&_order=asc')
      setPlants(data)
    }

    fetchPlants()
  }, [])




  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>Em qual ambiente </Text>
        <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
      </View>
      <View>
        <FlatList
          data={enviroment}
          renderItem={({ item }) => (
            <EnviromentButton
              title={item.title}
            // active={item.key === enviromentSelected}

            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
        />
      </View>

      <View style={styles.plants}>
        {console.log(plants)}
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={plants}
          renderItem={({ item }) => (
            <PlantCardPrimary data={item} />

          )}
        />
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading,
  },
  header: {
    paddingHorizontal: 30
  },
  enviromentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32
  },
  plants: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center'
  }
})