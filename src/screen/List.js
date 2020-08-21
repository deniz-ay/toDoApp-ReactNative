import React, { useState, version,useEffect } from 'react';
import { Text, View, SafeAreaView, FlatList,StyleSheet, Dimensions,KeyboardAvoidingView,StatusBar } from 'react-native';
import Input from '../components/input';
import Button from '../components/Button';
const {width,height}=Dimensions.get('window')


const List = (props) => {


  const [data,setData]=useState([
        
  ])
  React.useEffect(() => {
    console.log('geldi kanka',props.route.params?.obj);
    if(props.route.params?.obj){
       let array=data.slice();
       array.push(props.route.params?.obj);
       setData(array);
       console.log(data.length)
    } ;
    
     }, [props.route.params?.obj]);

const renderItem = ({item}) =>(
    <View style={styles.item}>
      <Text style= { styles.title}>{item.title}</Text>
      <Text style= {styles.dsc}>{item.dsc}</Text>
    </View>
);

  return(
  
  <SafeAreaView  style={{flex:1,backgroundColor:'#20232A'}} >
     
     <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{flex:1}}
    >
 <FlatList
  data={data}
  renderItem={renderItem}
  keyExtractor={item=>item.title}
  ItemSeparatorComponent={()=>{
    return(
      <View style={{alignItems:'center',justifyContent:'center',marginBottom:'2%'}}>
      <View style={{width:'85%',height:1,backgroundColor:'#f79e04',}}>
    </View>
    </View>
    )
  }}
  ListEmptyComponent={()=>{
    return(
      <View style={{alignItems:'center',paddingTop:'10%',height:350}}>
        <Text style={{color:'#61DAFB',fontSize:18,marginBottom:'10%'}}>Listeniz Boş !!</Text>
        <Button 
        text={'Add Item'}
        onPress={()=>props.navigation.navigate('addList')}/>
      </View>
      
    )
    
  }}
  />
  
  </KeyboardAvoidingView>
  </SafeAreaView>
);
}
const styles = StyleSheet.create({
  addItemView:{
    flex:1,
    alignItems:'center',
    paddingTop:'5%',
    marginTop:20
  },
  item:{
    marginLeft:10,
  borderLeftWidth:5,
  borderTopLeftRadius:10,
  borderBottomLeftRadius:10,
    borderColor:'#61DAFB',
    marginBottom:5,
    height:height*0.10,
    alignItems:'center',
    justifyContent:'center'
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
    color:'#FFFFFF'
  },
  dsc:{
     fontSize:16, 
     color:'#868686'
  }

})

export default List;
 