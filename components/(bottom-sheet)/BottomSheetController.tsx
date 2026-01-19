import { I_BottomSheetController } from '@/types'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import { useImperativeHandle, useRef } from 'react'

const BottomSheetController = ({
  className,
  ref,
  children,
  ...props
}: I_BottomSheetController) => {
  const bottomSheetRef = useRef<BottomSheet>(null)

  useImperativeHandle(ref, () => {
    return {
      unfold: () => bottomSheetRef.current?.expand(),
      fold: () => bottomSheetRef.current?.close(),
    }
  }, [])

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[500]}
      index={-1}
      handleStyle={{ display: 'none' }}
      // enablePanDownToClose
      enableContentPanningGesture={false}
      enableHandlePanningGesture={false}
      // onChange={index => {
      //   if (index >= 1) {
      //     return
      //   }
      //
      //   bottomSheetRef.current?.close()
      // }}
      {...props}
    >
      <BottomSheetView className={className}>{children}</BottomSheetView>
    </BottomSheet>
  )
}

export default BottomSheetController
