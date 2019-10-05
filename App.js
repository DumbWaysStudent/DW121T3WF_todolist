import React, {Component} from 'react'
import { Text, View, StyleSheet,TextInput,Button, FlatList} from 'react-native'

export default class App extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      text:'',
      carss: ['work','swim','study','sleep','run'] 
    }
  }

  render(){
    
//map
  return(
  
      <View style={style.container}>
       <View >
        <TextInput style={style.textfield} placeholder="Ketikkan data yang akan di tambah" onChangeText={(text)=>this.setState({text})} value={this.state.text} />
       <Button title="Add" onPress={()=>this.setState({ carrs : this.state.carss.push(this.state.text), text:'' })} />    
       </View>
        <Text>{this.state.text}</Text>
        {this.state.carss.map((car)=>{
          return(
            <>
              <Text style={style.item}>{car}</Text>
              <Button title="delete" onPress={()=>this.setState({ carrs : this.state.carss.splice(this.state.carss.indexOf({car}),1) })} /> 
            </>
            )
        })}
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