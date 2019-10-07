import React, {Component} from 'react'
import { Text, View, StyleSheet,TextInput,CheckBox, TouchableOpacity, FlatList} from 'react-native'
import { objectExpression } from '@babel/types'

export default class App extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      text:'',
      label:'Ketikkan data yang akan di tambah',
      todos: [{id:1, item:'work'},{id:2, item:'swim'},{id:3, item:'study'},{id:4, item:'sleep'},{id:5, item:'run'}],
      button: 'Add'
    }
  }

  render(){
    
//map
  return(
  
      <View style={style.container}>
          <View>
            {this.state.todos.map((todo)=>
              {
                return (
                < View style={{flex:1, flexDirection:'row', paddingTop:30}} >
                <Text style={style.item} key={todo.id}>{todo.item}</Text>
                </ View>
                )
              }
              )}
          </View>
      </View>
    )

  }
}

const style = StyleSheet.create({
  container: {
    padding : 2,
  },
  item: {
    color: 'grey',
    borderBottomColor: 'black',
    borderBottomWidth: 2,   
    width :220,
    height:27
  }
})