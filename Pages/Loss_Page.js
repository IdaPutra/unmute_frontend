import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,SafeAreaView ,ImageBackground,ScrollView} from 'react-native';
import { useDimensions,useDeviceOrientation } from '@react-native-community/hooks';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {NavBottom} from '../Components/BottomNavigation'



export function Loss_Screen() {


  return (
 
    <View style={styles.container}>
   
      <ImageBackground source={require('../assets/icon/background.png')} style={{flex:1,width:"100%"}}>
    <Text style={styles.H1}>Hearing Loss Facts</Text>
    <Image source={require('../assets/event/fact_1_inside.jpeg')} style={{width:"80%",height:"20%",marginLeft:"3%",marginTop:"5%",resizeMode:'contain'}}></Image>
    <Text style={{marginLeft:"5%",marginTop:"7%",color:"#756A6A",fontWeight:"10",fontSize:"18%"}}>Source From: Deaf Australia {'\n'}{'\n'} 30/08/2022</Text>
    <ScrollView>
    <Text style={{marginLeft:"5%",marginTop:"7%",color:"#756A6A",fontSize:"14%"}}>Introduction

    Published by: Hearing Care Industry\ Association, 2006

Hearing loss in Australia
One in six Australians currently suffer from hearing loss. This number is expected to rise to one in four by 2050, thanks to an ageing population and an increasing amount of people being exposed to dangerously loud noise.
Only one in five Australians who could benefit from a hearing aid actually use one.
While most hearing loss is a result of ageing or genetics, one third of people acquire their hearing loss through preventable means.
In 2005, a study found that over 3.55 million Australians were living with hearing loss. Nearly half of them were working age (16-64 years).
One in three people over the age of 50 suffer from hearing loss. This number rises to one in two after the age of 60.
The average age of people with hearing loss who access hearing services via the Commonwealth Government is 79. This is concerning considering that half the Australians with hearing loss are younger than 65.
Employment rates for people with hearing loss are 20.5% lower for men and 16.5% lower for women.
A person with untreated hearing loss earns an average of $10K less than people with no hearing loss or treated hearing loss.
Hearing loss costs Australians a staggering $11.75 billion annually in lost productivity and other impacts.

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
