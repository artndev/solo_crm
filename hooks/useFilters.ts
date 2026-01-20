import { compareDates } from '@/lib/utils'
import { I_useFilters, StringKeys } from '@/types'
import { useMemo } from 'react'

export const useFilters = <T>({ data, targetFields }: I_useFilters<T>) => {
  const filteredData = useMemo(() => {
    if (!targetFields) {
      return []
    }

    const res = data.filter(item => {
      const entries = Object.entries(targetFields) as [
        StringKeys<T> & keyof T,
        number | string | Date,
      ][]

      const state = entries
        .filter(([_, val]) => val)
        .every(([key, val]) => {
          if (typeof val === 'number' && typeof item[key] === 'number') {
            return item[key] === val
          }

          if (typeof val === 'string' && typeof item[key] === 'string') {
            return item[key]
              .trim()
              .toLowerCase()
              .includes(val.trim().toLowerCase())
          }

          if (typeof item[key] === 'number') {
            return false
          }

          const date = new Date(item[key] as string | Date)
          if (val instanceof Date && !isNaN(date.getTime())) {
            return compareDates(date, val)
          }

          return false
        })

      if (!state) {
        return false
      }

      return true
    })

    return res.length > 0 ? res : []
  }, [data, targetFields])

  return filteredData
}
