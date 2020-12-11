import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Button } from 'react-native';
import GiftListItem from '../components/GiftListItem';

const ShowGifts = ({ navigation, route }) => {

  const initialGifts = [
    {
      who: "Chris",
      id: 4638,
      gift: "Drum Sticks",
      plannedDollars: "20",
      spentDollars: "13",
      purchasedStatus: false,
      packagedStatus: false
    },
    {
      who: "Andrew",
      id: 72912,
      gift: "Some Sleep",
      plannedDollars: "200",
      spentDollars: "4000",
      purchasedStatus: false,
      packagedStatus: false
    }
  ]

  const [gifts, setGifts] = useState(initialGifts)

  const updateGifts = (gift) => {
    const updatedGifts = gifts.map((existingGift) => { 
     return existingGift.id === gift.id ? { ...gift } : { ...existingGift }
    })

    setGifts([...updatedGifts])
  }
  
  useEffect(() => {
    if (route.params?.gift) {
      updateGifts(route.params.gift)
      route.params.gifts = false
    }
  }, [route.params?.gift])

  return (
    <SafeAreaView>
      <FlatList
        data={gifts}
        renderItem={({item, index}) => <GiftListItem item={item} index={index} navigation={navigation}/>}
      />
      <Button 
        title="Create a Gift"
        onPress={() => navigation.navigate('Create Gift')}
      />
      </SafeAreaView>
  );
};

export default ShowGifts;
