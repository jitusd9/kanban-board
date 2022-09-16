import { css , keyframes} from "styled-components"

const RGB = keyframes`
  from{
    backdrop-filter: hue-rotate(0deg);
  }
  to{
    backdrop-filter: hue-rotate(360deg);
  }
`

const BlueGrad = css`
  ${'' /* linear-gradient(#4f2cc1 80%, #8e6bff); */}
  linear-gradient(darkturquoise 80%, darkcyan  );
`

const DarkGradient = css`
    background-color:hsla(0,100%,50%,1);
    background-image: linear-gradient( #232429 70%, hsl(165,95%,10%));
    background-attachment: fixed;
    animation: ${RGB} 3s infinite ease;
`

export const dark = {
  scheme : 'dark',
  fg: '#f9f9f9',
  bg : '#27282d',
  headerBg : '#3d4751',
  headerFg : '#aaa',
  boardBg : '#3a3a3a',
  boardBorder : '#3f3f3f',
  cardBg : '#85879c',
  cardFg : '#fff',
  titleBg : '#5f626e',
  titleFg : '#e3e3e3',
  borderColor : '#333',
  dialogBg : '#dfe8fd',
  dialogFg : '#36374a',
  hoverFg : '#232425',
  hoverBg : '#f9f9f9',
  scrollThumb : "#686868",
  blueGrad : BlueGrad,
  formBg : '#393d45',
  formFg : '#e9e9e9',
}

const MessGradient = css`
    background-color:hsla(0,100%,50%,1);
    background-image:
    radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%),
    radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%),
    radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),
    radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%);

    background-attachment: fixed;
`

export const light = {
  scheme : 'light',
  fg: '#222',
  bg : MessGradient,
  headerBg : '#f9f9f9',
  headerFg : '#222',
  boardBg : '#f9f9f9',
  boardBorder : '#f0f0f0',
  cardBg : '#fff',
  cardFg : '#000',
  titleFg : '#000',
  titleBg : '#f9f9f9',
  borderColor : '#e3e3e3',
  dialogBg : '#4f5962',
  dialogFg : '#f9f9f9',
  hoverFg : '#f9f9f9',
  hoverBg : '#3a3c43',
  scrollThumb : "#c1c1c1",
  blueGrad : BlueGrad,
  formBg : '#f9f9f9',
  formFg : '#222',
}