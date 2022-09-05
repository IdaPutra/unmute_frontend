import React, { useState, useCallback, useRef } from 'react';
import {
  Text, 
  View,
  SafeAreaView ,Image} from 'react-native';
  import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';


export  function EventCarousel() {
  const navigation = useNavigation();
  const exampleItems= [
    {
        title:"World Report On Hearing",
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
        image:require("../assets/event/fact_1_icon.png")
    },
    {
        title:"Deaf Community Impact Award",
        text: `Research indicates that one in six Australians has some form of hearing loss. Many people with hearing loss experience a drop in self-esteem and confidence because of their impaired ability to communicate with other people. Having hearing loss can also limit one’s ability to learn to speak a new language.

        Hearing loss refers to reduced hearing, which can be caused by a variety of factors. It can either be congenital or acquired later on in life. It can range from mild hearing loss to profound hearing loss.
        
        Hearing loss can affect personal and work life
        Hearing loss can affect a person in three main ways:
        
        fewer educational and job opportunities due to impaired communication
        social withdrawal due to reduced access to services and difficulties communicating with others
        emotional problems caused by a drop in self-esteem and confidence.
        There are two main types of hearing loss
        'Conductive' hearing loss is caused by obstructions or malfunctions in the outer or middle ear. It can be caused by:
        
        outer or middle ear infections and malfunctions
        a damaged ear drum
        impacted ear wax.
        'Sensorineural' hearing loss is caused by damage to the hair cells in the inner ear. It can be caused by:
        
        ageing
        exposure to loud noise, such as machinery or loud music
        diseases such as meningitis
        certain chemicals and medications, known as ototoxic medications.
        Other disorders of the ear
        Other disorders of the ear include:
        
        tinnitus – noises or ringing in the ears or head
        Meniere’s disease – symptoms may include vertigo (dizziness), tinnitus, hearing loss and nausea
        acoustic neuroma – benign tumours on the acoustic nerve.
        `,
        image:require("../assets/event/fact_2_icon.png")
    },
    {
        title:"Deaf Connect",
        text: `7 top tips for communicating with deaf people.

        Our tips for communicating with people with a hearing loss
        Always face a deaf person. Make eye contact and keep it while you are talking. Try not to look away or cover your mouth as many deaf people rely on lip reading to help them understand you.
        Check noise and lighting. Turn off or move away from background noise. Make sure your face is not in shadow and there are no strong lights or sunshine in their eyes.
        Keep your distance. Stand a metre or two away from the deaf person. This is important for hearing-aid users, lip-readers and signers.
        Speak clearly, slowly and steadily. Don’t mumble, shout or exaggerate – it distorts your lip patterns.
        Take turns. If there is more than one person in a conversation take turns to talk.
        Repeat and re-phrase if necessary. Trying to say the same thing in a different way might help.
        Write it down. Don’t be afraid to write or draw to help understanding.
        And arguably one of the most important points to remember is to keep trying – even if a deaf person does not understand what you’re saying the first few times. So many of our partners have told us that when someone says ‘oh, don’t worry. It doesn’t matter’ it feels like they mean ‘you don’t matter.’ Even if it takes four or five times of rephrasing or even writing it down, don’t give up.
        
        `,
        image:require("../assets/event/fact_3_icon.png")
    },
   
  ]

  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(exampleItems);
  const ref = useRef(null);


  const renderItem = useCallback(({ item, index }) => (
    <View style={{
      backgroundColor:'white',
      height: 100,

    
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
        <Text style={{fontSize:"13%",color:"#3C5B98",textDecorationLine:"underline"}}   onPress={() =>navigation.navigate('Loss_Screen')} >View More</Text>
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
