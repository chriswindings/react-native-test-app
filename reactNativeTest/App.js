/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import { Formik } from 'formik';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  TextInput,
} from 'react-native';

const App = () => {

  // const [gifts, setGifts] = useState([])

  return (
    <>
      <SafeAreaView>
        <ScrollView style={styles.container}>
          <Text style={styles.headingOne}>Christmas Present Planner</Text>
          <Formik
            initialValues={{ who: '', gift: '', plannedDollars: '0', spentDollars: '0', purchasedStatus: false, packagedStatus: false }}
            onSubmit={(values) => {
              console.log(values)
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <Text style={styles.inputLabel}>Who is this gift for?</Text>
                <TextInput
                  onChangeText={handleChange('who')}
                  onBlur={handleBlur('who')}
                  value={values.who}
                  style={styles.textInput}
                />
                <Text style={styles.inputLabel}>What are you buying?</Text>
                <TextInput
                  onChangeText={handleChange('gift')}
                  onBlur={handleBlur('gift')}
                  value={values.gift}
                  style={styles.textInput}
                />
                <Text style={styles.inputLabel}>How much have you budgeted?</Text>
                <TextInput
                  onChangeText={handleChange('plannedDollars')}
                  onBlur={handleBlur('plannedDollars')}
                  value={values.plannedDollars}
                  style={styles.textInput}
                />
                <Text style={styles.inputLabel}>How much did you spend?</Text>
                <TextInput
                  onChangeText={handleChange('spentDollars')}
                  onBlur={handleBlur('spentDollars')}
                  value={values.spentDollars}
                  style={styles.textInput}
                />
                <Button onPress={handleSubmit} title="Submit" />
              </View>
            )}
          </Formik>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  headingOne: {
    fontSize: 24,
    marginBottom: 16
  },
  textInput: {
    height: 40,
    marginBottom: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: '#333'
  },
  inputLabel: {
    marginBottom: 8
  }
});

export default App;
