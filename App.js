import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'

export default class App extends Component{
  render(){
    const todos = ['work','swim','study','sleep','run']

  
//map
  return(
      <View style={style.container}>
       {todos.map((todo)=>{return(<Text style={style.item}>{todo}</Text>)})}
      </View>
    )

  }
}

const style = StyleSheet.create({
  container: {
    padding : 15,
    marginTop: 4
  },
  item: {
    color: 'grey',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    paddingBottom: 3,
    paddingTop: 3
  }
})