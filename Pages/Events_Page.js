import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,SafeAreaView ,ImageBackground,ScrollView} from 'react-native';
import { useDimensions,useDeviceOrientation } from '@react-native-community/hooks';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {NavBottom} from '../Components/BottomNavigation'



export function Events_Screen() {

    console.log('YOU GRONK')
    let x=1;
  

  return (
 
    <View style={styles.container}>
   
      <ImageBackground source={require('../assets/icon/background.png')} style={{flex:1,width:"100%"}}>
    <Text style={styles.H1}>National Week of Deaf People</Text>
    <Image source={require('../assets/icon/deaf_festival.png')} style={{width:"80%",height:"20%",marginLeft:"3%",marginTop:"5%",resizeMode:'contain'}}></Image>
    <Text style={{marginLeft:"5%",marginTop:"7%",color:"#756A6A",fontWeight:"10",fontSize:"18%"}}>Source From: Deaf Australia {'\n'}{'\n'} 30/08/2022</Text>
    <ScrollView>
    <Text style={{marginLeft:"5%",marginTop:"7%",color:"#756A6A",fontSize:"14%"}}>Introduction

What is National Week of Deaf People?

The National Week of Deaf People (NWDP) is a week-long national celebration of Deaf individuals and the Australian Deaf community, which includes celebrating the International Week of Deaf People (IWDP) and International Day of Sign Languages (IDSL) which are initiatives of the World Federation of the Deaf (WFD). These two events are traditionally held during September and are based on the founding date of the WFD (23 September 1951). is an opportunity for Deaf people to celebrate their communities, language, culture and history; make the public aware of their local, state and national Deaf communities; and to recognise their achievements
It is also an opportunity for organisations involved with or wishing to be involved with the Deaf Community to build and maintain relationships with Deaf people and be recognised as an ally to the Deaf community.

Daily Theme

Monday, 19 September 2022 | Sign Languages in Education

Tuesday, 20 September 2022 | Sustainable economic opportunities for deaf people

Wednesday, 21 September 2022 | Health for All

Thursday, 22 September 2022 | Safeguarding deaf people in times of crisis

Friday, 23 September 2022 | Sign Languages Unite Us!

Saturday, 24 September 2022 | Intersectional Deaf Communities

Sunday, 25 September 2022 | Deaf Leadership for Tomorrow

See More at:  https://deafaustralia.org.au/nwdp/
</Text>
    </ScrollView>
<NavBottom/>
    </ImageBackground>
  

</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },

  H1:{
    fontFamily: "Times New Roman",
    fontSize:"39px",
    color:"#854E34",
    fontWeight:"700",
   marginLeft:"5%",
   marginTop:"13%"
  },

  card_container: {
    marginTop:"3%",
    width:"100%",
    height:"35%",
    left:"0px",
    top:"111px",
    backgroundColor:"white",
    borderTopLeftRadius:"40%",
    borderTopRightRadius:"40%",
    
  
  }
});
