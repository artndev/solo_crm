import { calculateRegion } from '@/lib/map'
import { useLocationStore } from '@/store'
import { View } from 'react-native'
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps'

const Map = () => {
  const {
    userLongitude,
    userLatitude,
    destinationLatitude,
    destinationLongitude,
  } = useLocationStore()

  const region = calculateRegion({
    userLongitude,
    userLatitude,
    destinationLatitude,
    destinationLongitude,
  })

  return (
    <View className="size-full rounded-2xl overflow-hidden">
      <MapView
        provider={PROVIDER_DEFAULT}
        className="size-full"
        tintColor="black"
        mapType="mutedStandard"
        showsPointsOfInterest={false}
        initialRegion={region}
        showsUserLocation={true}
        userInterfaceStyle="light"
      >
        <View className="size-full" />
      </MapView>
    </View>
  )
}

export default Map
