import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainBox}>

           <View style={styles.topSection}>
                <View style={styles.profileImage}></View>
           </View>

           <View style={styles.midSection}></View>

           <View style={styles.bottomSection}>

                <View style={styles.boxedItem}>
                    <View style={styles.innerBox}></View>
                </View>

                <View style={styles.boxedItem}>
                    <View style={styles.innerBox}></View>
                </View>

                <View style={styles.boxedItem}>
                    <View style={styles.innerBox}></View>
                </View>

                <View style={styles.boxedItem}>
                   <View style={styles.innerBox}></View>
                </View>
           </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainBox: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#ff99ff'
  },
  topSection: {
      height: '45%',
      backgroundColor: '#0080ff',
      justifyContent: 'center',
      alignItems: 'center'
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 100,
    backgroundColor: '#99ffcc'
  },
  midSection: {
    height: '10%',
    backgroundColor: '#330000'
},
bottomSection: {
  height: '45%',
  backgroundColor: '#0d3300',
  padding: 5,
  flexDirection: 'row',
  flexWrap: 'wrap'
},
boxedItem:{
   width: '50%',
   height: '50%',
   padding: 5,
   
},
innerBox: {
  flex: 1,
  backgroundColor: '#ffcc66'
}

});
