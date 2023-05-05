import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList} from 'react-native';
import Constants from 'expo-constants';
import {SelectList, MultipleSelectList }from 'react-native-dropdown-select-list';
import ListPlayer from '../../components/ListPlayer';
import ListPlayerSeparator from '../../components/ListPlayerSeparator';
import colors from '../../config/colors';
import Popup from '../../components/Modal';




const jsondata = require('../../webscrapedData.json');

let arr = [];

for(player in jsondata){
  console.log(player)
}

async function convertarray(data) {
  
  for(const key in data) {
    arr.push({
      "name": key.name,
      "position": key.position,
      "totalValue": key.totalValue,
    })
  }
}


const App = () => {




  
 
 






  
  const [selected, setSelected] = React.useState("");
  
  const order = [
    {key:'Overall', value:'Overall'},
    {key:'Shooting', value:'Shooting'},
    {key:'Defense', value:'Defense'},
    {key:'Rebounds', value:'Rebounds'},
  ]

    
    const players = [
      {
        
        id: 1,
        playerName: 'hi',
        teamName: 'NBA',
        position: 'hello',
        rank: 1
      }
        
    ];

  
    
const onPress = (item) => {
  setActiveItem(item)
  setModalVisible(true)
}
const [modalVisible, setModalVisible] = React.useState(false);
const [activeItem, setActiveItem] = React.useState(null);

  return(
    <View style={{backgroundColor: colors.background,flex: 1}}>
      <View>
        
        <FlatList style = {styles.list}
        data={players}
        keyExtractor={(players) => players.id.toString()}
        renderItem={({ item }) => (
          <ListPlayer
            playerName={item.playerName}
            rank={item.rank}
            teamName={item.teamName}
            position = {item.position}
            onPress={() => onPress(item)}
          />
        )}
        ItemSeparatorComponent={() => (
          <ListPlayerSeparator color={colors.dark}/>
        )}
      />
      <Popup modalVisible={modalVisible} setModalVisible={setModalVisible} activeItem={activeItem} />
      </View>
  </View>
    );
}
const styles = StyleSheet.create({

list: {
  marginTop:20,
  color: colors.textColor
},

text: {
  textColor: 'white'
}
});

export default App;

