import { DarkSplashIcon, LightSplashIcon } from './icons'

export const themes = {
  light: {
    splashBackground: '#FFF',
    splashIcon: LightSplashIcon,
    bgButton: {
      primary: '#150AE9',
      secondary: '#1A1F35',
      danger: '#E62043',
      outline: '#FFFFFF00',
    },
    borderButton: '#BEBFC3',
    textButton: {
      primary: '#150AE9',
      secondary: '#3B4356',
      default: '#FFF',
    },

    title: '#111',
    bg: '#FFF',
  },
  dark: {
    splashBackground: '#111',
    splashIcon: DarkSplashIcon,
    bgButton: {
      primary: '#787A7A',
      secondary: '#787A7A',
      danger: '#787A7A',
      outline: '#2F3030',
    },
    borderButton: '#FFFFFF00',
    textButton: {
      primary: '#FFF',
      secondary: '#FFF',
      default: '#FFF',
    },

    title: '#FFF',
    bg: '#111',
  },
}
