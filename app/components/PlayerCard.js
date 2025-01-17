import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Constants from 'expo-constants';
import colors from '../config/colors';
import { useFonts, Poppins_700Bold, Poppins_400Regular} from '@expo-google-fonts/poppins';

function PlayerCard({name, image, points, rebounds, assists, freeThrow, height, weight}) {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,

  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Card style={styles.card}>
        <Card.Content>
            <Title style={styles.cardText}>{name}</Title>
        </Card.Content>
        <View style={{flexDirection:'row'}}>
            <Card.Cover style={styles.cardImage} source={image}/>
            <Text style={styles.paragraph}>Points: {points} {'\n'}
                                            Rebounds: {rebounds}{'\n'}
                                            Assists: {assists}{'\n'}
                                            FT%:{freeThrow}{'\n'}
                                            Height: {height} {'\n'}
                                            Weight: {weight}
                                            </Text>
        </View>
    </Card>
  );
}

const styles = StyleSheet.create({
      card: {
        width: 340,
        height: 250,
        marginLeft: 20,
        marginTop: 20,
        backgroundColor: colors.surface
      },
      cardImage:{
        width: 170,
        height: 170,
        marginLeft: 15,
        marginTop: 10
       
        
      },
      cardText: {
        fontSize: 25,
        fontWeight: 'bold', 
        marginBottom: 5,
        marginLeft: 5,
        color: colors.textColor,
        fontFamily: 'Poppins_700Bold'
      }, 
      paragraph: {
        fontSize: 17,
        fontWeight: 'normal',
        paddingLeft: 10,
        paddingTop: 10, 
        color: colors.textColor,
        fontFamily: 'Poppins_400Regular'
      },
      
});
export default PlayerCard;