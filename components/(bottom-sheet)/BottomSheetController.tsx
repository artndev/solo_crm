import { useGradualAnimation } from '@/hooks/useGradualAnimation'
import { I_BottomSheetController } from '@/types'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import React, { useImperativeHandle, useRef } from 'react'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const BottomSheetController = ({
  keyboardHeight = 0,
  className,
  ref,
  children,
  ...props
}: I_BottomSheetController) => {
  const insets = useSafeAreaInsets()
  const { height } = useGradualAnimation()

  const bottomSheetRef = useRef<BottomSheet>(null)

  useImperativeHandle(ref, () => {
    return {
      unfold: () => bottomSheetRef.current?.expand(),
      fold: () => bottomSheetRef.current?.close(),
    }
  }, [])

  const animatedStyle = useAnimatedStyle(() => {
    console.log(height.value)
    return {
      height: height.value,
    }
  }, [])

  return (
    <BottomSheet
      topInset={insets.top}
      index={-1}
      ref={bottomSheetRef}
      handleStyle={{ display: 'none' }}
      keyboardBehavior="interactive"
      keyboardBlurBehavior="restore"
      enableDynamicSizing
      // onChange={index => {
      //   if (index >= 1) {
      //     return
      //   }
      //
      //   bottomSheetRef.current?.close()
      // }}
      {...props}
    >
      <BottomSheetView
        className={className}
        style={{
          paddingBottom: insets.bottom,
        }}
      >
        <React.Fragment>{children}</React.Fragment>

        <Animated.View style={animatedStyle} />
      </BottomSheetView>
    </BottomSheet>
  )
}

export default BottomSheetController
