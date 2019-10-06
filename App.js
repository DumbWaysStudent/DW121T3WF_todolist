import React, {Component} from 'react'
import { Text, View, StyleSheet,TextInput,CheckBox, TouchableOpacity, FlatList} from 'react-native'

export default class App extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      text:'',
      carss: [{id:1, item:'work'},{id:2, item:'swim'},{id:3, item:'study'},{id:4, item:'sleep'},{id:5, item:'run'}],
      
    }
  }

 

  render(){
    
//map
  return(
  
      <View style={style.container}>
         <View style={{flex:1, flexDirection:'row'}}>
            <TextInput style={style.textfield} placeholder="Ketikkan data yang akan di tambah" onChangeText={(text)=>this.setState({text})} value={this.state.text} />
            <TouchableOpacity style={{ width: 50, height: 35, borderWidth: 2, alignContent:'center' }}  onPress={()=>{ this.setState({ carrs: this.state.carss.push({id : this.state.carss.length + 1 , item: this.state.text}), text: this.state.text='' }) }}><Text style={{alignContent:'center', textAlign:'center'}}>Add</Text></TouchableOpacity>    
            <Text>{this.state.text}</Text>
          </View>
          <View style={{marginTop:30}}>
            {this.state.carss.map((car)=>
              {
                return (
                < View style={{flex:1, flexDirection:'row', paddingTop:30}} >
                <Text style={style.item} key={car.id}>{car.item}</Text>
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
    width :350,
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