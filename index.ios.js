/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
AlertIOS,
} from 'react-native';
//Es6写法
//Es5写法

var DTouchableDemo = React.createClass({
  getInitialState(){
    return{
      title:'不透明触摸'
    }
  },

  render() {
    return (
        <View style={styles.container} onPress={this.renderPrss()}>
          <TouchableOpacity
              activeOpactity={0.5}
                onPress={()=>this.activeEvent('点击')}
                onPressIn={()=>this.activeEvent('按下')}
                onPressOut={()=>this.activeEvent('抬起')}
              onLongPress={()=>this.activeEvent('长按')}

              
              >
            <Text>点击事件</Text>
          </TouchableOpacity>

          <View><Text>{this.state.title}</Text></View>
        </View>

    );
  },

  //当按下鼠标的时候
  renderPrss(){
    //AlertIOS.alert('点点点');
  },
  activeEvent(event){
    this.setState({
      title:event
    });
  }

});


var TouchableHighlightDemo =React.createClass({
  render(){

    return(
        <View style={styles.container} >
          <TouchableHighlight
              underlayColor='blue'
              activeOpacity={0.5}
              >
            <Text style={{width:100,height:40,backgroundColor:'red' , color:'black'}}>我是button</Text>
            </TouchableHighlight>
        </View>

    );
  }

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },


});

AppRegistry.registerComponent('ETouchable', () => DTouchableDemo);
