import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
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
        Some of my work.
      </Heading>
      <Text variant="description">
        Check out some of the works I made at freelancing, company projects and
        even case studies.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="Nojoom"
            src="/works/nojoom/nojoom.jpeg"
            description="Developed the React web application for an AI-driven chatbot tailored for Arabic language interactions, akin to ChatGPT. Integrated the AI model by using backend APIs to provide interactive and intelligent conversational capabilities. Utilized technologies such as React.js and Node.js."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://www.nojoom.ai"
            // objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="Cirrus"
            description="Developed a 911 emergency response system using a flexible layout with React Flex-Layout. Implemented a microfrontend architecture to ensure scalability and modularity. Enabled communication between microfrontends using Postal.js, ensuring seamless data flow and integration across different components."
            src="/works/cirrus/cirrus.jpeg"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://emeres.com/cirrus/"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="Electronic Medical Records (EMR)"
            description="Developed an electronic medical record (EMR) system for doctors to manage patient data, appointments, and medical history. "
            src="/works/emr/emr.jpg"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://ELECTRONICMEDICALRECORDS.com"
            
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
