import React from 'react';
import { TextInput,StyleSheet, Dimensions } from 'react-native';
const {width,height}=Dimensions.get('window')
const Input = (props) => (
  
    <TextInput
    keyboardType={props.keyboardType}
    placeholder={props.placeholder}
    secureTextEntry={props.secureTextEntry} 
    style={[styles.inputStyle,{
      marginBottom:15 
    }]}
    value={props.value}
    onChangeText={(value)=>props.onChangeText(value)}
    
    >
    </TextInput>
  
);
const styles=StyleSheet.create({
 inputStyle:{
  width:width*0.8,
  height:height*0.08,
  backgroundColor:'#ededed',
  borderWidth:0.5,
  borderColor:'gray',
  borderRadius:10,
  padding:10,
}
});

export default Input;
