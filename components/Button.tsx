import { cn } from '@/lib/utils'
import { ButtonProps } from '@/types/type'
import { cva } from 'class-variance-authority'
import { Text, TouchableOpacity } from 'react-native'

const bgVariants = cva('', {
  variants: {
    bgVariant: {
      primary: 'bg-[#0286FF]',
      secondary: 'bg-gray-500',
      danger: 'bg-red-500',
      success: 'bg-green-500',
      outline: 'bg-transparent border-neutral-300 border-[0.5px]',
    },
  },
  defaultVariants: {
    bgVariant: 'primary',
  },
})

const textVariants = cva('', {
  variants: {
    textVariant: {
      primary: 'text-black',
      secondary: 'text-gray-100',
      danger: 'text-red-100',
      success: 'text-green-100',
      default: 'text-white',
    },
  },
  defaultVariants: {
    textVariant: 'default',
  },
})

const Button = ({
  onPress,
  title,
  bgVariant,
  textVariant,
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => (
  <TouchableOpacity
    onPress={onPress}
    className={cn(
      'w-full rounded-full p-3 flex flex-row justify-center items-center shadow-md shadow-neutral-400/70',
      bgVariants({ bgVariant }),
      className
    )}
    {...props}
  >
    {IconLeft && <IconLeft />}

    <Text className={cn('text-lg font-bold', textVariants({ textVariant }))}>
      {title}
    </Text>

    {IconRight && <IconRight />}
  </TouchableOpacity>
)

export default Button
