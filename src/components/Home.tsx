import { Box, Flex, Grid, Heading, Text, Link, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight, FiDownload, FiZap } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { contactContent, heroContent } from "../data/portfolioData";

const MotionBox = motion(Box);

const Home = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const navbarHeight = 92;
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
      as="section"
      id="home"
      position="relative"
      minH={{ base: "auto", lg: "calc(100vh - 30px)" }}
      display="flex"
      alignItems="center"
      pt={{ base: "112px", md: "136px", lg: "120px" }}
      pb={{ base: "72px", md: "96px" }}
      px={{ base: "20px", md: "40px" }}
    >
      <Grid
        maxW="1140px"
        mx="auto"
        w="100%"
        templateColumns={{ base: "1fr", lg: "1.18fr 0.82fr" }}
        gap={{ base: "56px", lg: "52px" }}
        alignItems="center"
      >
        {/* Left: Bold, Uncluttered Personal Introduction */}
        <MotionBox
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          {/* Role Pill */}
          <Flex
            display="inline-flex"
            align="center"
            gap="10px"
            px="14px"
            py="6px"
            mb="26px"
            borderRadius="999px"
            bg="rgba(255, 255, 255, 0.04)"
            border="1px solid rgba(255, 255, 255, 0.1)"
          >
            <Box w="7px" h="7px" borderRadius="full" bg="var(--accent-emerald)" flexShrink={0} />
            <Text
              fontFamily="var(--font-mono)"
              fontSize={{ base: "10.5px", sm: "11.5px" }}
              fontWeight="500"
              letterSpacing="0.08em"
              color="var(--text-secondary)"
            >
              {heroContent.roleLabel}
            </Text>
          </Flex>

          {/* Sculptural Display Headline */}
          <Heading
            as="h1"
            fontFamily="var(--font-heading)"
            fontSize={{ base: "40px", sm: "54px", lg: "66px" }}
            fontWeight="800"
            lineHeight="1.03"
            letterSpacing="-0.04em"
            color="var(--text-primary)"
            mb="24px"
          >
            Full-stack software built for{" "}
            <Box as="span" className="headline-accent">
              real-world systems.
            </Box>
          </Heading>

          {/* Concise Supporting Intro */}
          <Text
            fontSize={{ base: "16.5px", md: "19px" }}
            lineHeight="1.65"
            color="var(--text-secondary)"
            mb="36px"
            maxW="530px"
          >
            I build full-stack web platforms, backend APIs, payment integrations, and practical AI-powered applications with Next.js, React, TypeScript, Node.js, and Python.
          </Text>

          {/* Primary & Secondary CTAs */}
          <Flex
            direction={{ base: "column", sm: "row" }}
            gap="12px"
            align={{ base: "stretch", sm: "center" }}
            mb="42px"
            flexWrap="wrap"
          >
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="btn-showcase-primary"
            >
              Explore Projects
              <Icon as={FiArrowDown} w="16px" h="16px" />
            </button>

            <a href="/resume.pdf" download className="btn-showcase-secondary">
              <Icon as={FiDownload} w="15px" h="15px" color="var(--accent-cyan)" />
              Resume
            </a>

            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              fontSize="14.5px"
              fontWeight="600"
              color="#CBD5E1"
              px={{ base: "0", sm: "12px" }}
              py="8px"
              display="inline-flex"
              alignItems="center"
              justifyContent={{ base: "center", sm: "flex-start" }}
              gap="5px"
              _hover={{ color: "#FFFFFF", textDecoration: "none" }}
              _focusVisible={{ outline: "2px solid var(--accent-cyan)", outlineOffset: "3px", borderRadius: "6px" }}
              transition="color 0.2s ease"
            >
              Contact
              <Icon as={FiArrowUpRight} w="15px" h="15px" />
            </Link>
          </Flex>

          {/* Minimal Tech & Social Footer Strip */}
          <Flex
            direction={{ base: "column", sm: "row" }}
            align={{ base: "flex-start", sm: "center" }}
            justify="space-between"
            gap="16px"
            pt="24px"
            borderTop="1px solid rgba(255, 255, 255, 0.08)"
            maxW="560px"
          >
            <Flex align="center" gap="8px" flexWrap="wrap">
              {heroContent.coreStack.map((tech, idx) => (
                <Flex key={tech} align="center" gap="8px">
                  <Text fontFamily="var(--font-mono)" fontSize="12px" color="var(--text-secondary)">
                    {tech}
                  </Text>
                  {idx < heroContent.coreStack.length - 1 && (
                    <Text as="span" color="var(--text-muted)" fontSize="11px" aria-hidden="true">
                      ·
                    </Text>
                  )}
                </Flex>
              ))}
            </Flex>

            <Flex align="center" gap="14px" flexShrink={0}>
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
            </Flex>
          </Flex>
        </MotionBox>

        {/* Right: Layered Interactive Visual Showcase Composition */}
        <MotionBox
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          position="relative"
        >
          {/* Ambient Studio Halo behind Showcase Stack */}
          <Box
            position="absolute"
            inset="-18px"
            bg="radial-gradient(circle at 55% 45%, rgba(34, 211, 238, 0.16), rgba(129, 140, 248, 0.14) 45%, transparent 72%)"
            filter="blur(24px)"
            pointerEvents="none"
            zIndex="0"
          />

          <Flex direction="column" gap="14px" position="relative" zIndex="1">
            {/* Showcase Tile 1: Kisima AI */}
            <Box
              as="button"
              type="button"
              onClick={() => scrollToSection("project-kisima-ai")}
              className="hero-preview-card"
              textAlign="left"
              w="100%"
              p="18px"
              borderRadius="18px"
              bg="linear-gradient(145deg, rgba(11, 24, 34, 0.92), rgba(9, 14, 24, 0.92))"
              border="1px solid rgba(34, 211, 238, 0.28)"
              cursor="pointer"
              boxShadow="0 20px 44px -18px rgba(0, 0, 0, 0.8)"
            >
              <Flex justify="space-between" align="center" mb="10px">
                <Flex align="center" gap="8px">
                  <Box w="8px" h="8px" borderRadius="full" bg="#22D3EE" />
                  <Text fontFamily="var(--font-heading)" fontSize="14px" fontWeight="700" color="white">
                    Kisima AI
                  </Text>
                </Flex>
                <Text fontFamily="var(--font-mono)" fontSize="10px" color="#34D399">
                  LIVE · RAG + FASTAPI
                </Text>
              </Flex>

              <Box as="svg" viewBox="0 0 260 66" w="100%" h="62px" display="block" mb="8px" aria-hidden="true">
                <defs>
                  <linearGradient id="heroCurveGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#34D399" />
                    <stop offset="100%" stopColor="#22D3EE" />
                  </linearGradient>
                </defs>
                <path
                  d="M8 14 C 78 15, 145 26, 248 58"
                  fill="none"
                  stroke="url(#heroCurveGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="136" cy="27" r="6" fill="rgba(52, 211, 153, 0.24)" />
                <circle cx="136" cy="27" r="3" fill="#34D399" />
              </Box>

              <Flex justify="space-between" align="center">
                <Text fontSize="12px" color="#94A3B8">
                  Hydraulic pump sizing &amp; grounded RAG
                </Text>
                <Icon as={FiArrowUpRight} w="14px" h="14px" color="#22D3EE" />
              </Flex>
            </Box>

            {/* Bottom Staggered Pair: Outside.vip + Issue Tracker */}
            <Grid templateColumns={{ base: "1fr", sm: "1fr 1fr" }} gap="14px">
              <Box
                as="button"
                type="button"
                onClick={() => scrollToSection("project-outside-vip")}
                className="hero-preview-card"
                textAlign="left"
                p="16px"
                borderRadius="18px"
                bg="linear-gradient(150deg, rgba(28, 15, 42, 0.92), rgba(14, 12, 26, 0.94))"
                border="1px solid rgba(168, 85, 247, 0.28)"
                cursor="pointer"
                boxShadow="0 18px 40px -18px rgba(0, 0, 0, 0.8)"
              >
                <Flex justify="space-between" align="center" mb="10px">
                  <Text fontFamily="var(--font-heading)" fontSize="13.5px" fontWeight="700" color="white">
                    Outside.vip
                  </Text>
                  <Box w="7px" h="7px" borderRadius="full" bg="#F59E0B" />
                </Flex>
                <Text fontSize="12px" color="#CBD5E1" lineHeight="1.5" mb="12px">
                  Event ticketing, Stripe &amp; QR check-in
                </Text>
                <Flex justify="space-between" align="center">
                  <Text fontFamily="var(--font-mono)" fontSize="10px" color="#D8B4FE">
                    WIP · FULL-STACK
                  </Text>
                  <Icon as={FiArrowUpRight} w="13px" h="13px" color="#D8B4FE" />
                </Flex>
              </Box>

              <Box
                as="button"
                type="button"
                onClick={() => scrollToSection("project-issue-tracker")}
                className="hero-preview-card"
                textAlign="left"
                p="16px"
                borderRadius="18px"
                bg="linear-gradient(150deg, rgba(16, 20, 44, 0.92), rgba(11, 14, 28, 0.94))"
                border="1px solid rgba(129, 140, 248, 0.3)"
                cursor="pointer"
                boxShadow="0 18px 40px -18px rgba(0, 0, 0, 0.8)"
              >
                <Flex justify="space-between" align="center" mb="10px">
                  <Flex align="center" gap="6px">
                    <Icon as={FiZap} w="12px" h="12px" color="#818CF8" />
                    <Text fontFamily="var(--font-heading)" fontSize="13.5px" fontWeight="700" color="white">
                      Issue Tracker
                    </Text>
                  </Flex>
                  <Box w="7px" h="7px" borderRadius="full" bg="#818CF8" />
                </Flex>
                <Text fontSize="12px" color="#CBD5E1" lineHeight="1.5" mb="12px">
                  Next.js 14 App Router, Prisma &amp; NextAuth
                </Text>
                <Flex justify="space-between" align="center">
                  <Text fontFamily="var(--font-mono)" fontSize="10px" color="#A5B4FC">
                    NEXT.JS SHOWCASE
                  </Text>
                  <Icon as={FiArrowUpRight} w="13px" h="13px" color="#A5B4FC" />
                </Flex>
              </Box>
            </Grid>

            <Text
              fontFamily="var(--font-mono)"
              fontSize="10px"
              color="var(--text-muted)"
              textAlign={{ base: "left", lg: "right" }}
            >
              Illustrative previews · Select any project to jump down
            </Text>
          </Flex>
        </MotionBox>
      </Grid>
    </Box>
  );
};

export default Home;
