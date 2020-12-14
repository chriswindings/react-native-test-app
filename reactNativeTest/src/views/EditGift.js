import React from 'react';
import { Text, TextInput, View, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';

const EditGift = ({ navigation, route }) => {


  const { gift } = route.params

  const handleGiftEdit = (values) => {
    navigation.navigate('Planner', { updateGift: {id: gift.id, ...values} })
  }

  return (
    <Formik
      initialValues={{ who: gift.who, id: gift.id, gift: gift.gift, plannedDollars: gift.plannedDollars, spentDollars: gift.spentDollars, purchasedStatus: gift.purchasedStatus, packagedStatus: gift.packagedStatus }}
      onSubmit={handleGiftEdit}
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
 
export default EditGift;
