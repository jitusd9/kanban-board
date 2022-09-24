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

const navbarBg = css`
  background-color:#ff99ee;
  background-image:
  radial-gradient(at 7% 49%, hsla(148,87%,68%,1) 0px, transparent 50%),
  radial-gradient(at 72% 55%, hsla(359,89%,66%,1) 0px, transparent 50%),
  radial-gradient(at 73% 67%, hsla(256,79%,66%,1) 0px, transparent 50%),
  radial-gradient(at 74% 83%, hsla(291,82%,68%,1) 0px, transparent 50%),
  radial-gradient(at 45% 32%, hsla(188,70%,64%,1) 0px, transparent 50%),
  radial-gradient(at 5% 63%, hsla(231,84%,73%,1) 0px, transparent 50%),
  radial-gradient(at 16% 2%, hsla(97,65%,65%,1) 0px, transparent 50%);
`


export const dark = {
  scheme : 'dark',
  fg: '#f9f9f9',
  bg : '#141414',
  headerBg : '#3d4751',
  headerFg : '#aaa',
  monitorShade: '0 0 50px rgba(75,75,125,0.7)',
  svgStroke: '#fff',
  navbarBg,
  navGrad : 'linear-gradient(45deg,#08b17a,hsl(212deg 92% 20%))',
  navGrad : 'linear-gradient(45deg,hsl(160deg 89% 4% / 90%),hsl(212deg 92% 20% / 93%))',
  boardBg : '#151515',
  boardBorder : '#2d2d2d',
  cardBg : '#000',
  cardFg : '#fff',
  cardShadow: '#000',
  titleBg : '#1f1f1f',
  titleFg : '#bbb',
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
  navbarBg,
  navGrad : 'linear-gradient(45deg,#08b17aed,hsl(212deg 92% 20% / 93%))',
  headerBg : '#f9f9f9',
  headerFg : '#222',
  monitorShade: '0 0 50px rgba(0,0,0,0.7)',
  svgStroke: '#000',
  boardBg : '#f9f9f9',
  boardBorder : '#f0f0f0',
  cardBg : '#fff',
  cardFg : '#000',
  cardShadow: '#4f616d33',
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