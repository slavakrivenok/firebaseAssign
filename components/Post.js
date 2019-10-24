import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {postJokes} from '../actions'
import {connect} from 'react-redux'

class Post extends Component {

  state={
    title:"",
    content:""
  }

submit = () => {
this.props.postJokes(this.state.title, this.state.content)
this.setState({ //make field empty after submit
 
  content:''
})
this.props.navigation.navigate('Jokes') // after submit go to this page
}

render() {
return(
    <View style={styles.container}>
        <Text style={styles.title}>Submit Your Favourite Joke</Text>
          <TextInput style={styles.texty} placeholder="Place Joke Here" onChangeText={content => this.setState({content})} value={this.state.content} />
    <View>
    <Button style={styles.submito} style={styles.h1}  title="Submit" onPress={this.submit} />
    </View>
    </View>
);

}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1F1F1F',
      padding: 30,
      justifyContent: 'center',
    },

    texty: {
      marginTop: 20, 
      height: 150, 
      borderColor: 'gray', 
      borderWidth: 1,
      borderRadius: 15,
      textAlign: 'center',
      backgroundColor: 'white',
    },

    submito: {
     

    },

    title: {
      textAlign: "center",
      fontSize: 30,
      color: 'white',
    }
  });

  
export default connect(null, {postJokes})(Post);