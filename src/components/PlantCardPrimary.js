import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { SvgFromUri } from 'react-native-svg';
import { EnviromentButton } from './EnviromentButton';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { RectButton } from 'react-native-gesture-handler';

export const PlantCardPrimary = (props) => {

  const { data, ...rest } = props
  return (
    <TouchableOpacity style={styles.container}
      {...rest}>

      <SvgFromUri uri={data.photo} width={70} height={70} />

      <Text style={styles.text}> {data.name}</Text>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '45%',
    backgroundColor: colors.shape,
    borderRadius: 20,
    paddingVertical: 26,
    alignItems: 'center',
    margin: 10
  },
  text: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
    marginVertical: 16
  }


})