import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const Dashboard = ({navigation}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 20,
        }}>
        <Text
          style={{
            fontSize: 30,
            color: 'black',
            marginTop: 16,
            fontWeight: 'bold',
          }}>
          Hello Bilal
        </Text>
        <Image
          style={{width: 60, height: 60}}
          source={require('../assets/user.png')}
        />
      </View>
      <View style={{flexDirection: 'column', margin: 20, fontSize: 150}}>
        <Text style={{fontSize: 20}}>Id</Text>
        <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
          9023234
        </Text>
        <Text style={{fontSize: 20}}>Course</Text>
        <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
          Web and App Develoment
        </Text>
        <Text style={{fontSize: 20}}>Check In Time</Text>
        <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
          ...
        </Text>
        <Text style={{fontSize: 20}}>Check Out Time</Text>
        <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
          ...
        </Text>
      </View>

      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#5c93fa',
            borderRadius: 8,
            paddingVertical: 12,
            paddingHorizontal: 22,
            marginTop: 18,
            width: '80%',
            alignItems: 'center',
          }}>
          <Text
            onPress={() => {
              navigation.navigate('Camera');
            }}
            style={{color: 'white'}}>
            Check In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;
