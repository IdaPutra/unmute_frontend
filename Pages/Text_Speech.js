import React, { useState, useCallback, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,SafeAreaView ,ImageBackground, ScrollView} from 'react-native';
import { useDimensions,useDeviceOrientation } from '@react-native-community/hooks';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {NavBottom} from '../Components/BottomNavigation'
import { GiftedChat,InputToolbar } from 'react-native-gifted-chat'
import * as Speech from 'expo-speech';
import SelectDropdown from 'react-native-select-dropdown'
export  function Text_Speech() {
  const Mood= ["Normal","Happy", "Sad"]
  const [selectedPerson,SetSelectedperson] = useState("Guy")
  const [selectedMood,SetSelectedMood] = useState("Normal")
  const person=["Guy","Girl"]
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
    if(selectedMood == "Happy" && selectedPerson == "Girl"){
      Speech.speak(messages[0].text,{
        pitch:2,
        rate:1,
      });
    }


    if(selectedMood == "Happy" && selectedPerson == "Guy"){
      Speech.speak(messages[0].text,{
        pitch:2,
        rate:1,
        voice:"com.apple.ttsbundle.Daniel-compact"
      });
    }

    if(selectedMood == "Normal" && selectedPerson == "Girl"){
      Speech.speak(messages[0].text);
    }

    if(selectedMood == "Normal" && selectedPerson == "Guy"){
      Speech.speak(messages[0].text,{
        voice:"com.apple.ttsbundle.Daniel-compact"
      });
    }
 
    if(selectedMood == "Sad" && selectedPerson == "Girl"){
      Speech.speak(messages[0].text,{
        pitch:0.6,
        rate:0.4});
    }

    if(selectedMood == "Sad"  && selectedPerson == "Guy"){
      Speech.speak(messages[0].text,{
        pitch:1,
        rate:0.3,
        voice:"com.apple.ttsbundle.Daniel-compact"});
    }
    console.log(messages)
  }, [messages])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    
  }, [])


  return (
    <ImageBackground source={require('../assets/icon/background.png')} style={{flex:1,justifyContent:"center",width:"100%"}}>



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

<View style={{height:"8%",backgroundColor:"white"}}>
    <View style={{flexDirection:"row"}}>
  <View style={{flex:1}}>
  <SelectDropdown
	data={person}
  defaultButtonText="Voice Type"
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
    SetSelectedperson(selectedItem)
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
/>
  </View>
  <View style={{flex:1}}>
  <SelectDropdown
  defaultButtonText="Voice Tone"
	data={Mood}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
    SetSelectedMood(selectedItem)
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
/>
  </View>
  </View> 




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
   marginTop:"10%"
  },

  card_container: {

    width:"100%",
    height:"79%",




    
  
  }
});
