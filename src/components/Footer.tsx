import { Box, Flex, Text, Link, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      as="footer"
      borderTop="1px solid rgba(255, 255, 255, 0.05)"
      backgroundColor="#060608"
      py="30px"
      px={{ base: "20px", md: "60px" }}
      mt="50px"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        direction={{ base: "column", sm: "row" }}
        justify="space-between"
        align="center"
        gap="15px"
      >
        <Text fontSize="13px" color="var(--text-muted)">
          © {currentYear} Martin Githinji. All rights reserved.
        </Text>

        <Flex gap="20px" align="center">
          <Link
            href="https://github.com/MatoG50"
            target="_blank"
            color="var(--text-muted)"
            _hover={{ color: "white" }}
            transition="color 0.2s"
          >
            <Icon as={FaGithub} w="18px" h="18px" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/martin-githinji-k/"
            target="_blank"
            color="var(--text-muted)"
            _hover={{ color: "white" }}
            transition="color 0.2s"
          >
            <Icon as={FaLinkedin} w="18px" h="18px" />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
