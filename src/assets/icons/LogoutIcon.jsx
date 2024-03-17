import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function LogoutIcon(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <G
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}>
        <Path d="M14 8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h7a2 2 0 002-2v-2" />
        <Path d="M9 12h12l-3-3m0 6l3-3" />
      </G>
    </Svg>
  );
}

export default LogoutIcon;
