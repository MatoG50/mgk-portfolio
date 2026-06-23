import { Box, Flex, Heading, Text, Link, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiCode, FiLayers, FiCpu } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

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
              Martin Githinji
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
              SOFTWARE ENGINEER & AI APPLICATIONS
            </Text>
          </Flex>

          {/* Main Headline */}
          <Heading
            as="h1"
            fontSize={{ base: "38px", sm: "48px", md: "64px" }}
            fontWeight="800"
            lineHeight="1.1"
            letterSpacing="-0.03em"
            mb="20px"
            className="gradient-text"
          >
            Building software that solves real-world problems.
          </Heading>

          {/* Subheadline */}
          <Text
            fontSize={{ base: "17px", md: "20px" }}
            lineHeight="1.6"
            color="var(--text-secondary)"
            mb="35px"
            maxW="600px"
            mx={{ base: "auto", lg: "0" }}
          >
            Full-stack engineer specializing in scalable web applications, business systems, and AI-powered solutions. Dedicated to building production-ready architectures that drive real-world business outcomes.
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
            gap="15px"
            justify={{ base: "center", lg: "flex-start" }}
            align="center"
          >
            <Text fontSize="13px" fontWeight="600" color="var(--text-muted)">
              CORE TECH:
            </Text>
            {["React", "Angular", "Node.js", "TypeScript", "PostgreSQL", "Python", "ML"].map((tech) => (
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

        {/* Right Side: High-tech Visual dashboard card, not illustration */}
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
            <Flex justify="space-between" align="center" mb="25px" borderBottom="1px solid rgba(255, 255, 255, 0.06)" pb="15px">
              <Flex gap="6px">
                <Box w="8px" h="8px" borderRadius="full" bg="#ff5f56" />
                <Box w="8px" h="8px" borderRadius="full" bg="#ffbd2e" />
                <Box w="8px" h="8px" borderRadius="full" bg="#27c93f" />
              </Flex>
              <Text fontSize="11px" fontWeight="700" color="var(--primary-accent)" letterSpacing="0.05em">
                ENGINEER PROFILE // MGK-2026
              </Text>
            </Flex>

            {/* Core Stats */}
            <Flex direction="column" gap="16px">
              {/* Stat 1 */}
              <Flex align="center" gap="14px">
                <Flex w="36px" h="36px" borderRadius="10px" bg="rgba(0, 242, 254, 0.08)" align="center" justify="center">
                  <Icon as={FiCode} color="var(--primary-accent)" w="18px" h="18px" />
                </Flex>
                <Box>
                  <Text fontSize="11px" color="var(--text-muted)" fontWeight="600">EDUCATION</Text>
                  <Text fontSize="14px" color="var(--text-primary)" fontWeight="700">MSc Software Engineering</Text>
                  <Text fontSize="12px" color="var(--primary-accent)" fontWeight="500">Quantic School of Tech</Text>
                </Box>
              </Flex>

              {/* Stat 2 */}
              <Flex align="center" gap="14px">
                <Flex w="36px" h="36px" borderRadius="10px" bg="rgba(127, 0, 255, 0.08)" align="center" justify="center">
                  <Icon as={FiLayers} color="var(--secondary-accent)" w="18px" h="18px" />
                </Flex>
                <Box>
                  <Text fontSize="11px" color="var(--text-muted)" fontWeight="600">SYSTEM ARCHITECTURE</Text>
                  <Text fontSize="14px" color="var(--text-primary)" fontWeight="700">POS Integration & eCommerce</Text>
                  <Text fontSize="12px" color="var(--highlight-accent)" fontWeight="500">Clover API Synchronizer</Text>
                </Box>
              </Flex>

              {/* Stat 3 */}
              <Flex align="center" gap="14px">
                <Flex w="36px" h="36px" borderRadius="10px" bg="rgba(16, 185, 129, 0.08)" align="center" justify="center">
                  <Icon as={FiCpu} color="var(--highlight-accent)" w="18px" h="18px" />
                </Flex>
                <Box>
                  <Text fontSize="11px" color="var(--text-muted)" fontWeight="600">AI / MACHINE LEARNING</Text>
                  <Text fontSize="14px" color="var(--text-primary)" fontWeight="700">Malware Detection Pipeline</Text>
                  <Text fontSize="12px" color="rgba(255, 255, 255, 0.6)" fontWeight="500">Scikit-learn Classification</Text>
                </Box>
              </Flex>
            </Flex>

            {/* Visual Code Console Section */}
            <Box mt="25px" bg="rgba(0, 0, 0, 0.3)" borderRadius="10px" p="15px" border="1px solid rgba(255, 255, 255, 0.04)" fontFamily="monospace">
              <Flex justify="space-between" align="center" mb="8px">
                <Text fontSize="11px" color="rgba(255, 255, 255, 0.3)">TERMINAL LOG</Text>
                <Box w="6px" h="6px" borderRadius="full" bg="var(--highlight-accent)" className="float-element" />
              </Flex>
              <Text fontSize="12px" color="var(--primary-accent)" mb="4px">
                $ npm run build:production
              </Text>
              <Text fontSize="12px" color="white" mb="4px">
                &gt; compiling typescript bundle...
              </Text>
              <Text fontSize="12px" color="var(--highlight-accent)">
                &gt; build successful. [0.89s]
              </Text>
            </Box>

            {/* Social Links floating overlay */}
            <Flex justify="center" mt="20px" gap="15px">
              <Link href="https://github.com/MatoG50" target="_blank" color="var(--text-secondary)" _hover={{ color: "white" }}>
                <Icon as={FaGithub} w="18px" h="18px" />
              </Link>
              <Link href="https://www.linkedin.com/in/martin-githinji-k/" target="_blank" color="var(--text-secondary)" _hover={{ color: "white" }}>
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
