import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native'


export const UserIdentification = () => {

  const navigation = useNavigation();



  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState('');

  const handleInputBlur = () => {
    setIsFocused(false)
    setIsFilled(!!name)
  }

  const handleInputFocus = () => {
    setIsFocused(true)
  }
  const handleInputChange = (value) => {
    setIsFilled(!!value)
    setName(value)
  }
  const handleSubmit = () => {
    navigation.navigate('Confirmation')
  }
  return (

    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <View style={styles.header}>
                <Text style={styles.emoji}>
                  {isFilled ? '😀' : '👉👈'}
                </Text>

                <Text style={styles.title}>
                  Como podemos{'\n'} chamar você?
                </Text>
              </View>
              <TextInput placeholder='Digite seu nome'
                style={[
                  styles.input,
                  (isFocused || isFilled) && { borderColor: colors.green }
                ]}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange} />
              <View style={styles.footer}>
                <Button onPress={handleSubmit} text='apenas' />
              </View>


            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  content: {
    flex: 1,
    width: '100%'
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center',
    width: '100%'
  },
  header: {
    alignItems: 'center'
  },
  emoji: {
    fontSize: 44,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center'
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    marginTop: 20,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
  },
  footer: {
    marginTop: 40,
    width: '100%',
    paddingHorizontal: 20,
  }

});