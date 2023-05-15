import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';


export const Button = (props) => {
  return (
    <TouchableOpacity activeOpacity={.7} style={styles.button}>
      <Text style={styles.buttonText} >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    paddingHorizontal: 10
  },
  buttonText: {
    color: colors.white,
    fontSize: 24
  }
});