import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function HomeIcon(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.707 2.293a1 1 0 00-1.414 0l-7 7-2 2a1 1 0 101.414 1.414L4 12.414V19a3 3 0 003 3h10a3 3 0 003-3v-6.586l.293.293a1 1 0 001.414-1.414z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

export default HomeIcon;
