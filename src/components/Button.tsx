import {Text, TouchableOpacity} from 'eternative';
import React from 'react';

const Button = ({children}: any) => {
  return (
    <TouchableOpacity styleName="bg-white rounded-full items-center py-2 px-6">
      <Text styleName="text-black font-medium">{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
