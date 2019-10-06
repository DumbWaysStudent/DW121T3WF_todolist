import React, {Component} from 'react'
import { Text, View, StyleSheet,TextInput,Button, FlatList} from 'react-native'

export default class App extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      text:'',
      carss: [{id:1, item:'work'},{id:2, item:'swim'},{id:3, item:'study'},{id:4, item:'sleep'},{id:5, item:'run'}] 
    }
  }



  render(){
    
//map
  return(
  
      <View style={style.container}>
       <View >
        <TextInput style={style.textfield} placeholder="Ketikkan data yang akan di tambah" onChangeText={(text)=>this.setState({text})} value={this.state.text} />
       <Button title="Add" onPress={()=>{ this.setState({ carrs: this.state.carss.push({id : this.state.carss.length + 1 , item: this.state.text}), text: this.state.text='' }) }} />    
       </View>
        <Text>{this.state.text}</Text>
        {this.state.carss.map((car)=>
          {
            return (
            <>
            <Text style={style.item} key={car.id}>{car.id}{car.item}</Text>
            <Button title="Delete" onPress={()=>{ this.setState({ carrs: this.state.carss.splice(this.state.carss.indexOf(car), 1) }) }}/>
            </>
            )
          }
          )}
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
    color: 'grey',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    paddingBottom: 3,
    paddingTop: 3
  },
  textfield: {
    height: 35,
    borderColor: 'black',
    borderWidth: 2
  },
  pullSide : {
    flex:1,
    flexDirection:'column'
  }
})