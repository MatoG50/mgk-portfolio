import { Box, Text, Image, Heading, Flex, Button } from '@chakra-ui/react';
import martin from '../assets/mato.png';
import angular from '../assets/AngularJS.svg';
import css from '../assets/CSS3.svg';
import Express from '../assets/Express.svg';
import Github from '../assets/GitHub.svg';
import html from '../assets/HTML5.svg';
import js from '../assets/JavaScript.svg';
import linkedin from '../assets/LinkedIn.svg';
import node from '../assets/Node.js.svg';
import next from '../assets/Next.js.svg';
import react from '../assets/react.svg';

const Home = () => {
  return (
    <>
      <Box className='box' width='80%' margin='auto' marginTop='40px'>
        <div className='container'>
          <div className='left'>
            {' '}
            <Heading color='rgb(231,58,101)' fontSize='53px' className='header'>
              Software Developer
            </Heading>
            <Text
              color='white'
              fontSize='18px'
              className='texter'
              justifyContent='center'
            >
              Hi, I'm <b>Martin Githinji</b>, a Software Developer (React.js,
              AngularJS, Next.js, Node.js) based in Nairobi, Kenya with a strong
              ownership mindset, proficient in frontend technologies, excellent
              communication and collaboration skills, and a passion for
              learning, adapting to new technologies, and crafting exceptional
              user experiences.
            </Text>
            <Flex gap='10px' marginTop='30px' className='icons-flex'>
              <Image
                width='30px'
                height='30px'
                src={Github}
                backgroundColor='white'
                alt='Github'
              />

              <Image width='30px' height='30px' src={linkedin} alt='LinkedIn' />
            </Flex>
            <Button
              backgroundColor='rgb(231,58,101)'
              marginTop='20px'
              className='c-btn'
            >
              Contact Me
            </Button>
          </div>
          <Image src={martin} alt='image' className='stationary-image' />
        </div>
        <Flex alignItems='center' marginTop='70px' className='tech-stack'>
          <Text fontWeight='bold' color='white' marginRight='20px'>
            Tech Stack:
          </Text>
          <Flex flexWrap='wrap' gap='10px'>
            <Image width='30px' height='30px' src={angular} alt='Angular' />
            <Image width='30px' height='30px' src={react} alt='React' />
            <Image width='30px' height='30px' src={js} alt='Javascript' />
            <Image
              width='30px'
              backgroundColor='white'
              height='30px'
              src={next}
              alt='NextJS'
            />
            <Image width='30px' height='30px' src={html} alt='HTML' />
            <Image width='30px' height='30px' src={css} alt='CSS' />
            <Image
              width='30px'
              height='30px'
              backgroundColor='white'
              src={Express}
              alt='Express'
            />
            <Image width='30px' height='30px' src={node} alt='NodeJS' />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
