import {Text, View} from 'eternative';
import React from 'react';

interface CardProgressMsgProps {
  text: string;
}

const CardProgressMsg = ({text}: CardProgressMsgProps) => {
  return (
    <View styleName="border border-zinc-200 px-6 py-12 rounded-xl bg-white">
      <Text styleName="text-center text-zinc-500">{text}</Text>
    </View>
  );
};

export default CardProgressMsg;
