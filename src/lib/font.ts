import { Handjet, Press_Start_2P } from "next/font/google";

const handFont = Handjet({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-hand',
});

const pressFont = Press_Start_2P({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-press',
  weight:['400']
});


export const handFontClass = handFont.variable;
export const pressFontClass = pressFont.variable;