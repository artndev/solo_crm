import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs))
}

const preFormatDate = (date: Date | string): string =>
  new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })

export const compareDates = (a: Date | string, b: Date | string) =>
  new Date(a).toDateString() === new Date(b).toDateString()

export const formatDate = (date: Date | string): string => {
  const today = new Date()
  const yesterday = new Date()

  yesterday.setDate(today.getDate() - 1)

  if (compareDates(date, today)) {
    return `Today, ${preFormatDate(date)}`
  }

  if (compareDates(date, yesterday)) {
    return `Yesterday, ${preFormatDate(date)}`
  }

  return preFormatDate(date)
}
