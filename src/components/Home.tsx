import { Box, Flex, Heading, Text, Link, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiCode, FiLayers, FiCpu, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { contactContent, heroContent } from "../data/portfolioData";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const highlightIcons = [FiCode, FiLayers, FiCpu];
const highlightBgColors = [
  "rgba(0, 242, 254, 0.08)",
  "rgba(127, 0, 255, 0.08)",
  "rgba(16, 185, 129, 0.08)",
];

const Home = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const navbarHeight = 70;
    if (element) {
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      id="home"
      position="relative"
      minHeight={{ base: "auto", md: "calc(100vh - 70px)" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={{ base: "60px", md: "80px" }}
      px={{ base: "20px", md: "60px" }}
      overflow="hidden"
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        justify="space-between"
        maxW="1200px"
        width="100%"
        gap={{ base: "50px", lg: "40px" }}
        zIndex="10"
      >
        {/* Left Side: Headline & CTAs */}
        <MotionBox
          flex="1.2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          textAlign={{ base: "center", lg: "left" }}
        >
          {/* Tagline */}
          <Flex
            align="center"
            justify={{ base: "center", lg: "flex-start" }}
            gap="8px"
            mb="16px"
            wrap="wrap"
          >
            <Text
              fontSize="11px"
              fontWeight="700"
              textTransform="uppercase"
              letterSpacing="0.08em"
              color="var(--primary-accent)"
              lineHeight="1"
              m="0"
            >
              {heroContent.name}
            </Text>
            <Box w="5px" h="5px" borderRadius="full" bg="var(--primary-accent)" flexShrink={0} />
            <Text
              fontSize="11px"
              fontWeight="700"
              color="var(--text-muted)"
              letterSpacing="0.08em"
              lineHeight="1"
              m="0"
            >
              {heroContent.roleLabel}
            </Text>
          </Flex>

          {/* Main Headline */}
          <Heading
            as="h1"
            fontSize={{ base: "38px", sm: "48px", md: "62px" }}
            fontWeight="800"
            lineHeight="1.1"
            letterSpacing="-0.03em"
            mb="20px"
            className="gradient-text"
          >
            {heroContent.headline}
          </Heading>

          {/* Subheadline */}
          <Text
            fontSize={{ base: "17px", md: "19px" }}
            lineHeight="1.65"
            color="var(--text-secondary)"
            mb="35px"
            maxW="610px"
            mx={{ base: "auto", lg: "0" }}
          >
            {heroContent.subheadline}
          </Text>

          {/* Buttons & Actions */}
          <Flex
            direction={{ base: "column", sm: "row" }}
            gap="15px"
            justify={{ base: "center", lg: "flex-start" }}
            align="center"
            mb="45px"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="btn-primary"
              style={{ cursor: "pointer", width: "auto" }}
            >
              View Projects
              <Icon as={FiArrowRight} />
            </button>

            <a href="/resume.pdf" download className="btn-secondary" style={{ textDecoration: "none" }}>
              Download Resume
              <Icon as={FiDownload} />
            </a>

            <Link
              onClick={() => scrollToSection("contact")}
              fontSize="15px"
              fontWeight="600"
              color="white"
              ml={{ base: "0", sm: "15px" }}
              display="flex"
              alignItems="center"
              gap="6px"
              _hover={{ color: "var(--primary-accent)", textDecoration: "none" }}
              transition="color 0.2s"
            >
              Get in Touch
              <FiArrowRight style={{ transition: "transform 0.2s" }} className="hover-arrow" />
            </Link>
          </Flex>

          {/* Core Competencies Quick-View */}
          <Flex
            direction="row"
            flexWrap="wrap"
            gap="12px"
            justify={{ base: "center", lg: "flex-start" }}
            align="center"
          >
            <Text fontSize="13px" fontWeight="600" color="var(--text-muted)">
              CORE STACK:
            </Text>
            {heroContent.coreStack.map((tech) => (
              <Box
                key={tech}
                bg="rgba(255, 255, 255, 0.03)"
                border="1px solid rgba(255, 255, 255, 0.05)"
                px="12px"
                py="4px"
                borderRadius="6px"
                fontSize="12px"
                fontWeight="500"
                color="var(--text-secondary)"
              >
                {tech}
              </Box>
            ))}
          </Flex>
        </MotionBox>

        {/* Right Side: Engineer Profile Summary Card */}
        <MotionFlex
          flex="0.8"
          justify="center"
          align="center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          w="100%"
        >
          <Box
            className="glass-card float-element"
            w="100%"
            maxW="420px"
            p="30px"
            position="relative"
            boxShadow="0 30px 60px -15px rgba(0, 0, 0, 0.7)"
          >
            {/* Header decor */}
            <Flex
              justify="space-between"
              align="center"
              mb="25px"
              borderBottom="1px solid rgba(255, 255, 255, 0.06)"
              pb="15px"
            >
              <Flex gap="6px">
                <Box w="8px" h="8px" borderRadius="full" bg="#ff5f56" />
                <Box w="8px" h="8px" borderRadius="full" bg="#ffbd2e" />
                <Box w="8px" h="8px" borderRadius="full" bg="#27c93f" />
              </Flex>
              <Text fontSize="11px" fontWeight="700" color="var(--primary-accent)" letterSpacing="0.05em">
                {heroContent.profileCard.headerLabel}
              </Text>
            </Flex>

            {/* Core Highlights */}
            <Flex direction="column" gap="18px">
              {heroContent.profileCard.highlights.map((item, idx) => (
                <Flex key={item.label} align="center" gap="14px">
                  <Flex
                    w="36px"
                    h="36px"
                    borderRadius="10px"
                    bg={highlightBgColors[idx] || "rgba(0, 242, 254, 0.08)"}
                    align="center"
                    justify="center"
                    flexShrink={0}
                  >
                    <Icon as={highlightIcons[idx] || FiCode} color={item.accent} w="18px" h="18px" />
                  </Flex>
                  <Box>
                    <Text fontSize="11px" color="var(--text-muted)" fontWeight="600">
                      {item.label}
                    </Text>
                    <Text fontSize="14px" color="var(--text-primary)" fontWeight="700">
                      {item.title}
                    </Text>
                    <Text fontSize="12px" color="var(--text-secondary)" fontWeight="500">
                      {item.subtitle}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </Flex>

            {/* Availability Summary */}
            <Box
              mt="25px"
              bg="rgba(255, 255, 255, 0.02)"
              borderRadius="10px"
              p="14px"
              border="1px solid rgba(255, 255, 255, 0.05)"
            >
              <Flex align="center" gap="10px">
                <Icon as={FiMapPin} color="var(--highlight-accent)" w="15px" h="15px" flexShrink={0} />
                <Text fontSize="12px" color="var(--text-secondary)" lineHeight="1.5">
                  {heroContent.profileCard.footerNote}
                </Text>
              </Flex>
            </Box>

            {/* Social Links */}
            <Flex justify="center" mt="20px" gap="15px">
              <Link
                href={contactContent.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                color="var(--text-secondary)"
                _hover={{ color: "white" }}
              >
                <Icon as={FaGithub} w="18px" h="18px" />
              </Link>
              <Link
                href={contactContent.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                color="var(--text-secondary)"
                _hover={{ color: "white" }}
              >
                <Icon as={FaLinkedin} w="18px" h="18px" />
              </Link>
            </Flex>
          </Box>
        </MotionFlex>
      </Flex>
    </Box>
  );
};

export default Home;
