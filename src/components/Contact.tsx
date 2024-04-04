import { Box, Flex, VStack, Heading, Text } from '@chakra-ui/react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { FaMapLocation } from 'react-icons/fa6';

const Contact = () => {
  return (
    <Box width='80%' margin='auto' className='contact-box'>
      <Heading
        color='rgb(231,58,101)'
        textAlign='center'
        fontSize='45px'
        marginTop='40px'
      >
        Contact
      </Heading>

      <Flex
        marginTop='40px'
        justifyContent='space-between'
        flexWrap='wrap'
        className='flex'
      >
        <VStack>
          <MdOutlineMail color='rgb(231,58,101)' className='icon' />
          <Text fontSize='18px' color='white'>
            Email
          </Text>
          <Text fontSize='18px' color='white'>
            matog50@gmail.com
          </Text>
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
