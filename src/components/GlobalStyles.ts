/**
 * @name react-coming
 * @author cyntler <damian@cyntler.com>
 */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  html {
    font-size: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #fff;
    text-align: center;
    font-family: 'Merriweather', serif;
  }
`;
