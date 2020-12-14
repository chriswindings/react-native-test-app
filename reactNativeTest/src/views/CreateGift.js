import React from 'react';
import { Formik } from 'formik';
import uuid from 'react-native-uuid';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  TextInput,
} from 'react-native';

const CreateGift = ({ navigation }) => {

  function handleGiftSubmission(values) {
    const newGift = { id: uuid.v1(), ...values }
    console.log(newGift)
    navigation.navigate('Planner', { createGift: newGift })
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Formik
          initialValues={{who: '', gift: '', plannedDollars: '', spentDollars: '', purchasedStatus: false, packagedStatus: false }}
          onSubmit={handleGiftSubmission}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <Text style={styles.inputLabel}>Who is this gift for?</Text>
              <TextInput
                onChangeText={handleChange('who')}
                placeholder="Ralphie P."
                onBlur={handleBlur('who')}
                value={values.who}
                style={styles.textInput}
              />
              <Text style={styles.inputLabel}>What are you buying?</Text>
              <TextInput
                onChangeText={handleChange('gift')}
                placeholder="Red Rider BB Gun"
                onBlur={handleBlur('gift')}
                value={values.gift}
                style={styles.textInput}
              />
              <Text style={styles.inputLabel}>How much have you budgeted?</Text>
              <TextInput
                onChangeText={handleChange('plannedDollars')}
                placeholder="0"
                onBlur={handleBlur('plannedDollars')}
                value={values.plannedDollars}
                style={styles.textInput}
              />
              <Text style={styles.inputLabel}>How much did you spend?</Text>
              <TextInput
                onChangeText={handleChange('spentDollars')}
                placeholder="0"
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
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
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

export default CreateGift;
