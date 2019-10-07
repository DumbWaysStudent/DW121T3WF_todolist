
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
      check: {},
      tampung: {},
      id_edit: 0,
      id_update: 0,
      button: 'Add'
    }
  }

  

  checkBoxCeck = (id,item)=>{
    const checkTodo = {...this.state.check}
    const checkTampung = {...this.state.tampung}
    let is_empty = true
    if(checkTodo[id]) {
      checkTodo[id] = false
      checkTampung[item] = false
    }
    else {
      checkTodo[id] = true
      checkTampung[item] = true
      
    }
    this.setState({ check: checkTodo, tampung: checkTampung })
  }

 

  render(){
    
//map
  return(
  
      <View style={style.container}>
         <View style={{flex:1, flexDirection:'row'}}>
            <TextInput style={style.textfield} placeholder={this.state.label} onChangeText={(text)=>this.setState({text})} value={this.state.text} />
            <TouchableOpacity style={{ width: 50, height: 35, borderWidth: 2, alignContent:'center' }}  onPress={()=>{ if(this.state.button == 'Add'){ this.state.todos.push({id : this.state.todos.length + 1 , item: this.state.text}), this.setState({text: this.state.text='' })} else if(this.state.button == 'update'){ this.state.todos[this.state.id_edit] = {id : this.state.todos.length + 1 , item: this.state.text}, this.setState({text:'', label:'Ketikkan data yang akan di tambah', button:'Add'})} }}><Text style={{alignContent:'center', textAlign:'center'}}>{this.state.button}</Text></TouchableOpacity>    
            <Text>{this.state.text}</Text>
          </View>
          <View style={{marginTop:30}}>
            {this.state.todos.map((todo)=>
              {
                return (
                < View style={{flex:1, flexDirection:'row', paddingTop:30}} >
                <CheckBox value={this.state.check[todo.id]} onChange={()=> {this.checkBoxCeck(todo.id,todo.item) }} />
                <Text style={style.item} key={todo.id}>{todo.item}</Text>
                <TouchableOpacity style={{ width: 50, height: 30, borderWidth: 2 }}  onPress={()=>{ this.state.todos.splice(this.state.todos.indexOf(todo), 1), this.setState({ todos: this.state.todos }) }}><Text style={{textAlign:'center'}}>Delete</Text></TouchableOpacity>
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
    padding : 5,
    marginTop: 2,
  },
  item: {
    marginTop: 3,
    color: 'grey',
    borderBottomColor: 'black',
    borderBottomWidth: 2,   
    paddingTop: 5,
    width :220,
    height:27
  },
  textfield: {
    width: 300,
    height: 35,
    borderColor: 'black',
    borderWidth: 2
  },
  pullSide : {
    flex:1,
    flexDirection:'column'
  }
})