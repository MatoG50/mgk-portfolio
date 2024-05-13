import { Flex, HStack, Text, Show, Hide } from "@chakra-ui/react";
import ChakraMenu from "./ChakraMenu";

export interface scrollToSectionFn {
  (sectionId: string): void;
}

const NavBar = () => {
  const scrollToSection: scrollToSectionFn = sectionId => {
    const element = document.getElementById(sectionId);
    const navbarHeight = document.querySelector("header")?.offsetHeight;

    if (element && navbarHeight !== undefined) {
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      const offset = navbarHeight;

      window.scrollTo({
        top: elementTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Flex
        as="header"
        position="fixed"
        w="100%"
        zIndex="200"
        backgroundColor="rgb(12,3,20)"
        color="white"
        height="60px"
        alignItems="center"
        justifyContent="space-between"
        paddingLeft="30px"
        paddingRight="30px"
      >
        <Text fontSize="28px">Martin</Text>
        <Show breakpoint="(max-width: 768px)">
          <ChakraMenu scrollToSection={scrollToSection} />
        </Show>
        <Hide breakpoint="(max-width: 768px)">
          <HStack fontSize="24px" spacing={6}>
            <a onClick={() => scrollToSection("home")}>Home</a>
            <a onClick={() => scrollToSection("projects")}>Projects</a>
            <a onClick={() => scrollToSection("posts")}>Posts</a>
            <a onClick={() => scrollToSection("contact")}>Contact</a>
          </HStack>
        </Hide>
      </Flex>
    </>
  );
};

export default NavBar;
