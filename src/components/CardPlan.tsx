import {Text, TouchableOpacity, View, styleNameTo} from 'eternative';
import React from 'react';
import HeroCardImage from './HeroCardImage';
import RightIcon from '@/assets/icons/RightIcon';
import {ImageSourcePropType} from 'react-native';

interface CardPlanProps {
  title: string;
  source: ImageSourcePropType;
}

const CardPlan = ({title, source}: CardPlanProps) => {
  return (
    <View styleName="w-80 border border-zinc-300 rounded-xl overflow-hidden mr-4">
      <HeroCardImage styleName="rounded-t-xl h-52" source={source}>
        <Text styleName="text-white text-3xl font-bold">{title}</Text>
      </HeroCardImage>

      <View styleName="py-4 px-3 gap-3">
        <Text styleName="text-zinc-800">
          ¡Bienvenido a My Trainer, un nuevo comienzo! Este programa está
          diseñado para ti, que quieres entrenar pero no sabes cómo, te vamos a
          preparar para que eleves tu físico al máximo.
        </Text>
        <TouchableOpacity styleName="flex items-center gap-1">
          <Text styleName="font-bold">Ver Más</Text>
          <RightIcon width={15} height={15} style={styleNameTo('text-black')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardPlan;
