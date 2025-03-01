import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Link,
  Icon,
  Box,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { RiHeartPulseFill, RiCopyleftLine, RiGithubFill } from 'react-icons/ri'
const rimuruVariant: Variants = {
  shake: {
    rotate: [0, 15, 0, -15, 0],
    transition: {
      delay: 1.2,
      duration: 0.5,
      repeat: 2,
      ease: 'easeInOut',
    },
  },
  jump: {
    y: [0, -35, 0],
    transition: {
      delay: 1.8,
      duration: 0.5,
      repeat: 3,
      ease: 'easeInOut',
    },
  },
}

const GetInTouch = () => {
  const [ref, inView] = useInView()
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
      as="footer"
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Say hi!{' '}
        <Text as="span" fontSize="2xl" variant="emphasis">
          <motion.div
            style={{ display: 'inline-block' }}
            variants={rimuruVariant}
            ref={ref}
            animate={inView ? ['shake', 'jump'] : false}
          >
            (⁀ᗢ⁀)
          </motion.div>
        </Text>
      </Heading>
      <Text
        color={useColorModeValue('#121212', '#f1f1f1')}
        variant="description"
      >
        I&apos;d love to hear from you! Whether you have a question, a project
        idea, or just want to chat, feel free to reach out. Let&apos;s connect
        and see how we can collaborate or help each other grow! . So feel free
        to message me on any of my social media or shoot me an{' '}
        <Link
          href="mailto:nouarsalheddine@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          email
        </Link>
        .
      </Text>

      <Box
        letterSpacing={0.1}
        textAlign="center"
        fontFamily="monospace"
        paddingTop={{ base: 10, lg: 20, xl: 20 }}
        paddingBottom={{ base: 5, lg: 18 }}
      >
        <Link
          color={useColorModeValue('#121212', '#f1f1f1')}
          variant="description"
          textDecoration="none"
          rel="noreferrer"
          href="https://github.com/nouarsalheddine"
          target="_blank"
          _focus={{ boxShadow: 'none' }}
          _hover={{ color: 'teal.500' }}
        >
          <Text as="span">
            <Icon as={RiGithubFill} h={6} w={6} /> <br />
            Designed and Made with <Icon as={RiHeartPulseFill} /> <br />
            SALHEDDINE NOUAR <Icon as={RiCopyleftLine} /> 2021
          </Text>
        </Link>
      </Box>
    </Stack>
  )
}

export default memo(GetInTouch)
