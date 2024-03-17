import {Text, TouchableOpacity, View, styleNameTo} from 'eternative';
import React from 'react';
import HeroCardImage from './HeroCardImage';
import RightIcon from '@/assets/icons/RightIcon';

const CardSupscription = () => {
  const source1 = {
    uri: 'https://storage.hewox.com/wp-content/uploads/2024/03/pexels-photo-6740305.webp',
  };
  return (
    <View styleName="">
      <View styleName="w-full h-72">
        <HeroCardImage source={source1}>
          <TouchableOpacity styleName="bg-white rounded-full items-center py-3 px-6">
            <Text styleName="text-black font-medium">Suscribirme</Text>
          </TouchableOpacity>
        </HeroCardImage>
      </View>
      <View styleName="py-3 px-4 gap-3">
        <Text styleName="font-bold">La primera semana es 100% GRATIS.</Text>
        <Text styleName="text-black">
          Puedes cancelar en cualquier momento y no habrá cobro a tu tarjeta.
        </Text>
        <Text styleName="text-black">
          Con tu suscripción accede a todos nuestros programas de entrenamiento
        </Text>
        <TouchableOpacity styleName="flex items-center gap-1">
          <Text styleName="font-bold">Ver Más</Text>
          <RightIcon width={15} height={15} style={styleNameTo('text-black')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardSupscription;
