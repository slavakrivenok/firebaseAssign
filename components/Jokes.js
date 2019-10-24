
import React, { Component } from 'react';
import { View, Text, StyleSheet , FlatList} from 'react-native';
import {getJokes} from '../actions';
import {connect} from 'react-redux'
import _ from 'lodash';


class Jokes extends Component {
    componentDidMount(){
        this.props.getJokes()
    }

    render() {
        return (
        <View style={styles.container}>
         <Text style={styles.title}>Community Jokes</Text>
        <FlatList style={{width: '97%'}}
                data={this.props.listOfJokes}
                     keyExtractor={(item) => item.key}
                         renderItem={({item}) => {

        return(
                 <View style={styles.bubbles}>
                    <Text style={styles.bubbleText}> {item.content}</Text>
                 </View>
                            )}} />
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding:10,
        backgroundColor: '#1F1F1F',
    },

    bubbles: {
        backgroundColor: '#282828',
        margin: 15,
        borderRadius: 5,
        
    },

    bubbleText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        
    },

    title: {
        fontSize: 30,
        color: 'white',

    }
});

function mapStateToProps(state){

    const listOfJokes = _.map(state.JokesList.JokesList, (val, key) => {
        return {
            ...val,
            key:key
        }
    })

    return {
        listOfJokes 
    }
}

export default connect(mapStateToProps, {getJokes})(Jokes);
