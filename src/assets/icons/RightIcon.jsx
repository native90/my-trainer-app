import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function RightIcon(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M19 12l12 12-12 12"
      />
    </Svg>
  );
}

export default RightIcon;
