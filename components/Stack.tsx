import { cn } from '@/lib/utils'
import { I_Stack, T_StackItemKeys } from '@/types'
import React from 'react'
import StackItem from './(stack)/StackItem'
import StackItemNotifications from './(stack)/StackItemNotifications'
import StackItemRecent from './(stack)/StackItemRecent'
import Card from './Card'

const COMPONENT_MAP = {
  StackItem,
  StackItemRecent,
  StackItemNotifications,
}

const Stack = <T extends T_StackItemKeys>({
  stackItems,
  stackItemType,
  stackItemClassname,
  stackItemBorder = 'default',
  className,
  ...props
}: I_Stack<T>) => {
  const Component = COMPONENT_MAP[stackItemType] as React.ComponentType<any>

  return (
    <Card
      className={cn(
        'py-5',
        className,
        stackItemBorder === 'full' ? 'px-0' : 'px-5'
      )}
      {...props}
    >
      {stackItems.map((props, i) => {
        return (
          <Component
            key={i}
            className={cn(
              'border-b-input py-5',
              className,
              stackItemClassname,
              i === 0 ? 'pt-0' : '',
              i !== stackItems.length - 1 ? 'border-b' : 'pb-0',
              stackItemBorder === 'default' ? 'px-0' : 'px-5'
            )}
            {...props}
          />
        )
      })}
    </Card>
  )
}

export default Stack
