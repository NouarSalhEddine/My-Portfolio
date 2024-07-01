import { memo } from 'react'
import { Heading, Text, Stack, useColorModeValue } from '@chakra-ui/react'
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
    <Text color={useColorModeValue('#121212', '#f1f1f1')} variant="description">
      Since 2016, I&apos;ve had the privilege of working with several companies
      that have enabled me to hone my skills and talents. These experiences have
      been invaluable and will always hold a special place in my heart.
    </Text>

    <ExperienceTab />
  </Stack>
)

export default memo(DetailSection)
