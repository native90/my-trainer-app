import React from 'react';
import {Text, View} from 'eternative';

interface AvatarProps {
  name: string;
}

const Avatar = ({name}: AvatarProps) => {
  const initials = name.substring(0, 2);
  return (
    <View styleName="flex size-20 bg-zinc-200 just-center rounded-full">
      <Text styleName="text-slate-900 text-2xl uppercase">{initials}</Text>
    </View>
  );
};

export default Avatar;
