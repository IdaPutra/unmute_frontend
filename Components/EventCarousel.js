import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView ,Image} from 'react-native';

import Carousel from 'react-native-snap-carousel';

export  class EventCarousel extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Item 1",
              text: "Text 1",
          },
          {
              title:"Item 2",
              text: "Text 2",
          },
          {
              title:"Item 3",
              text: "Text 3",
          },
          {
              title:"Item 4",
              text: "Text 4",
          },
          {
              title:"Item 5",
              text: "Text 5",
          },
        ]
      }
    }

    _renderItem({item,index}){
        return (
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
                    source={{
                        uri: 'https://img.freepik.com/free-vector/deafness-hearing-loss-abstract-concept-vector-illustration-deafness-symptoms-sudden-hearing-loss-cause-congenital-ear-problem-otolaryngologist-visit-assistance-product-abstract-metaphor_335657-4176.jpg?w=100'
                    }}
                    />
                </View>
                
                <View style={{flex:1, borderRadius:"5%",marginLeft:"5%",marginTop:"10%"}}>
                <Text style={{fontSize:"13%"}}>Hearing Loss Facts</Text>
                <Text style={{fontSize:"13%",marginTop:"25%",color:"#3C5B98",textDecorationLine:"underline"}}>View More</Text>
                </View>

            </View>
          </View>

        )
    }

    render() {
        return (
          <View style={{flex: 1 ,marginTop:"3%"}}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={10}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </View>
        );
    }
}
