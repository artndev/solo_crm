import { useKeyboardHandler } from 'react-native-keyboard-controller'
import { useSharedValue } from 'react-native-reanimated'

export const useGradualAnimation = () => {
  const height = useSharedValue(0)

  useKeyboardHandler(
    {
      onMove: e => {
        'worklet'

        height.value = Math.floor(e.height)
      },
    },
    []
  )

  return { height }
}
