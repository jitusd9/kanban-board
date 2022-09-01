import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: ${(props) => props.theme.bg};

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
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
  display: flex;
  justify-content: center;
  min-width: 320px;
  min-height: 100vh;
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

`

