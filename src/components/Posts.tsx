import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
} from '@chakra-ui/react';

const Posts = () => {
  return (
    <Box width='80%' margin='auto' marginTop='30px' className='posts-box'>
      <Heading color='rgb(231,58,101)' textAlign='center' fontSize='45px'>
        Posts
      </Heading>
      <Flex
        justifyContent='space-between'
        marginTop='30px'
        gap='20px'
        className='posts-flex'
      >
        <Card width='250px' className='card'>
          <CardHeader fontWeight='bold'>
            HOW TO CREATE A PROGRESS BAR USING CHAKRA UI
          </CardHeader>
          <CardBody>
            A progress bar shows the status of any task being carried out.
            Progress bars are mostly used to download and upload...
          </CardBody>
          <CardFooter>
            <Button
              marginLeft='auto'
              marginRight='auto'
              backgroundColor='rgb(231,58,101)'
            >
              Read More
            </Button>
          </CardFooter>
        </Card>
        <Card width='250px' className='card'>
          <CardHeader fontWeight='bold'>
            ITERATING THROUGH AN ARRAY USING map()
          </CardHeader>
          <CardBody>
            map() is a built-in javascript method that allows you to iterate
            over each item in an array and perform an operation on it...
          </CardBody>
          <CardFooter>
            <Button
              marginLeft='auto'
              marginRight='auto'
              backgroundColor='rgb(231,58,101)'
            >
              Read More
            </Button>
          </CardFooter>
        </Card>
        <Card width='250px' className='card'>
          <CardHeader fontWeight='bold'>
            CREATING A MODAL IN REACT USING CHAKRA UI
          </CardHeader>
          <CardBody>
            One way to create a modal in React is by using ChakraUI’s modal
            component. The first step is installing...
          </CardBody>
          <CardFooter>
            <Button
              marginLeft='auto'
              marginRight='auto'
              backgroundColor='rgb(231,58,101)'
            >
              Read More
            </Button>
          </CardFooter>
        </Card>
      </Flex>
    </Box>
  );
};

export default Posts;
