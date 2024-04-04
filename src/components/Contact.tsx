import { Box, Flex, VStack, Heading, Text } from '@chakra-ui/react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { FaMapLocation } from 'react-icons/fa6';

const Contact = () => {
  return (
    <Box width='80%' margin='auto'>
      <Heading
        color='rgb(231,58,101)'
        textAlign='center'
        fontSize='45px'
        marginTop='40px'
      >
        Contact
      </Heading>

      <Flex marginTop='40px' justifyContent='space-between'>
        <VStack>
          <MdOutlineMail color='rgb(231,58,101)' className='icon' />
          <Text color='white'>Email</Text>
          <Text color='white'>matog50@gmail.com</Text>
        </VStack>
        <VStack>
          <FaPhoneAlt color='rgb(231,58,101)' className='icon' />
          <Text color='white'>Phone</Text>
          <Text color='white'>+254 724 979 592</Text>
        </VStack>
        <VStack>
          <FaMapLocation color='rgb(231,58,101)' className='icon' />
          <Text color='white'>Address</Text>
          <Text color='white'>PO BOX 100907-00101, Nairobi, Kenya</Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Contact;
