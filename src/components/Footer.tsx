import { HStack, Text, Flex, Image } from '@chakra-ui/react';
import linkedin from '../assets/LinkedIn.svg';
import Github from '../assets/GitHub.svg';

const Footer = () => {
  return (
    <>
      <HStack
        alignItems='center'
        paddingRight='20px'
        paddingLeft='20px'
        justifyContent='space-between'
        backgroundColor='rgb(12,3,20)'
        color='white'
        height='80px'
        marginTop='30px'
      >
        <Text alignItems='center' justifyContent='center'>
          Copyright © 2024. All rights are reserved
        </Text>
        <Flex gap='10px'>
          <Image
            onClick={() => window.open('https://github.com/MatoG50', '_blank')}
            cursor='pointer'
            width='30px'
            height='30px'
            src={Github}
            backgroundColor='white'
            alt='Github'
          />

          <Image
            width='30px'
            height='30px'
            src={linkedin}
            alt='LinkedIn'
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/martin-githinji-k/',
                '_blank'
              )
            }
            cursor='pointer'
          />
        </Flex>
      </HStack>
    </>
  );
};

export default Footer;
