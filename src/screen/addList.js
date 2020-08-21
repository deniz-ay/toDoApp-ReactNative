import React,{useState} from 'react';
import { Text, View, SafeAreaView ,StyleSheet,Dimensions,} from 'react-native';
import Input from '../components/input';
import Button from '../components/Button';
const {width,height}=Dimensions.get('window')

const addList = (props) => {
    const [title,setTitle] =useState('')
    const [dsc,setDsc] =useState('')
    return (
      <SafeAreaView  style={{flex:1,backgroundColor:'#20232A'}} >
<View style={styles.addItemView}>
    <Input
    
    placeholder={'Title'}
    value={title}
    onChangeText={(value)=>setTitle(value)}

    
    />
        <Input
    
    placeholder={'Description'}
    value={dsc}
    onChangeText={(value)=>setDsc(value)}
    />
    <Button
    text={'ADD'}
    onPress={()=>{
      
   
       let obj={
         title,
         dsc,

       };
       props.navigation.navigate('List', { obj });      

    }}
    />

  </View>
  </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    addItemView:{
      flex:1,
      alignItems:'center',
      paddingTop:'5%'
    },

  })
export default addList;
