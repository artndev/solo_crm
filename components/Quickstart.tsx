import Activity from '@/components/icons/(shortcuts)/Activity'
import Contacts from '@/components/icons/(shortcuts)/Contacts'
import Issues from '@/components/icons/(shortcuts)/Issues'
import Organizations from '@/components/icons/(shortcuts)/Organizations'
import Projects from '@/components/icons/(shortcuts)/Projects'
import Screenshots from '@/components/icons/(shortcuts)/Screenshots'
import Shortcuts from '@/components/icons/(shortcuts)/Shortcuts'
import Users from '@/components/icons/(shortcuts)/Users'
import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'
import React from 'react'
import { View, ViewProps } from 'react-native'
import TypoText from './(text)/TypoText'
import Button from './Button'
import Card from './Card'
import Plus from './icons/(other)/Plus'

const Quickstart: React.FC<ViewProps> = ({ className, ...props }) => {
  const { colorScheme } = useTheme()

  return (
    <Card
      className={cn(
        'flex justify-center items-center gap-4 px-5 py-6',
        className,
        colorScheme === 'dark' ? 'border-muted-3' : ''
      )}
      {...props}
    >
      <View className="flex flex-row gap-4">
        <Issues width={21} height={21} />
        <Projects width={21} height={21} />
        <Organizations width={21} height={21} />
        <Users width={21} height={21} />
        <Activity width={21} height={21} />
        <Screenshots width={21} height={21} />
        <Contacts width={21} height={21} />
        <Shortcuts width={21} height={21} />
      </View>

      <View className="flex flex-col justify-center items-center w-full gap-[10px]">
        <TypoText weight="semibold" size="md">
          The things you need, one tap away
        </TypoText>

        <TypoText
          size="sm"
          className="text-input-placeholder text-center"
          darkOverride="text-muted"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus
        </TypoText>
      </View>

      <Button
        title="Get Started"
        bg="outline"
        color="neon"
        className="w-full"
        IconLeft={Plus}
      />
    </Card>
  )
}

export default Quickstart
