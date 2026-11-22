import { Box, Flex, Heading, Text, Link, Icon, useClipboard, useToast } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiCopy,
  FiCheck,
  FiArrowUpRight,
} from "react-icons/fi";
import { contactContent } from "../data/portfolioData";

const MotionBox = motion(Box);

const Contact = () => {
  const { hasCopied, onCopy } = useClipboard(contactContent.email);
  const toast = useToast();

  const handleCopy = () => {
    onCopy();
    toast({
      title: "Email copied",
      description: `${contactContent.email} copied to clipboard.`,
      status: "success",
      duration: 2500,
      isClosable: true,
      position: "bottom-right",
    });
  };

  return (
    <Box
      as="section"
      id="contact"
      py={{ base: "76px", md: "112px" }}
      px={{ base: "20px", md: "40px" }}
      borderTop="1px solid rgba(255, 255, 255, 0.06)"
    >
      <MotionBox
        maxW="920px"
        mx="auto"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: "some" }}
        transition={{ duration: 0.5 }}
        position="relative"
        borderRadius="28px"
        p={{ base: "32px 24px", md: "56px 48px" }}
        bg="linear-gradient(145deg, rgba(16, 22, 38, 0.92), rgba(10, 12, 22, 0.95))"
        border="1px solid rgba(255, 255, 255, 0.1)"
        overflow="hidden"
        textAlign="center"
      >
        {/* Subtle Top Center Spotlight */}
        <Box
          position="absolute"
          top="-80px"
          left="50%"
          transform="translateX(-50%)"
          w="380px"
          h="200px"
          bg="radial-gradient(circle, rgba(34, 211, 238, 0.2), rgba(129, 140, 248, 0.12) 45%, transparent 72%)"
          filter="blur(24px)"
          pointerEvents="none"
        />

        <Flex direction="column" align="center" gap="22px" position="relative" zIndex="1">
          <span className="section-eyebrow">03 / Connect</span>

          <Heading
            as="h2"
            fontFamily="var(--font-heading)"
            fontSize={{ base: "32px", sm: "42px", md: "50px" }}
            fontWeight="800"
            lineHeight="1.08"
            letterSpacing="-0.035em"
            color="var(--text-primary)"
            maxW="620px"
          >
            {contactContent.headingLine1}{" "}
            <Box as="span" className="headline-accent">
              {contactContent.headingHighlight}
            </Box>
          </Heading>

          <Text fontSize={{ base: "15.5px", md: "17px" }} color="var(--text-secondary)" lineHeight="1.65" maxW="500px">
            {contactContent.description}
          </Text>

          <Flex
            direction={{ base: "column", sm: "row" }}
            gap="12px"
            pt="6px"
            w={{ base: "100%", sm: "auto" }}
            justify="center"
          >
            <Link
              href={`mailto:${contactContent.email}`}
              className="btn-showcase-primary"
              color="#07080D"
              _hover={{ color: "#07080D", textDecoration: "none" }}
              _active={{ color: "#07080D" }}
              _focus={{ color: "#07080D" }}
            >
              <Icon as={FiMail} w="15px" h="15px" color="#07080D" />
              Email Me
              <Icon as={FiArrowUpRight} w="15px" h="15px" color="#07080D" />
            </Link>

            <button type="button" onClick={handleCopy} className="btn-showcase-secondary">
              <Icon
                as={hasCopied ? FiCheck : FiCopy}
                w="15px"
                h="15px"
                color={hasCopied ? "var(--accent-emerald)" : "var(--accent-cyan)"}
              />
              {hasCopied ? "Copied" : contactContent.email}
            </button>
          </Flex>

          {/* Compact Inline Direct Channels */}
          <Flex
            justify="center"
            align="center"
            gap={{ base: "10px", sm: "14px" }}
            flexWrap="wrap"
            pt="18px"
            mt="6px"
            borderTop="1px solid rgba(255, 255, 255, 0.08)"
            w="100%"
          >
            <Link
              href={contactContent.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              display="inline-flex"
              alignItems="center"
              gap="7px"
              px="14px"
              py="7px"
              borderRadius="999px"
              bg="rgba(255,255,255,0.03)"
              border="1px solid rgba(255,255,255,0.08)"
              fontSize="13px"
              color="var(--text-secondary)"
              _hover={{ color: "white", borderColor: "rgba(255,255,255,0.2)", textDecoration: "none" }}
              transition="all 0.18s ease"
            >
              <Icon as={FiLinkedin} w="14px" h="14px" color="var(--accent-indigo)" />
              LinkedIn
            </Link>

            <Link
              href={contactContent.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              display="inline-flex"
              alignItems="center"
              gap="7px"
              px="14px"
              py="7px"
              borderRadius="999px"
              bg="rgba(255,255,255,0.03)"
              border="1px solid rgba(255,255,255,0.08)"
              fontSize="13px"
              color="var(--text-secondary)"
              _hover={{ color: "white", borderColor: "rgba(255,255,255,0.2)", textDecoration: "none" }}
              transition="all 0.18s ease"
            >
              <Icon as={FiGithub} w="14px" h="14px" color="white" />
              GitHub
            </Link>

            <Link
              href={contactContent.phoneHref}
              display="inline-flex"
              alignItems="center"
              gap="7px"
              px="14px"
              py="7px"
              borderRadius="999px"
              bg="rgba(255,255,255,0.03)"
              border="1px solid rgba(255,255,255,0.08)"
              fontSize="13px"
              color="var(--text-secondary)"
              _hover={{ color: "white", borderColor: "rgba(255,255,255,0.2)", textDecoration: "none" }}
              transition="all 0.18s ease"
            >
              <Icon as={FiPhone} w="14px" h="14px" color="var(--accent-emerald)" />
              {contactContent.phone}
            </Link>

            <Flex
              align="center"
              gap="6px"
              px="12px"
              py="7px"
              fontSize="12.5px"
              color="var(--text-muted)"
            >
              <Icon as={FiMapPin} w="13px" h="13px" color="var(--accent-cyan)" />
              <Text>{contactContent.location}</Text>
            </Flex>
          </Flex>
        </Flex>
      </MotionBox>
    </Box>
  );
};

export default Contact;
