import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
} from '@chakra-ui/react';

const Posts = () => {
  return (
    <Box width='80%' margin='auto' marginTop='40px'>
      <Heading color='rgb(231,58,101)' textAlign='center' fontSize='45px'>
        Posts
      </Heading>
      <HStack justifyContent='space-between' marginTop='40px'>
        <Card width='300px'>
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
        <Card width='300px'>
          <CardHeader>HOW TO CREATE A PROGRESS BAR USING CHAKRA UI</CardHeader>
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
        <Card width='300px'>
          <CardHeader>HOW TO CREATE A PROGRESS BAR USING CHAKRA UI</CardHeader>
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
      </HStack>
    </Box>
  );
};

export default Posts;
