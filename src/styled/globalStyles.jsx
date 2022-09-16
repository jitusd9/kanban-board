import { createGlobalStyle, css } from "styled-components";


export const GlobalStyles = createGlobalStyle`

:root {
  font-family: 'Nunito', sans-serif ;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;  
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  scrollbar-width: none;
}



a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  overflow-x : hidden;
  color-scheme: ${(props) => props.theme.scheme };
  color: rgba(255, 255, 255, 0.87);
  background-color: ${(props) => props.theme.bg};
}

h1 {
  font-size: 2.5em;
  line-height: 1.1;
}

button {
  border: 1px solid transparent;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.25s;
}

#root {
  margin: 0 auto;
  padding: 2rem;
  text-align: center;

}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

&::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.scrollThumb};
    border-radius : 5px;
  }

`

