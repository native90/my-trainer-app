import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SearchIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}>
      <Path
        fill="currentColor"
        d="M21.71 20.29L18 16.61A9 9 0 1016.61 18l3.68 3.68a1 1 0 001.42 0 1 1 0 000-1.39M11 18a7 7 0 117-7 7 7 0 01-7 7"
      />
    </Svg>
  );
}

export default SearchIcon;
