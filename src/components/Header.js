import React, { Component } from 'react';
import {StyleSheet,Text, View} from 'react-native';

class Header extends Component{
    render(){
        return(
         <View style={styles.header}>
            <Text style={styles.headerText}>{this.props.header}</Text>
          </View>
        )
    }
}
const styles = StyleSheet.create({
    header:{
      height:60,
      paddingTop:10,
      shadowColor:"#000",
      shadowOffset:{width:0,height:2},
      shadowOpacity:0.5,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#1E5088"
    },
    headerText:{
      color:"#fff",
      fontSize:30,
      textAlign:"center"
    }
  });
  
  export default Header;