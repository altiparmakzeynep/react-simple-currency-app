import React,{Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './src/components/Header';
import Converter from './src/components/Converter';

class App extends Component{
  render(){
    return(
      <View style={styles.container}>
       <Header header="Currency Converter"></Header>
       <Converter></Converter>
      </View>
  
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#F2F0F2"

  }

});

export default App;
