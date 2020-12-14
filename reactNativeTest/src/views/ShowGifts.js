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

  const createGift = (gift) => {
    setGifts((gifts) => {
      return [...gifts, gift]
    })
  }

  const updateGift = (gift) => {
    const updatedGifts = gifts.map((existingGift) => { 
      console.log(existingGift.id, gift.id)
     return existingGift.id === gift.id ? { ...gift } : { ...existingGift }
    })
    setGifts([...updatedGifts])
  }
  
  useEffect(() => {

    if (route.params?.createGift) {
      createGift(route.params?.gift)
      route.params.createGift = false
    }

  }, [route.params?.createGift])

  useEffect(() => {
    if (route.params?.updateGift) {
      updateGift(route.params?.gift)
      route.params.updateGift = false
    }

  }, [route.params?.updateGift])

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
