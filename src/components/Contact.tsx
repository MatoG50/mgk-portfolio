import { Box, Flex, Grid, Heading, Text, Link, Icon, useClipboard, useToast, IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiCopy, FiCheck, FiExternalLink } from "react-icons/fi";

const MotionBox = motion(Box);

const Contact = () => {
  const email = "matog50@gmail.com";
  const { hasCopied, onCopy } = useClipboard(email);
  const toast = useToast();

  const handleCopy = () => {
    onCopy();
    toast({
      title: "Email Copied",
      description: "Email address has been copied to your clipboard.",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "bottom-right",
    });
  };

  return (
    <Box
      id="contact"
      py={{ base: "80px", md: "100px" }}
      px={{ base: "20px", md: "60px" }}
      maxW="1200px"
      mx="auto"
    >
      <span className="section-tag">03 / CONNECT</span>
      
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass-card"
        p={{ base: "25px", md: "50px" }}
        mt="20px"
      >
        <Grid templateColumns={{ base: "1fr", lg: "1.1fr 1fr" }} gap="50px" alignItems="center">
          
          {/* Left Column: Heading & Paragraph */}
          <Flex direction="column" gap="20px">
            <Heading
              fontSize={{ base: "32px", md: "46px" }}
              fontWeight="800"
              lineHeight="1.15"
              color="white"
              letterSpacing="-0.02em"
            >
              Let's build something <br />
              <span className="gradient-text-purple" style={{ fontWeight: "800", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>remarkable.</span>
            </Heading>
            
            <Text fontSize="15px" color="var(--text-secondary)" lineHeight="1.7">
              Whether you are looking to integrate dynamic B2B system APIs, deploy custom machine learning models, launch a highly scalable React storefront, or hire an engineer with a strong ownership mindset to drive production outcomes, I am ready to collaborate.
            </Text>

            <Flex align="center" gap="10px" mt="10px">
              <Icon as={FiMapPin} color="var(--primary-accent)" w="16px" h="16px" />
              <Text fontSize="14px" color="var(--text-muted)" fontWeight="500">
                Nairobi, Kenya • PO BOX 00101 • Remote / Hybrid
              </Text>
            </Flex>
          </Flex>

          {/* Right Column: Interaction cards */}
          <Flex direction="column" gap="16px">
            
            {/* Email card */}
            <Box
              bg="rgba(255, 255, 255, 0.02)"
              border="1px solid rgba(255, 255, 255, 0.05)"
              p="18px"
              borderRadius="14px"
              position="relative"
              _hover={{ borderColor: "var(--primary-accent)" }}
              transition="border-color 0.2s"
            >
              <Flex justify="space-between" align="center">
                <Flex align="center" gap="12px">
                  <Flex w="36px" h="36px" bg="rgba(0, 242, 254, 0.08)" borderRadius="8px" align="center" justify="center">
                    <Icon as={FiMail} color="var(--primary-accent)" w="18px" h="18px" />
                  </Flex>
                  <Box>
                    <Text fontSize="11px" color="var(--text-muted)" fontWeight="600" letterSpacing="0.05em">EMAIL DIRECT</Text>
                    <Link href={`mailto:${email}`} fontSize="14px" fontWeight="700" color="white" _hover={{ color: "var(--primary-accent)" }}>
                      {email}
                    </Link>
                  </Box>
                </Flex>
                <IconButton
                  aria-label="Copy Email"
                  onClick={handleCopy}
                  size="sm"
                  bg="rgba(255, 255, 255, 0.04)"
                  _hover={{ bg: "rgba(255, 255, 255, 0.08)" }}
                  color="var(--text-secondary)"
                  icon={<Icon as={hasCopied ? FiCheck : FiCopy} color={hasCopied ? "var(--highlight-accent)" : "inherit"} />}
                />
              </Flex>
            </Box>

            {/* LinkedIn card */}
            <Link
              href="https://www.linkedin.com/in/martin-githinji-k/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Box
                bg="rgba(255, 255, 255, 0.02)"
                border="1px solid rgba(255, 255, 255, 0.05)"
                p="18px"
                borderRadius="14px"
                _hover={{ borderColor: "var(--secondary-accent)", bg: "rgba(255, 255, 255, 0.03)" }}
                transition="all 0.2s"
              >
                <Flex align="center" justify="space-between">
                  <Flex align="center" gap="12px">
                    <Flex w="36px" h="36px" bg="rgba(127, 0, 255, 0.08)" borderRadius="8px" align="center" justify="center">
                      <Icon as={FiLinkedin} color="var(--secondary-accent)" w="18px" h="18px" />
                    </Flex>
                    <Box>
                      <Text fontSize="11px" color="var(--text-muted)" fontWeight="600" letterSpacing="0.05em">PROFESSIONAL NETWORK</Text>
                      <Text fontSize="14px" fontWeight="700" color="white">martin-githinji-k</Text>
                    </Box>
                  </Flex>
                  <Icon as={FiExternalLink} color="var(--text-muted)" />
                </Flex>
              </Box>
            </Link>

            {/* GitHub card */}
            <Link
              href="https://github.com/MatoG50"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Box
                bg="rgba(255, 255, 255, 0.02)"
                border="1px solid rgba(255, 255, 255, 0.05)"
                p="18px"
                borderRadius="14px"
                _hover={{ borderColor: "white", bg: "rgba(255, 255, 255, 0.03)" }}
                transition="all 0.2s"
              >
                <Flex align="center" justify="space-between">
                  <Flex align="center" gap="12px">
                    <Flex w="36px" h="36px" bg="rgba(255, 255, 255, 0.05)" borderRadius="8px" align="center" justify="center">
                      <Icon as={FiGithub} color="white" w="18px" h="18px" />
                    </Flex>
                    <Box>
                      <Text fontSize="11px" color="var(--text-muted)" fontWeight="600" letterSpacing="0.05em">CODE REPOSITORIES</Text>
                      <Text fontSize="14px" fontWeight="700" color="white">MatoG50</Text>
                    </Box>
                  </Flex>
                  <Icon as={FiExternalLink} color="var(--text-muted)" />
                </Flex>
              </Box>
            </Link>

            {/* Telephone card */}
            <Box
              bg="rgba(255, 255, 255, 0.02)"
              border="1px solid rgba(255, 255, 255, 0.05)"
              p="18px"
              borderRadius="14px"
              _hover={{ borderColor: "var(--highlight-accent)" }}
              transition="border-color 0.2s"
            >
              <Flex align="center" justify="space-between">
                <Flex align="center" gap="12px">
                  <Flex w="36px" h="36px" bg="rgba(16, 185, 129, 0.08)" borderRadius="8px" align="center" justify="center">
                    <Icon as={FiPhone} color="var(--highlight-accent)" w="18px" h="18px" />
                  </Flex>
                  <Box>
                    <Text fontSize="11px" color="var(--text-muted)" fontWeight="600" letterSpacing="0.05em">DIRECT PHONE</Text>
                    <Link href="tel:+254724979592" fontSize="14px" fontWeight="700" color="white" _hover={{ color: "var(--highlight-accent)" }}>
                      +254 724 979 592
                    </Link>
                  </Box>
                </Flex>
              </Flex>
            </Box>

          </Flex>
        </Grid>
      </MotionBox>
    </Box>
  );
};



export default Contact;
