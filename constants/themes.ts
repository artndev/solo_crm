import DarkSplashIcon from '@/assets/images/splash-icon-dark.png'
import LightSplashIcon from '@/assets/images/splash-icon-light.png'

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
    textButton: {
      primary: '#150AE9',
      secondary: '#3B4356',
      default: '#FFF',
    },
    borderButton: '#BEBFC3',

    textInput: '#1A1F35',
    borderInput: '#E3E8ED',
    borderFocusedInput: '#150AE9',
    inputIconColor: '#3B4356',

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
    textButton: {
      primary: '#FFF',
      secondary: '#FFF',
      default: '#FFF',
    },
    borderButton: '#FFFFFF00',

    textInput: '#FFF',
    borderInput: '#787A7A',
    borderFocusedInput: '#FFF',
    inputIconColor: '#FFF',

    title: '#FFF',
    bg: '#111',
  },
}
