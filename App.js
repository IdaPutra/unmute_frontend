import React, { useState, useCallback, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,SafeAreaView ,ImageBackground, ScrollView} from 'react-native';
import { useDimensions,useDeviceOrientation } from '@react-native-community/hooks';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {NavBottom} from './Components/BottomNavigation'
import { EventCarousel } from './Components/EventCarousel';
import { HearingLoss } from './Components/Hearing_Loss';
import { GiftedChat,InputToolbar } from 'react-native-gifted-chat'
import * as Speech from 'expo-speech';

export default function App() {

  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: 'Hello, We are Here To Help',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
  ]);
  const [text,setText] = useState('hello')


 
  const customtInputToolbar = props => {
    return (
      <InputToolbar
      {...props}
      containerStyle={{
        backgroundColor: "white",
        borderTopColor: "#CEB7B2",
        borderTopWidth: 1,
        padding: 3,

   
    
      }}
    />
    );
  };
  
  
  //for sad pitch 0.3 , rate 0.4
  //for happy pitch 2, rate 1


  useEffect(() => {
    Speech.speak(messages[0].text,{
      pitch:2,
      rate:1
    });
    console.log(messages)
  }, [messages])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    
  }, [])


  return (
    <ImageBackground source={require('./assets/icon/background.png')} style={{flex:1,justifyContent:"center",width:"100%"}}>
    <View style={styles.container}>
      <Text style={styles.H1}>Translator</Text>


<View style={styles.card_container}>
         <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      }}
      renderInputToolbar={props => customtInputToolbar(props)}
    ></GiftedChat>

   
  
    </View>





    </View>

   
    <NavBottom/>
    </ImageBackground>
 
   
  )

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

    width:"100%",
    height:"79%",




    
  
  }
});
