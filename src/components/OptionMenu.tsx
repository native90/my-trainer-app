import React from 'react';
import {Text, TouchableOpacity, View, styleNameTo} from 'eternative';
import RightIcon from '@/assets/icons/RightIcon';

interface OptionMenuProps {
  icon?: any;
  onPress?: any;
  name: string;
  rightShow?: boolean;
}

const OptionMenu = ({
  icon,
  name,
  onPress,
  rightShow = true,
}: OptionMenuProps) => {
  const Icon = icon;
  return (
    <TouchableOpacity styleName="flex items-center bg-white" onPress={onPress}>
      {icon && (
        <Icon
          width={28}
          height={28}
          style={styleNameTo('text-slate-900 ml-4')}
        />
      )}
      <View styleName="ml-2 flex items-center justify-between flex-1 py-4 border-b border-zinc-200 pr-4">
        <Text styleName="border-b-2 border-zinc-500">{name}</Text>
        {rightShow && (
          <RightIcon
            width={20}
            height={20}
            style={styleNameTo('text-slate-900')}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default OptionMenu;
