import React from 'react';
import { Text,TouchableOpacity,Dimensions,Platform } from 'react-native';
const {width,height}=Dimensions.get('window');
const Button = (props) => (
    <TouchableOpacity 
    
    onPress= {props.onPress}
     style={{
      width:width*0.80,
      height:height*0.08,
      backgroundColor:'#4495cb',
      alignItems:'center',
       justifyContent:'center',
       borderRadius:10
      }}>
      <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}> {props.text} </Text>
    </TouchableOpacity> 
);

export default Button;
