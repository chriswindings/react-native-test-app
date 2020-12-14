import React from 'react';
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native';

const GiftListItem = ({item, index, navigation }) => {

  const editGift = () => {
    navigation.navigate('Edit Gift', { gift: item })
  }

  return ( 
    <TouchableHighlight onPress={editGift}>
      <View>
        <Text key={index} style={styles.giftItem}>{item.who} is getting {item.gift}. You've budgeted {item.plannedDollars} and have spent {item.spentDollars}.</Text>
      </View>
    </TouchableHighlight>
   );
}

const styles = StyleSheet.create({
  giftItem: {
    marginVertical: 8,
    marginHorizontal: 24
  }
});

export default GiftListItem;
