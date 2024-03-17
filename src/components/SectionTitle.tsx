import {Text} from 'eternative';
import React from 'react';

interface SectionTitleProps {
  children: string;
  styleName?: string;
}

const SectionTitle = ({children, styleName}: SectionTitleProps) => {
  return (
    <Text styleName={`font-bold text-lg mt-8 mb-4 ${styleName}`}>
      {children}
    </Text>
  );
};

export default SectionTitle;
