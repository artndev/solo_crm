import Cross from '@/components/icons/(stack)/Cross'
import Edit from '@/components/icons/(stack)/Edit'
import Plus2 from '@/components/icons/(stack)/Plus2'
import Tick from '@/components/icons/(stack)/Tick'
import { I_StackItemNotifications } from '@/types'

export const DATE = new Date(2026, 1, 1).toISOString()
export const DATE_2 = new Date(2026, 1, 2).toISOString()

export const STACK_ITEM_NOTIFICATIONS_DATA: Record<
  string,
  I_StackItemNotifications[]
> = {
  [DATE]: [
    {
      Svg: <Cross />,
      message: 'Invoice **"2020.0005.3381" marked as** Cancelled.',
      date: DATE,
    },
    {
      Svg: <Plus2 />,
      message: 'New invoice **"2020.0005.3381" added to the project**.',
      date: DATE,
    },
    {
      Svg: <Edit />,
      message: 'A new note was added to the project **Corona Voucher system**.',
      date: DATE,
    },
    {
      Svg: <Tick />,
      message:
        'Status changed from **Concept to Closed** for the project **1Language Contact Portal**.',
      date: DATE,
    },
  ],
  [DATE_2]: [
    {
      Svg: <Cross />,
      message: 'Invoice **"2020.0005.3381" marked as** Cancelled.',
      date: DATE_2,
    },
    {
      Svg: <Plus2 />,
      message: 'New invoice **"2020.0005.3381" added to the project**.',
      date: DATE_2,
    },
    {
      Svg: <Edit />,
      message: 'A new note was added to the project **Corona Voucher system**.',
      date: DATE_2,
    },
    {
      Svg: <Tick />,
      message:
        'Status changed from **Concept to Closed** for the project **1Language Contact Portal**.',
      date: DATE_2,
    },
  ],
}
