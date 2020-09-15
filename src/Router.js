import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import List from '../src/screen/List'
import addList from '../src/screen/addList'
import updateList from '../src/screen/updateList'
import { TouchableOpacity } from 'react-native-gesture-handler';
const Stack = createStackNavigator();

function Router() {
  return (

    <NavigationContainer>
      <StatusBar
      barStyle='light-content'
      />
      <Stack.Navigator>
        <Stack.Screen 
        name="List" 
        component={List}
        options={({ navigation, route }) => ({
          title: 'List',
          headerStyle: {
            backgroundColor: '#20232A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
           <TouchableOpacity 
           style={{width:50,height:40,alignItems:'center',justifyContent:'center'}}
           onPress={()=>navigation.navigate('addList')}
           >
             <Text style={{fontSize:40,color:'#61DAFB'}}>+</Text>
           </TouchableOpacity>
          ),
        })}
        />
        <Stack.Screen 
        name="addList" 
        component={addList}
        options={{
          title: 'Add Item',
          headerStyle: {
            backgroundColor: '#20232A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />

      <Stack.Screen 
        name="updateList" 
        component={updateList}
        options={{
          title: 'Update Item',
          headerStyle: {
            backgroundColor: '#20232A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;