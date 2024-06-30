import { memo } from 'react'
import { Heading, Text, Stack, Link, useColorModeValue } from '@chakra-ui/react'
import ExperienceTab from './ExperienceTab'
const DetailSection = () => (
  <Stack
    width={{ base: '99%', lg: '60%', xl: '75%' }}
    height="100%"
    spacing={{ base: 6, xl: 8 }}
  >
    <Heading
      size="2xl"
      style={{
        fontVariantCaps: 'small-caps',
      }}
    >
      Places i’ve worked.
    </Heading>
    <Text color={useColorModeValue("#121212", "#f1f1f1")} variant="description">
      Since 2016, had a privilege to work with several companies that enables me
      to hone my skills and talents. These companies will always have a special
      place in my heart.
    </Text>

    <ExperienceTab />
  </Stack>
)

export default memo(DetailSection)
