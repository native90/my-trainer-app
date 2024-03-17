import {Image, View} from 'eternative';
import React, {ReactNode} from 'react';
import {ImageSourcePropType} from 'react-native';

interface HeroCardImage {
  styleName?: string;
  source: ImageSourcePropType;
  children: ReactNode;
}

const HeroCardImage = ({children, source, styleName = ''}: any) => {
  return (
    <View styleName={`overflow-hidden ${styleName}`}>
      <View styleName="bg-zinc-500 w-full h-full relative">
        <Image styleName="w-full h-full object-cover" source={source} />
        <View styleName="absolute inset-0 bg-black opacity-40" />
        <View styleName="absolute inset-0 items-center justify-center">
          {children}
        </View>
      </View>
    </View>
  );
};

export default HeroCardImage;
