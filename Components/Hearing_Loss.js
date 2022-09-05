import React, { useState, useCallback, useRef } from 'react';
import {
  Text, 
  View,
  SafeAreaView ,Image} from 'react-native';
  import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';

export  function HearingLoss() {
  const navigation = useNavigation();
  const exampleItems=[
    {
        title:"Celebrate the National week of Deaf People",
        text: "What is National Week of Deaf People? The National Week of Deaf People (NWDP) is a week-long national celebration of Deaf individuals and the Australian Deaf community, which includes celebrating the International Week of Deaf People (IWDP) and International Day of Sign Languages (IDSL) which are initiatives of the World Federation of the Deaf (WFD). These two events are traditionally held during September and are based on the founding date of the WFD (23 September 1951). is an opportunity for Deaf people to celebrate their communities, language, culture and history; make the public aware of their local, state and national Deaf communities; and to recognise their achievements It is also an opportunity for organisations involved with or wishing to be involved with the Deaf Community to build and maintain relationships with Deaf people and be recognised as an ally to the Deaf community.Daily Theme Monday, 19 September 2022 | Sign Languages in Education Tuesday, 20 September 2022 | Sustainable economic opportunities for deaf peopl Wednesday, 21 September 2022 | Health for All Thursday, 22 September 2022 | Safeguarding deaf people in times of crisis Friday, 23 September 2022 | Sign Languages Unite Us! ",
        image:require("../assets/event/event1_icon.png")
        
    },
    {
        title:`Deaf Festival 2022
        `,
        text: `Introduction
        The Deaf Festival is a celebration of the Deaf community’s language, culture, heritage and achievements. The festival is an excellent opportunity for young deaf people to look up to deaf role models. It has been held bi-annually and showcases deaf people’s skills, businesses, crafts and arts as well as performing arts. There are a variety of booths displaying a mixture of deaf recreation clubs and groups, organisations for the deaf, individual deaf businesses and service providers. Activities and mini workshops are given at the Deaf Festival such as Auslan classes and children’s activities.
        `,
        image:require("../assets/event/event_2_icon.png")
    },
    {
        title:`Virtual Event: Colin Allen AM Lecture`,
        text: `About the lecture

        Deaf Australia members can nominate any Deaf person to present on any of the above topics.
        The Lecture will be presented during an official function hosted by Deaf Australia, and the individual who delivers the Lecture will be recognised through presentation of a work of art by a Deaf artist. The Lecture will be recorded and maintained as an archive of lectures for the benefit of the public and as an historical artefact of significance for the Australian Deaf Community.
        The Lecture should not be interpreted as a scholarship in any way.
        
        Purpose
        
        At the 30th Annual General Meeting of Deaf Australia in October 2016, the establishment of The Colin Allen AM Lecture was announced to honour the achievements of former President of Deaf Australia – Colin Allen AM.
        
        The intention of the Lecture is that individuals who will give the presentation will reflect on the themes of significance that complement the contribution and legacy of Mr Colin Allen AM, including:
        1.Deaf Community (both Australia and International)
        2.Human Rights for Deaf people and their families
        3.Sign Language rights
        4.International development cooperation
        
        See More at:  https://www.deaffestivalqld.com.au/
        
        `,
        image:require("../assets/event/event_3_icon.png")
    },
  
  ]

  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(exampleItems);
  const ref = useRef(null);


  const renderItem = useCallback(({ item, index }) => (
    <View style={{
      backgroundColor:'white',
      height: 100,
      padding: 10,
      borderRadius:"30%",
      width:"70%",
      padding: 1,
      marginLeft: 15,
      marginRight: 25, }}>
    <View style={{
        flexDirection:"row",
        flex:1,
        borderRadius:"42%"
    }}>

        <View style={{flex:1, borderRadius:"30%"}}>

            <Image
            style={{
                width: 100,
                height: 100,
                borderRadius:"30%" 
  
            }}
            source={item.image}
            />
        </View>
        
        <View style={{flex:1, borderRadius:"5%",marginLeft:"5%",marginTop:"10%"}}>
        <Text style={{fontSize:"13%"}}>{item.title}</Text>
        <Text style={{fontSize:"13%",marginTop:"5%",color:"#3C5B98",textDecorationLine:"underline"}}  onPress={() =>navigation.navigate('Event_Screen')} >View More</Text>
        </View>

    </View>
  </View>
  ), []);
  



        return (
          <View style={{flex: 1 ,marginTop:"3%"}}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
            <Carousel
          layout="default"
          ref={ref}
          data={carouselItems}
          sliderWidth={300}
          itemWidth={300}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
            </View>
          </View>
        );
 
}
