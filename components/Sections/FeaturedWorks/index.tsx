import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
  useColorModeValue,
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
      <Text color={useColorModeValue("#121212","#f1f1f1")} variant="description">
        Check out some of the works I made at freelancing and company projects .
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
            description="Created and launched an AI-powered chatbot designed for Arabic language interactions, similar to ChatGPT. Seamlessly integrated the AI model into a React application, enabling intelligent and interactive conversations. Leveraged React.js, Node.js, and sophisticated AI technologies to bring this project to fruition."
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
            description="Engineered a 911 emergency response system featuring a dynamic layout with React Flex-Layout. Employed a microfrontend architecture to enhance scalability and modularity. Integrated Postal.js to enable smooth communication and data exchange between different microfrontends, ensuring cohesive and efficient system performance."
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
            description="Designed and implemented an electronic medical record (EMR) system to streamline doctors' management of patient data, appointments, and medical histories."
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
