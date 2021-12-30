import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
    Wrap
  } from '@chakra-ui/react';
  
  export default function HomeUI() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                // position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                //   position: 'absolute',
                  bottom: 1,
                  left: 0,

                  zIndex: -1,
                }}>
                Learn
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
                Next.js
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              The project board is an exclusive resource for contract work. It{"'"}s
              perfect for freelancers, agencies, and moonlighters.
            </Text>
            <Wrap>
            {/* <Stack direction={{ base: 'column', md: 'row' }} spacing={4}> */}
              {techStackButton("Next.js with typescript")}
              {techStackButton("Mobx for state management")}
              {techStackButton("Chakra UI for making beautiful UI easily")}
              {techStackButton("MongoDB soon")}
            {/* </Stack> */}
            </Wrap>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
          />
        </Flex>
      </Stack>
    );

    function techStackButton(text) {
        return <Button position="static" rounded={'base'}>{text}</Button>
    }
  }
  

