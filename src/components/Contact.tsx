import { Box, Flex, VStack, Heading, Text, Link } from '@chakra-ui/react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { FaMapLocation } from 'react-icons/fa6';

const Contact = () => {
  return (
    <Box width='80%' margin='auto' className='contact-box' id='contact'>
      <Heading
        color='rgb(231,58,101)'
        textAlign='center'
        fontSize='45px'
        marginTop='30px'
      >
        Contact
      </Heading>

      <Flex
        marginTop='30px'
        justifyContent='space-between'
        flexWrap='wrap'
        className='flex'
      >
        <VStack>
          <MdOutlineMail color='rgb(231,58,101)' className='icon' />
          <Text fontSize='18px' color='white'>
            Email
          </Text>
          <Link
            fontSize='18px'
            color='white'
            href='mailto:matog50@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            matog50@gmail.com
          </Link>
        </VStack>
        <VStack>
          <FaPhoneAlt color='rgb(231,58,101)' className='icon' />
          <Text fontSize='18px' color='white'>
            Phone
          </Text>
          <Text fontSize='18px' color='white'>
            +254 724 979 592
          </Text>
        </VStack>
        <VStack>
          <FaMapLocation color='rgb(231,58,101)' className='icon' />
          <Text fontSize='18px' color='white'>
            Address
          </Text>
          <Text fontSize='18px' color='white'>
            PO BOX 00101, Nairobi, Kenya
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Contact;
