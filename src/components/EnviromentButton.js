import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


export const EnviromentButton = (props) => {
  const { title,
    active = false,
    ...rest
  } = props;




  return (
    <TouchableOpacity style={[
      styles.container,
      active && styles.containerActive
    ]}  {...rest}
    >

      <Text style={[
        styles.text,
        active && styles.textActive]}>
        {title}
      </Text>

    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    width: 76,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 5
  },
  containerActive: {

    backgroundColor: colors.green_light
  },
  text: {
    color: colors.heading,
    fontFamily: fonts.text,
  },
  textActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
  }
})