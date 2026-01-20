import { I_useDebounce } from '@/types'
import { useEffect, useState } from 'react'

export const useDebounce = <T>({ value, delay }: I_useDebounce<T>) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}
