/* eslint-disable @typescript-eslint/no-unused-vars */
import BackIcon from '@/assets/icons/BackIcon';
import {Text, TouchableOpacity, View} from 'eternative';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

interface HeaderBackProps {
  title?: string;
  position?: 'start' | 'center' | 'end';
}

const HeaderBack = ({title, position = 'start'}: HeaderBackProps) => {
  const navigation = useNavigation();
  const centerStyle = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
  };

  return (
    <View styleName="flex items-center justify-between px-3 pb-3 pt-3 relative">
      <View styleName="absolute inset-0 justify-center px-2 z-10">
        <TouchableOpacity onPress={() => navigation.goBack()} styleName="px-2">
          <BackIcon width={20} height={20} />
        </TouchableOpacity>
      </View>
      <View
        styleName={`flex flex-1 items-center px-5 ${centerStyle[position]}`}>
        <Text styleName="font-medium text-zinc-600 text-lg">{title}</Text>
      </View>
    </View>
  );
};

export default HeaderBack;
