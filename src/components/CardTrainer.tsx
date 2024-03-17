import {Image, Text, TouchableOpacity, View, styleNameTo} from 'eternative';
import React from 'react';
import RightIcon from '@/assets/icons/RightIcon';
import {ImageSourcePropType} from 'react-native';

interface CardTrainerProps {
  name: string;
  source: ImageSourcePropType;
}

const CardTrainer = ({name, source}: CardTrainerProps) => {
  return (
    <View styleName="w-full border border-zinc-300 rounded-xl overflow-hidden">
      <Image
        styleName="rounded-t-xl overflow-hidden h-52 w-full object-cover"
        source={source}
      />
      <View styleName="py-4 px-3 gap-3 bg-zinc-800 flex items-center justify-between">
        <View styleName="gap-2">
          <Text styleName="font-bold text-xl text-white">{name}</Text>
          <Text styleName="text-white">Disciplina, hábitos, crecimiento.</Text>
        </View>
        <TouchableOpacity styleName="flex items-center gap-1">
          <RightIcon width={40} height={40} style={styleNameTo('text-white')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardTrainer;
