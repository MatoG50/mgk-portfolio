import { Box, Text, Image, Heading, Flex, Button } from "@chakra-ui/react";
import martin from "../assets/mato.png";
import angular from "../assets/AngularJS.svg";
import css from "../assets/CSS3.svg";
import Express from "../assets/Express.svg";
import Github from "../assets/GitHub.svg";
import html from "../assets/HTML5.svg";
import js from "../assets/JavaScript.svg";
import linkedin from "../assets/LinkedIn.svg";
import node from "../assets/Node.js.svg";
import next from "../assets/Next.js.svg";
import react from "../assets/react.svg";

const Home = () => {
  return (
    <>
      <Box
        id="home"
        className="box"
        width="80%"
        margin="auto"
        h={{ base: "auto", md: "auto", lg: "calc(100vh)" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <div className="container">
            <div className="left">
              {" "}
              <Heading
                color="rgb(231,58,101)"
                fontSize={{ base: "50px", md: "60px" }}
                className="header"
              >
                Software Developer
              </Heading>
              <Text
                color="white"
                fontSize={{ base: "18px", md: "24px" }}
                className="texter"
                justifyContent="center"
              >
                Hi, I’m <b>Martin Githinji</b>, a Nairobi-based Software
                Developer specializing in React.js, AngularJS, and Next.js. I
                build fast, responsive, and user-centric web applications with a
                focus on performance and accessibility. With a strong ownership
                mindset, I thrive in collaborative environments, bridging the
                gap between design and functionality. Passionate about learning
                and adapting to new technologies, I’m committed to crafting
                exceptional digital experiences; from concept to deployment.
              </Text>
              <Flex gap="10px" marginTop="30px" className="icons-flex">
                <Image
                  onClick={() =>
                    window.open("https://github.com/MatoG50", "_blank")
                  }
                  cursor="pointer"
                  width="30px"
                  height="30px"
                  src={Github}
                  backgroundColor="white"
                  alt="Github"
                />

                <Image
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/martin-githinji-k/",
                      "_blank"
                    )
                  }
                  cursor="pointer"
                  width="30px"
                  height="30px"
                  src={linkedin}
                  alt="LinkedIn"
                />
              </Flex>
              <Button
                backgroundColor="rgb(231,58,101)"
                size="lg"
                marginTop="20px"
                className="c-btn"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            <Image src={martin} alt="image" className="stationary-image" />
          </div>
          <Flex
            alignItems="center"
            marginTop="25px"
            marginBottom="30px"
            className="tech-stack"
          >
            <Text fontWeight="bold" color="white" marginRight="20px">
              Tech Stack:
            </Text>
            <Flex flexWrap="wrap" gap="10px">
              <Image width="30px" height="30px" src={angular} alt="Angular" />
              <Image width="30px" height="30px" src={react} alt="React" />
              <Image width="30px" height="30px" src={js} alt="Javascript" />
              <Image
                width="30px"
                backgroundColor="white"
                height="30px"
                src={next}
                alt="NextJS"
              />
              <Image width="30px" height="30px" src={html} alt="HTML" />
              <Image width="30px" height="30px" src={css} alt="CSS" />
              <Image
                width="30px"
                height="30px"
                backgroundColor="white"
                src={Express}
                alt="Express"
              />
              <Image width="30px" height="30px" src={node} alt="NodeJS" />
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Home;
