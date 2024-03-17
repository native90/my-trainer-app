import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function HeartIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}>
      <Path
        fill="currentColor"
        d="M240 94c0 70-103.79 126.66-108.21 129a8 8 0 01-7.58 0C119.79 220.66 16 164 16 94a62.07 62.07 0 0162-62c20.65 0 38.73 8.88 50 23.89C139.27 40.88 157.35 32 178 32a62.07 62.07 0 0162 62"
      />
    </Svg>
  );
}

export default HeartIcon;