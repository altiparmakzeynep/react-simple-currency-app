import React, { Component } from 'react';
import {StyleSheet,Text, View, TextInput} from 'react-native';
// import InputNumber from 'react-input-number';
import axios from 'axios';

class Converter extends Component{
    constructor(props){
        
        super(props);

        this.state = {
            try:"",
            usd:"",
            cad:"",
            jpy:"",
            eur:"",
            input:"",
            rates:[]
        }
    }
    debugger;

    componentDidMount(){
      

        axios.get('http://data.fixer.io/api/latest?access_key=964e769489a77bf7c93e5b48288fe05d&symbols=EUR,TRY,CAD,JPY,USD').then(response=> {
            console.log(response);
            const rates = response.data.rates;
            console.log(rates);
            this.setState({
                rates:rates
              
            })
        })

    }
    render(){
        return(
            <View style={styles.converter}>
              <TextInput style={styles.input} placeholder="Enter EUR Value"
                         onChangeText={(text) =>{
                            // keyboardType='numeric';
                            const money = parseFloat(text);
                          
                             this.setState({
                                 input:text,
                            
                                 tl: (money*(this.state.rates['TRY'])),
                                 usd: (money*this.state.rates['USD']),
                                 cad: (money*this.state.rates['CAD']),
                                 jpy: (money*this.state.rates['JPY']),
                                 eur: (money*this.state.rates['EUR'])
                             })

                         }}
                        //  value={this.state.input}
              ></TextInput>
              <Text style={styles.textStyle}>TRY: {this.state.tl}</Text>
              <Text style={styles.textStyle}>USD: {this.state.usd}</Text>
              <Text style={styles.textStyle}>CAD: {this.state.cad}</Text>
              <Text style={styles.textStyle}>JPY: {this.state.jpy}</Text>
              <Text style={styles.textStyle}>EUR: {this.state.eur}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    converter:{
        paddingTop:30,
        justifyContent:"center",
        alignItems:"center"

    },
    input:{
        paddingBottom:10

    },
    textStyle:{
        padding:20,
        fontWeight:"bold",
        fontSize:20,
       
        

    }

});

export default Converter;