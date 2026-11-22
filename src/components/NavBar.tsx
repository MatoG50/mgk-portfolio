import { Box, Flex, HStack, Text, Link, Icon } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import ChakraMenu from "./ChakraMenu";

export interface scrollToSectionFn {
  (sectionId: string): void;
}

export interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: readonly NavItem[] = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const elements = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection: scrollToSectionFn = (sectionId) => {
    const element = document.getElementById(sectionId);
    const navbarHeight = 92;

    if (element) {
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - navbarHeight,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      left="0"
      w="100%"
      zIndex="1000"
      px={{ base: "16px", md: "28px" }}
      pt={{ base: "12px", md: "16px" }}
      pointerEvents="none"
    >
      <Flex
        maxW="1120px"
        mx="auto"
        h="60px"
        px={{ base: "16px", md: "20px" }}
        align="center"
        justify="space-between"
        borderRadius="999px"
        pointerEvents="auto"
        bg={scrolled ? "rgba(11, 14, 23, 0.84)" : "rgba(11, 14, 23, 0.58)"}
        backdropFilter="blur(16px)"
        border="1px solid"
        borderColor={scrolled ? "rgba(255, 255, 255, 0.13)" : "rgba(255, 255, 255, 0.08)"}
        boxShadow={scrolled ? "0 18px 40px -16px rgba(0, 0, 0, 0.75)" : "none"}
        transition="all 0.25s ease"
      >
        {/* Personal Brand Mark */}
        <Box
          as="button"
          type="button"
          onClick={() => scrollToSection("home")}
          display="flex"
          alignItems="center"
          gap="10px"
          cursor="pointer"
          bg="transparent"
          border="none"
          p="0"
          _focusVisible={{
            outline: "2px solid var(--accent-cyan)",
            outlineOffset: "4px",
            borderRadius: "6px",
          }}
        >
          <Flex
            w="30px"
            h="30px"
            borderRadius="full"
            align="center"
            justify="center"
            bg="linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(129, 140, 248, 0.25))"
            border="1px solid rgba(34, 211, 238, 0.4)"
            fontFamily="var(--font-mono)"
            fontSize="11px"
            fontWeight="700"
            color="var(--text-primary)"
          >
            MG
          </Flex>
          <Text
            fontFamily="var(--font-heading)"
            fontSize="14.5px"
            fontWeight="700"
            letterSpacing="-0.02em"
            color="var(--text-primary)"
          >
            Martin Githinji
          </Text>
        </Box>

        {/* Center Navigation Pills */}
        <HStack
          as="nav"
          aria-label="Primary navigation"
          display={{ base: "none", md: "flex" }}
          spacing={1}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                px="14px"
                py="6px"
                borderRadius="999px"
                fontSize="13.5px"
                fontWeight={isActive ? "600" : "500"}
                color={isActive ? "#07080D" : "#CBD5E1"}
                bg={isActive ? "#F8FAFC" : "transparent"}
                _hover={{
                  color: isActive ? "#07080D" : "#FFFFFF",
                  bg: isActive ? "#FFFFFF" : "rgba(255, 255, 255, 0.08)",
                  textDecoration: "none",
                }}
                _focusVisible={{
                  outline: "2px solid var(--accent-cyan)",
                  outlineOffset: "2px",
                  color: isActive ? "#07080D" : "#FFFFFF",
                }}
                transition="all 0.2s ease"
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </HStack>

        {/* Desktop Resume CTA */}
        <Flex display={{ base: "none", md: "flex" }} align="center">
          <Link
            href="/resume.pdf"
            download
            fontSize="12.5px"
            fontWeight="600"
            color="#F8FAFC"
            border="1px solid rgba(34, 211, 238, 0.4)"
            bg="rgba(34, 211, 238, 0.12)"
            px="14px"
            py="7px"
            borderRadius="999px"
            display="inline-flex"
            alignItems="center"
            gap="6px"
            _hover={{
              bg: "rgba(34, 211, 238, 0.22)",
              borderColor: "rgba(34, 211, 238, 0.68)",
              color: "#FFFFFF",
              textDecoration: "none",
            }}
            _focusVisible={{
              outline: "2px solid var(--accent-cyan)",
              outlineOffset: "2px",
              color: "#FFFFFF",
            }}
            transition="all 0.2s ease"
          >
            <Icon as={FiDownload} w="13px" h="13px" color="var(--accent-cyan)" />
            Resume
          </Link>
        </Flex>

        {/* Mobile Drawer Trigger */}
        <Box display={{ base: "block", md: "none" }}>
          <ChakraMenu
            items={NAV_ITEMS}
            scrollToSection={scrollToSection}
            activeSection={activeSection}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default NavBar;
