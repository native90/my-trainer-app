import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'eternative';
import React from 'react';
import {StatusBar} from 'react-native';
import heroImg from '@/assets/images/heroimg.jpg';

const StartScreen = ({navigation}: any) => (
  <View styleName="relative">
    <StatusBar barStyle={'light-content'} />
    <Image source={heroImg} styleName="w-full h-full object-cover" />
    <View styleName="absolute inset-0">
      <SafeAreaView styleName="flex-1 justify-end">
        <TouchableOpacity
          onPress={() => navigation.navigate('PutName')}
          styleName="bg-white rounded-full p-3 w-60 items-center mx-auto">
          <Text styleName="font-bold text-red-400 text-xl">Comenzar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  </View>
);

export default StartScreen;
