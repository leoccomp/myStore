import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import px2vw from '../utils/px2vw';

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: none;
      font-family: Montserrat;
  }

  :root {
    font-size: ${px2vw(24)};
    --white: #fff;
    --black: #000000;
    --gray: #666666;
    --dark-gray: #2c2c2c;
    --medium-gray: #373737;
    --light-gray: #dddddd;
    --green: #0d730d;

    @media (min-width: 768px) {
      font-size: ${px2vw(18)};
    }

    @media (min-width: 1024px) {
      font-size: ${px2vw(16)};
    }
  }

  body{
    background: #F9F9F9;

    -webkit-font-smoothing: antialiased;
  }

  button{
    cursor: pointer;
  }
`;
