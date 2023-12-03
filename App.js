import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TextInput, View, ScrollView, } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
const initialState = {
  auto: false,
  realEstate: false,
  studentLoans: false,
  creditCard: false,
  bankLoan: false,
};


export default function App() {
  const [text, onChangeText] = useState();
  const [checkboxes, onChangeCheckboxes] = useState();
  const createAlert = () => {
    Alert.alert('Amount Submitted', 'example text', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => console.log('OK Pressed'),
      },
    ]);
  }

  return (
    <ScrollView
      // style={styles.main}
      contentContainerStyle={styles.main}
    >
      <Text style={styles.text}>Enter savings amount:</Text>
      <TextInput
        keyboardType='numeric'
        style={styles.textInput}
        placeholder="Enter amount"
        onChangeText={onChangeText}
        value={text}
        maxLength={10}
        returnKeyType='done'
      />
      <Text style={styles.text}>Enter savings interest rate:</Text>
      <TextInput
        keyboardType='numeric'
        style={styles.textInput}
        placeholder="Enter amount"
        onChangeText={onChangeText}
        value={text}
        maxLength={10}
        returnKeyType='done'
      />

      <Text style={styles.text}>Enter checking amount:</Text>
      <TextInput
        keyboardType='numeric'
        style={styles.textInput}
        placeholder="Enter amount"
        onChangeText={onChangeText}
        value={text}
        maxLength={10}
        returnKeyType='done'
        onSubmitEditing={createAlert}
      />
      <Text style={styles.text}>Enter checking interest rate:</Text>
      <TextInput
        keyboardType='numeric'
        style={styles.textInput}
        placeholder="Enter amount"
        onChangeText={onChangeText}
        value={text}
        maxLength={10}
        returnKeyType='done'
        onSubmitEditing={createAlert}
      />

      {/* <Text style={styles.text}>Enter checking amount:</Text>
      <TextInput
        keyboardType='numeric'
        style={styles.textInput}
        placeholder="Enter amount"
        onChangeText={onChangeText}
        value={text}
        maxLength={10}
        returnKeyType='done'
        onSubmitEditing={createAlert}
      />
      <Text style={styles.text}>Enter checking interest rate:</Text>
      <TextInput
        keyboardType='numeric'
        style={styles.textInput}
        placeholder="Enter amount"
        onChangeText={onChangeText}
        value={text}
        maxLength={10}
        returnKeyType='done'
        onSubmitEditing={createAlert}
      /> */}
      <View style={styles.checkboxWrapper}>
        <CheckBox
          value={state.angular}
          onValueChange={value =>
            onChangeCheckboxes({
              ...state,
              auto: false,
            })
          }
        />
        <CheckBox
          value={state.angular}
          onValueChange={value =>
            onChangeCheckboxes({
              ...state,
              realEstate: false,
            })
          }
        />
        <CheckBox
          value={state.angular}
          onValueChange={value =>
            onChangeCheckboxes({
              ...state,
              studentLoans: false,
            })
          }
        />
        <CheckBox
          value={state.angular}
          onValueChange={value =>
            onChangeCheckboxes({
              ...state,
              creditCard: false,
            })
          }
        />
        <CheckBox
          value={state.angular}
          onValueChange={value =>
            onChangeCheckboxes({
              ...state,
              bankLoan: false,
            })
          }
        />
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 30,
  },
  textInput: {
    width: 275,
    height: 50,
    marginTop: 15,
    borderColor: 'black',
    borderRadius: 15,
    borderWidth: 5
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
});
