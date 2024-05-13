import { Box, Button, HStack, Heading, Image, Text } from "@chakra-ui/react";
import quiz from "../assets/quiz-app.png";
import game from "../assets/gamehub.png";
import lockstore from "../assets/lockstore.png";
import country from "../assets/countries.png";

const Projects = () => {
  return (
    <>
      <Heading
        color="rgb(231,58,101)"
        textAlign="center"
        fontSize={{ base: "30px", md: "45px" }}
        marginBottom="30px"
        id="projects"
      >
        Portfolio
      </Heading>
      <Box width="80%" margin="auto">
        <div className="container-portfolio">
          <div className="left-portfolio">
            <Image src={game} alt="quiz-app" borderRadius="lg" />
          </div>
          <div className="right-portfolio">
            <Heading
              textAlign="center"
              color="rgb(231,58,101)"
              fontSize={{ base: "25px", md: "30px" }}
            >
              GameHub
            </Heading>
            <Text
              textAlign="center"
              color="white"
              fontSize={{ base: "18px", md: "24px" }}
            >
              Gamehub is a webapp that allows users discover the hottest trends
              and highest-rated games across multiple platfroms. There's
              everything for every gamer to discover.
            </Text>
            <HStack
              marginRight="auto"
              marginTop="20px"
              marginLeft="auto"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="white" fontWeight="bold" fontSize="18px">
                React
              </Text>
              <Text color="white" fontWeight="bold" fontSize="18px">
                Typescript
              </Text>
            </HStack>
            <HStack
              marginRight="auto"
              marginTop="20px"
              marginLeft="auto"
              alignItems="center"
              justifyContent="center"
            >
              <Button
                size="lg"
                backgroundColor="rgb(231,58,101)"
                onClick={() =>
                  window.open("https://github.com/MatoG50/Game-hub", "_blank")
                }
              >
                Github
              </Button>
              <Button
                backgroundColor="rgb(231,58,101)"
                size="lg"
                onClick={() =>
                  window.open("https://game-hub-mgk.vercel.app/", "_blank")
                }
              >
                Website
              </Button>
            </HStack>
          </div>
        </div>
        <div className="container-portfolio">
          <div className="right-portfolio">
            <Heading
              textAlign="center"
              color="rgb(231,58,101)"
              fontSize={{ base: "25px", md: "30px" }}
            >
              Countries
            </Heading>
            <Text
              textAlign="center"
              color="white"
              fontSize={{ base: "25px", md: "30px" }}
            >
              Countries app is the ultimate resource for exploring the diverse
              world we live in! The app provides a wealth of information about
              countries worldwide.
            </Text>
            <HStack
              marginRight="auto"
              marginTop="20px"
              marginLeft="auto"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="white" fontWeight="bold" fontSize="18px">
                React
              </Text>
              <Text color="white" fontWeight="bold" fontSize="18px">
                Typescript
              </Text>
            </HStack>
            <HStack
              marginRight="auto"
              marginTop="20px"
              marginLeft="auto"
              alignItems="center"
              justifyContent="center"
            >
              <Button
                backgroundColor="rgb(231,58,101)"
                size="lg"
                onClick={() =>
                  window.open(
                    "https://github.com/MatoG50/Countries-app",
                    "_blank"
                  )
                }
              >
                Github
              </Button>
              <Button
                backgroundColor="rgb(231,58,101)"
                size="lg"
                onClick={() =>
                  window.open(
                    "https://countries-app-pi-one.vercel.app/",
                    "_blank"
                  )
                }
              >
                Website
              </Button>
            </HStack>
          </div>
          <div className="left-portfolio">
            <Image src={country} alt="quiz-app" borderRadius="lg" />
          </div>
        </div>
        <div className="container-portfolio">
          <div className="left-portfolio">
            <Image src={lockstore} alt="quiz-app" borderRadius="lg" />
          </div>
          <div className="right-portfolio">
            <Heading
              textAlign="center"
              color="rgb(231,58,101)"
              fontSize={{ base: "25px", md: "30px" }}
            >
              Lockstore
            </Heading>
            <Text
              textAlign="center"
              color="white"
              fontSize={{ base: "25px", md: "30px" }}
            >
              Lockstore is a platform tailored for store owners that provides
              powerful tools to streamline their sales operations and manage
              product inventory records with ease.
            </Text>
            <HStack
              marginRight="auto"
              marginTop="20px"
              marginLeft="auto"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="white" fontWeight="bold" fontSize="18px">
                Angular
              </Text>
              <Text color="white" fontWeight="bold" fontSize="18px">
                Typescript
              </Text>
            </HStack>
            <HStack
              marginRight="auto"
              marginTop="20px"
              marginLeft="auto"
              alignItems="center"
              justifyContent="center"
            >
              <Button
                backgroundColor="rgb(231,58,101)"
                size="lg"
                onClick={() =>
                  window.open(
                    "https://github.com/MatoG50/Lockstore-Angular",
                    "_blank"
                  )
                }
              >
                Github
              </Button>
              <Button
                backgroundColor="rgb(231,58,101)"
                size="lg"
                onClick={() =>
                  window.open("https://lockstore-28f22.web.app/", "_blank")
                }
              >
                Website
              </Button>
            </HStack>
          </div>
        </div>
        <div className="container-portfolio">
          <div className="right-portfolio">
            <Heading
              textAlign="center"
              color="rgb(231,58,101)"
              fontSize={{ base: "25px", md: "30px" }}
            >
              Quiz-app
            </Heading>
            <Text
              textAlign="center"
              color="white"
              fontSize={{ base: "25px", md: "30px" }}
            >
              Quiz is an application designed to enhance the learning
              experience. It provides an engaging platform for students to test
              their knowledge across various subjects and topics.
            </Text>
            <HStack
              marginRight="auto"
              marginTop="20px"
              marginLeft="auto"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="white" fontWeight="bold" fontSize="18px">
                React
              </Text>
              <Text color="white" fontWeight="bold" fontSize="18px">
                Typescript
              </Text>
            </HStack>
            <HStack
              marginRight="auto"
              marginTop="20px"
              marginLeft="auto"
              alignItems="center"
              justifyContent="center"
            >
              <Button
                backgroundColor="rgb(231,58,101)"
                size="lg"
                onClick={() =>
                  window.open("https://github.com/MatoG50/Quiz-App", "_blank")
                }
              >
                Github
              </Button>
              <Button
                backgroundColor="rgb(231,58,101)"
                size="lg"
                onClick={() =>
                  window.open("https://quiz-app-mkg.vercel.app/", "_blank")
                }
              >
                Website
              </Button>
            </HStack>
          </div>
          <div className="left-portfolio">
            <Image src={quiz} alt="quiz-app" borderRadius="lg" />
          </div>
        </div>
      </Box>
      ;
    </>
  );
};

export default Projects;
