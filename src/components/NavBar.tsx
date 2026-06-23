import { Flex, HStack, Text, Show, Hide, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ChakraMenu from "./ChakraMenu";

export interface scrollToSectionFn {
  (sectionId: string): void;
}

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection: scrollToSectionFn = (sectionId) => {
    const element = document.getElementById(sectionId);
    const navbarHeight = 70; // Hardcoded fallback offset to avoid shifting

    if (element) {
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <Flex
      as="header"
      position="fixed"
      top="0"
      left="0"
      w="100%"
      zIndex="1000"
      transition="all 0.3s ease"
      backgroundColor={scrolled ? "rgba(6, 6, 8, 0.85)" : "rgba(6, 6, 8, 0.4)"}
      backdropFilter="blur(16px)"
      borderBottom="1px solid"
      borderColor={scrolled ? "rgba(255, 255, 255, 0.08)" : "transparent"}
      color="white"
      height="70px"
      alignItems="center"
      justifyContent="space-between"
      paddingLeft={{ base: "20px", md: "60px" }}
      paddingRight={{ base: "20px", md: "60px" }}
    >
      <Text
        fontSize="22px"
        fontWeight="800"
        letterSpacing="-0.03em"
        cursor="pointer"
        onClick={() => scrollToSection("home")}
        className="gradient-text"
      >
        MARTIN G.
      </Text>

      <Show breakpoint="(max-width: 768px)">
        <ChakraMenu scrollToSection={scrollToSection} />
      </Show>

      <Hide breakpoint="(max-width: 768px)">
        <HStack fontSize="14px" fontWeight="500" spacing={8}>
          <Link
            onClick={() => scrollToSection("home")}
            _hover={{ color: "var(--primary-accent)", textDecoration: "none" }}
            transition="color 0.2s"
          >
            Home
          </Link>
          <Link
            onClick={() => scrollToSection("about")}
            _hover={{ color: "var(--primary-accent)", textDecoration: "none" }}
            transition="color 0.2s"
          >
            About
          </Link>
          <Link
            onClick={() => scrollToSection("projects")}
            _hover={{ color: "var(--primary-accent)", textDecoration: "none" }}
            transition="color 0.2s"
          >
            Projects
          </Link>
          <Link
            onClick={() => scrollToSection("contact")}
            _hover={{ color: "var(--primary-accent)", textDecoration: "none" }}
            transition="color 0.2s"
          >
            Contact
          </Link>
        </HStack>
      </Hide>
    </Flex>
  );
};

export default NavBar;
