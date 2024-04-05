import { Box, Button, HStack, Heading, Image, Text } from '@chakra-ui/react';
import quiz from '../assets/quiz-app.png';
import game from '../assets/gamehub.png';
import lockstore from '../assets/lockstore.png';
import country from '../assets/countries.png';

const Projects = () => {
  return (
    <>
      <Heading
        color='rgb(231,58,101)'
        textAlign='center'
        fontSize='45px'
        marginBottom='30px'
      >
        Portfolio
      </Heading>
      <Box width='80%' margin='auto'>
        <div className='container-portfolio'>
          <div className='left-portfolio'>
            <Image src={game} alt='quiz-app' borderRadius='lg' />
          </div>
          <div className='right-portfolio'>
            <Heading textAlign='center' color='rgb(231,58,101)'>
              GameHub
            </Heading>
            <Text textAlign='center' color='white' fontSize='18px'>
              Gamehub is a webapp that allows users discover the hottest trends
              and highest-rated games across multiple platfroms. There's
              everything for every gamer to discover.
            </Text>
            <HStack
              marginRight='auto'
              marginTop='20px'
              marginLeft='auto'
              alignItems='center'
              justifyContent='center'
            >
              <Text color='white' fontWeight='bold'>
                React
              </Text>
              <Text color='white' fontWeight='bold'>
                Typescript
              </Text>
            </HStack>
            <HStack
              marginRight='auto'
              marginTop='20px'
              marginLeft='auto'
              alignItems='center'
              justifyContent='center'
            >
              <Button backgroundColor='rgb(231,58,101)'>Github</Button>
              <Button backgroundColor='rgb(231,58,101)'>Website</Button>
            </HStack>
          </div>
        </div>
        <div className='container-portfolio'>
          <div className='right-portfolio'>
            <Heading textAlign='center' color='rgb(231,58,101)'>
              Countries
            </Heading>
            <Text textAlign='center' color='white' fontSize='18px'>
              Countries app is the ultimate resource for exploring the diverse
              world we live in! The app provides a wealth of information about
              countries worldwide.
            </Text>
            <HStack
              marginRight='auto'
              marginTop='20px'
              marginLeft='auto'
              alignItems='center'
              justifyContent='center'
            >
              <Text color='white' fontWeight='bold'>
                React
              </Text>
              <Text color='white' fontWeight='bold'>
                Typescript
              </Text>
            </HStack>
            <HStack
              marginRight='auto'
              marginTop='20px'
              marginLeft='auto'
              alignItems='center'
              justifyContent='center'
            >
              <Button backgroundColor='rgb(231,58,101)'>Github</Button>
              <Button backgroundColor='rgb(231,58,101)'>Website</Button>
            </HStack>
          </div>
          <div className='left-portfolio'>
            <Image src={country} alt='quiz-app' borderRadius='lg' />
          </div>
        </div>
        <div className='container-portfolio'>
          <div className='left-portfolio'>
            <Image src={lockstore} alt='quiz-app' borderRadius='lg' />
          </div>
          <div className='right-portfolio'>
            <Heading textAlign='center' color='rgb(231,58,101)'>
              Lockstore
            </Heading>
            <Text textAlign='center' color='white' fontSize='18px'>
              Lockstore is a platform tailored for store owners that provides
              powerful tools to streamline their sales operations and manage
              product inventory records with ease.
            </Text>
            <HStack
              marginRight='auto'
              marginTop='20px'
              marginLeft='auto'
              alignItems='center'
              justifyContent='center'
            >
              <Text color='white' fontWeight='bold'>
                Angular
              </Text>
              <Text color='white' fontWeight='bold'>
                Typescript
              </Text>
            </HStack>
            <HStack
              marginRight='auto'
              marginTop='20px'
              marginLeft='auto'
              alignItems='center'
              justifyContent='center'
            >
              <Button backgroundColor='rgb(231,58,101)'>Github</Button>
              <Button backgroundColor='rgb(231,58,101)'>Website</Button>
            </HStack>
          </div>
        </div>
        <div className='container-portfolio'>
          <div className='right-portfolio'>
            <Heading textAlign='center' color='rgb(231,58,101)'>
              Quiz-app
            </Heading>
            <Text textAlign='center' color='white' fontSize='18px'>
              Quiz is an application designed to enhance the learning
              experience. It provides an engaging platform for students to test
              their knowledge across various subjects and topics.
            </Text>
            <HStack
              marginRight='auto'
              marginTop='20px'
              marginLeft='auto'
              alignItems='center'
              justifyContent='center'
            >
              <Text color='white' fontWeight='bold'>
                React
              </Text>
              <Text color='white' fontWeight='bold'>
                Typescript
              </Text>
            </HStack>
            <HStack
              marginRight='auto'
              marginTop='20px'
              marginLeft='auto'
              alignItems='center'
              justifyContent='center'
            >
              <Button backgroundColor='rgb(231,58,101)'>Github</Button>
              <Button backgroundColor='rgb(231,58,101)'>Website</Button>
            </HStack>
          </div>
          <div className='left-portfolio'>
            <Image src={quiz} alt='quiz-app' borderRadius='lg' />
          </div>
        </div>
      </Box>
      ;
    </>
  );
};

export default Projects;
