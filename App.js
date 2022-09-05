import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,SafeAreaView ,ImageBackground, ScrollView} from 'react-native';
import { useDimensions,useDeviceOrientation } from '@react-native-community/hooks';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {NavBottom} from './Components/BottomNavigation'
import { EventCarousel } from './Components/EventCarousel';
import { HearingLoss } from './Components/Hearing_Loss';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Text_Speech} from './Pages/Text_Speech'
import {Events_Screen} from './Pages/Events_Page'
import {Loss_Screen} from './Pages/Loss_Page'

 function Home({navigation}){
  return (
    <View style={styles.container}>
        <ImageBackground source={require('./assets/icon/background.png')} style={{flex:1,justifyContent:"center",width:"100%"}}> 
      <View style={styles.card_container}>
    <Text style={{textAlign:"center",marginTop:"5%",color:"#828282",fontSize:"18px"}}>Select Our Mode</Text>
    <View style={{flexDirection:"row",flex:1,marginTop:"5%"}}>
      <View style={{flex:1}}>
     <View style={{width:"100%",height:"85%",backgroundColor:"#E5DBD8",borderBottomRightRadius:"40%",borderTopRightRadius:"40%"}}>
     <Image source={require('./assets/icon/translator.png')} style={{width:"60%",height:"70%",marginTop:"0%",marginLeft:"15%",marginTop:"8%",resizeMode:'contain'}} />
     </View>
      </View>
      <View style={{flex:1}}>
      <Text style={{marginTop:"2%",color:"#4F4F4F",fontSize:"10px", textAlign:"left",marginLeft:"5%"}}>Lets Catch Up {'\n'} {'\n'} Translator to achieve two way communication</Text>
      </View>
      <View style={{flex:1}}>
        <View style={{width:"50%",height:"50%",backgroundColor:"#CEB7B2",borderRadius:"80%",marginLeft:"20%"}}>
        <Text style={{textAlign:"center",marginTop:"10%",color:"#828282",fontSize:"18px",color:"white"}} onPress={() => navigation.navigate('Text')}>Start</Text>
        </View>
     
      </View>


      
    </View>
    <View style={{flexDirection:"row",flex:1}}>
      <View style={{flex:1}}>
     <View style={{width:"100%",height:"85%",backgroundColor:"#E5DBD8",borderBottomRightRadius:"40%",borderTopRightRadius:"40%"}}>
     <Image source={require('./assets/icon/final_2.png')}  style={{width:"60%",height:"70%",marginTop:"0%",marginLeft:"15%",marginTop:"8%",resizeMode:'contain'}}  />
     </View>
      </View>
      <View style={{flex:1}}>
      <Text style={{marginTop:"2%",color:"#4F4F4F",fontSize:"10px", textAlign:"left",marginLeft:"5%"}}>Hearing Test {'\n'} {'\n'} To Examine Hearing</Text>
      </View>
      <View style={{flex:1}}>
        <View style={{width:"50%",height:"50%",backgroundColor:"#CEB7B2",borderRadius:"80%",marginLeft:"20%"}}>
        <Text style={{textAlign:"center",marginTop:"10%",color:"#828282",fontSize:"18px",color:"white"}}  >Start</Text>
        </View>
     
      </View>


      
    </View>


    <View style={{flexDirection:"row",flex:1}}>
      <View style={{flex:1}}>
     <View style={{width:"100%",height:"85%",backgroundColor:"#E5DBD8",borderBottomRightRadius:"40%",borderTopRightRadius:"40%"}}>
     <Image source={require('./assets/icon/WechatIMG330.png')}  style={{width:"60%",height:"70%",marginTop:"0%",marginLeft:"15%",marginTop:"8%",resizeMode:'contain'}} />
     </View>
      </View>
      <View style={{flex:1}}>
      <Text style={{marginTop:"2%",color:"#4F4F4F",fontSize:"10px", textAlign:"left",marginLeft:"5%"}}>Auslan Tutorial {'\n'} {'\n'} Learn Australian Sign Language</Text>
      </View>
      <View style={{flex:1}}>
        <View style={{width:"50%",height:"50%",backgroundColor:"#CEB7B2",borderRadius:"80%",marginLeft:"20%"}}>
        <Text style={{textAlign:"center",marginTop:"10%",color:"#828282",fontSize:"18px",color:"white"}}>Start</Text>
        </View>
     
      </View>


      
    </View>
    
      </View>

      <View>
      <Text style={{marginTop:"5%",marginLeft:"5%",fontSize:"20px",color:"rgba(88, 79, 79, 1)",fontWeight:"700"}}>About Hearing Loss Group</Text>
      </View>
      <EventCarousel />
 
      <Text style={{marginLeft:"5%",marginBottom:"5%",fontSize:"20px",color:"rgba(88, 79, 79, 1)",fontWeight:"700"}}>Latest Event</Text>
      
      <HearingLoss/>
 
        <NavBottom/>
        </ImageBackground>
 
     
    </View>
  );
}




  function App() {
  const Stack = createNativeStackNavigator();

  return(
    <NavigationContainer independent={true}>
   <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
     <Stack.Screen name="Text" component={Text_Speech}/>
     <Stack.Screen name="Event_Screen" component={Events_Screen}/>
     <Stack.Screen name="Loss_Screen" component={Loss_Screen}/>
      </Stack.Navigator >
    
    </NavigationContainer>
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
    marginTop:"3%",
    width:"100%",
    height:"35%",
    backgroundColor:"white",
    borderTopLeftRadius:"40%",
    borderTopRightRadius:"40%",
    
  
  }
})

export default App;


