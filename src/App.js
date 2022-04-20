import React from 'react';
import { View } from 'react-native'
import { Approutees } from './routes/app.routees';
import { StatusBar } from 'react-native';



export default function App() {
  return (
    <View style={{flex:1,backgroundColor:'#161824' }}>
      <StatusBar
       backgroundColor = "#161824"
      ></StatusBar>
      <Approutees></Approutees>
    </View>
  );
}