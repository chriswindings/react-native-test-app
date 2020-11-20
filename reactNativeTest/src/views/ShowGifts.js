import React from 'react';
import {SafeAreaView, ScrollView, Text, Button} from 'react-native';

const ShowGifts = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>List of Gifts</Text>
        <Button 
          title="Create a Gift"
          onPress={() => navigation.navigate('Create Gift')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShowGifts;
