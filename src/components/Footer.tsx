import { Box, Flex, Text, Link, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import { contactContent } from "../data/portfolioData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      as="footer"
      borderTop="1px solid rgba(255, 255, 255, 0.06)"
      bg="var(--bg-canvas)"
      py="28px"
      px={{ base: "20px", md: "40px" }}
      position="relative"
      zIndex="1"
    >
      <Flex
        maxW="1140px"
        mx="auto"
        direction={{ base: "column", sm: "row" }}
        justify="space-between"
        align="center"
        gap="16px"
      >
        <Text fontSize="13px" color="var(--text-muted)">
          © {currentYear} Martin Githinji
        </Text>

        <Flex gap="20px" align="center">
          <Link
            href={contactContent.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            color="var(--text-muted)"
            _hover={{ color: "var(--text-primary)" }}
            transition="color 0.18s ease"
          >
            <Icon as={FaGithub} w="17px" h="17px" display="block" />
          </Link>
          <Link
            href={contactContent.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            color="var(--text-muted)"
            _hover={{ color: "var(--text-primary)" }}
            transition="color 0.18s ease"
          >
            <Icon as={FaLinkedin} w="17px" h="17px" display="block" />
          </Link>

          <Box w="1px" h="14px" bg="rgba(255, 255, 255, 0.1)" aria-hidden="true" />

          <Box
            as="button"
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            display="inline-flex"
            alignItems="center"
            gap="5px"
            fontFamily="var(--font-mono)"
            fontSize="11.5px"
            color="var(--text-muted)"
            bg="transparent"
            border="none"
            cursor="pointer"
            _hover={{ color: "var(--accent-cyan)" }}
            transition="color 0.18s ease"
          >
            Top
            <Icon as={FiArrowUp} w="13px" h="13px" />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
