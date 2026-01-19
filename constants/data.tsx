import Cross from '@/components/icons/(stack)/Cross'
import Edit from '@/components/icons/(stack)/Edit'
import Plus2 from '@/components/icons/(stack)/Plus2'
import Tick from '@/components/icons/(stack)/Tick'
import { I_StackItemNotifications } from '@/types'

export const STACK_ITEM_NOTIFICATIONS_DATA: Record<
  string,
  I_StackItemNotifications[]
> = {
  'Today, Apr 09, 2020': [
    {
      Svg: <Cross />,
      message: 'Invoice **"2020.0005.3381" marked as** Cancelled.',
      date: 'Apr 09, 2020 18:23',
    },
    {
      Svg: <Plus2 />,
      message: 'New invoice **"2020.0005.3381" added to the project**.',
      date: 'Apr 09, 2020 18:23',
    },
    {
      Svg: <Edit />,
      message: 'A new note was added to the project **Corona Voucher system**.',
      date: 'Apr 09, 2020 18:23',
    },
    {
      Svg: <Tick />,
      message:
        'Status changed from **Concept to Closed** for the project **1Language Contact Portal**.',
      date: 'Apr 09, 2020 18:23',
    },
  ],
  'Today, Apr 08, 2020': [
    {
      Svg: <Cross />,
      message: 'Invoice **"2020.0005.3381" marked as** Cancelled.',
      date: 'Apr 09, 2020 18:23',
    },
    {
      Svg: <Plus2 />,
      message: 'New invoice **"2020.0005.3381" added to the project**.',
      date: 'Apr 09, 2020 18:23',
    },
    {
      Svg: <Edit />,
      message: 'A new note was added to the project **Corona Voucher system**.',
      date: 'Apr 09, 2020 18:23',
    },
    {
      Svg: <Tick />,
      message:
        'Status changed from **Concept to Closed** for the project **1Language Contact Portal**.',
      date: 'Apr 09, 2020 18:23',
    },
  ],
}
