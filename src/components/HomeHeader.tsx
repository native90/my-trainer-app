import React from 'react';
import useAuthStore from '@/store/authStore';
import {Text, View} from 'eternative';

const HomeHeader = () => {
  const name = useAuthStore(state => state.name);
  return (
    <View styleName="p-4">
      <Text styleName="text-zinc-600">Bienvenido</Text>
      <Text styleName="font-bold text-lg">{name || 'Friend'}</Text>
    </View>
  );
};

export default HomeHeader;
