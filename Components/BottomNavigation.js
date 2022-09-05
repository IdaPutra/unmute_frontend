import { AppBar, IconButton, FAB } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export  function NavBottom(){
   
return (



<AppBar
   
  variant="bottom"
  leading={props => (
    <IconButton icon={props => <Icon name="home" {...props} />} {...props} />
  )}
  trailing={props => (
    <IconButton
      icon={props => <Icon name="magnify" {...props} />}
      {...props}
    />
  )}
  style={{ position: "absolute", start: 0, end: 0, bottom: 0,height:"10%",backgroundColor:"#CEB7B2"}}
>
  <FAB
    icon={props => <Icon name="microphone" {...props}  style={{color:"rgba(117, 106, 106, 1)"}}/>}
    style={{ position: "absolute", top: -28, alignSelf: "center",backgroundColor:"#CEB7B2" }}
  />
</AppBar>






)
    
} 

