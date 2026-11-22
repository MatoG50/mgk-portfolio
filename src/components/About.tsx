import { useState } from "react";
import { Box, Flex, Grid, Heading, Text, Icon, Collapse } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiCpu, FiLayers, FiDatabase, FiGlobe, FiAward, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { aboutContent, educationList, skillCategories } from "../data/portfolioData";

const MotionBox = motion(Box);

const categoryMeta: Record<string, { icon: typeof FiGlobe; color: string; glow: string; border: string }> = {
  frontend: {
    icon: FiGlobe,
    color: "#22D3EE",
    glow: "radial-gradient(circle at 0% 0%, rgba(34, 211, 238, 0.14), transparent 60%)",
    border: "rgba(34, 211, 238, 0.22)",
  },
  backend: {
    icon: FiLayers,
    color: "#818CF8",
    glow: "radial-gradient(circle at 0% 0%, rgba(129, 140, 248, 0.14), transparent 60%)",
    border: "rgba(129, 140, 248, 0.22)",
  },
  "databases-tools": {
    icon: FiDatabase,
    color: "#F59E0B",
    glow: "radial-gradient(circle at 0% 0%, rgba(245, 158, 11, 0.12), transparent 60%)",
    border: "rgba(245, 158, 11, 0.22)",
  },
  "ai-app-dev": {
    icon: FiCpu,
    color: "#34D399",
    glow: "radial-gradient(circle at 0% 0%, rgba(52, 211, 153, 0.12), transparent 60%)",
    border: "rgba(52, 211, 153, 0.22)",
  },
};

const About = () => {
  const [showMoreBio, setShowMoreBio] = useState(false);

  return (
    <Box
      as="section"
      id="about"
      py={{ base: "72px", md: "104px" }}
      px={{ base: "20px", md: "40px" }}
      borderTop="1px solid rgba(255, 255, 255, 0.06)"
    >
      <Box maxW="1140px" mx="auto">
        {/* Top Open Editorial Intro + Education Strip */}
        <Grid
          templateColumns={{ base: "1fr", lg: "1.15fr 0.85fr" }}
          gap={{ base: "36px", lg: "56px" }}
          alignItems="start"
          mb={{ base: "48px", md: "60px" }}
        >
          {/* Short Personal Intro */}
          <MotionBox
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 0.45 }}
          >
            <span className="section-eyebrow">02 / About &amp; Stack</span>
            <Heading
              as="h2"
              fontFamily="var(--font-heading)"
              fontSize={{ base: "30px", md: "42px" }}
              fontWeight="800"
              letterSpacing="-0.035em"
              lineHeight="1.1"
              color="var(--text-primary)"
              mb="18px"
            >
              {aboutContent.heading}
            </Heading>

            <Text fontSize={{ base: "16px", md: "17.5px" }} lineHeight="1.7" color="var(--text-secondary)" mb="14px">
              {aboutContent.paragraphs[0]}
            </Text>

            <Collapse in={showMoreBio} animateOpacity>
              <Flex direction="column" gap="12px" mb="14px">
                {aboutContent.paragraphs.slice(1).map((p) => (
                  <Text key={p} fontSize="14.5px" lineHeight="1.7" color="var(--text-muted)">
                    {p}
                  </Text>
                ))}
              </Flex>
            </Collapse>

            <Box
              as="button"
              type="button"
              onClick={() => setShowMoreBio((prev) => !prev)}
              aria-expanded={showMoreBio}
              display="inline-flex"
              alignItems="center"
              gap="6px"
              fontFamily="var(--font-mono)"
              fontSize="11.5px"
              fontWeight="600"
              color="var(--accent-cyan)"
              bg="transparent"
              border="none"
              cursor="pointer"
              p="0"
              _hover={{ opacity: 0.85 }}
            >
              {showMoreBio ? "Less background" : "More about my background"}
              <Icon as={showMoreBio ? FiChevronUp : FiChevronDown} w="14px" h="14px" />
            </Box>
          </MotionBox>

          {/* Compact Completed Education Column */}
          <MotionBox
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <Flex direction="column" gap="14px" pt={{ base: "0", lg: "28px" }}>
              {educationList.map((edu, idx) => (
                <Box
                  key={edu.degree}
                  p="18px 20px"
                  borderRadius="16px"
                  bg={
                    idx === 0
                      ? "linear-gradient(135deg, rgba(34, 211, 238, 0.08), rgba(15, 19, 31, 0.72))"
                      : "rgba(17, 20, 31, 0.55)"
                  }
                  border="1px solid"
                  borderColor={idx === 0 ? "rgba(34, 211, 238, 0.25)" : "rgba(255, 255, 255, 0.08)"}
                >
                  <Flex justify="space-between" align="center" gap="8px" mb="6px" flexWrap="wrap">
                    <Flex align="center" gap="7px">
                      <Icon
                        as={FiAward}
                        w="14px"
                        h="14px"
                        color={idx === 0 ? "var(--accent-cyan)" : "var(--text-muted)"}
                      />
                      <Text fontFamily="var(--font-mono)" fontSize="10.5px" color="var(--text-muted)">
                        {edu.period}
                      </Text>
                    </Flex>
                    <Flex
                      align="center"
                      gap="5px"
                      px="8px"
                      py="2px"
                      borderRadius="999px"
                      bg="rgba(52, 211, 153, 0.12)"
                      border="1px solid rgba(52, 211, 153, 0.28)"
                    >
                      <Box w="5px" h="5px" borderRadius="full" bg="#34D399" />
                      <Text fontFamily="var(--font-mono)" fontSize="10px" fontWeight="600" color="#34D399">
                        {edu.status}
                      </Text>
                    </Flex>
                  </Flex>

                  <Heading
                    as="h3"
                    fontFamily="var(--font-heading)"
                    fontSize="15.5px"
                    fontWeight="700"
                    color="var(--text-primary)"
                    mb="2px"
                  >
                    {edu.degree}
                  </Heading>
                  <Text fontSize="13.5px" color="var(--text-secondary)">
                    {edu.institution}
                  </Text>
                </Box>
              ))}
            </Flex>
          </MotionBox>
        </Grid>

        {/* Compact 2x2 Visual Skills Bento */}
        <Box>
          <Flex justify="space-between" align="center" mb="18px" flexWrap="wrap" gap="10px">
            <Text
              fontFamily="var(--font-mono)"
              fontSize="11px"
              fontWeight="600"
              letterSpacing="0.12em"
              textTransform="uppercase"
              color="var(--text-muted)"
            >
              Core Toolkit
            </Text>
            <Flex align="center" gap="14px" fontFamily="var(--font-mono)" fontSize="10.5px" color="var(--text-muted)">
              <Flex align="center" gap="6px">
                <Box w="8px" h="8px" borderRadius="full" bg="rgba(255,255,255,0.2)" border="1px solid rgba(255,255,255,0.3)" />
                <Text>Core</Text>
              </Flex>
              <Flex align="center" gap="6px">
                <Box w="8px" h="8px" borderRadius="full" border="1px dashed var(--text-muted)" />
                <Text>Familiar</Text>
              </Flex>
            </Flex>
          </Flex>

          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="18px">
            {skillCategories.map((cat, idx) => {
              const meta = categoryMeta[cat.id] || categoryMeta.frontend;
              return (
                <MotionBox
                  key={cat.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: "some" }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  p={{ base: "20px", md: "24px" }}
                  borderRadius="18px"
                  bg="var(--bg-surface)"
                  backgroundImage={meta.glow}
                  border="1px solid rgba(255, 255, 255, 0.08)"
                  _hover={{ borderColor: meta.border }}
                  transitionProperty="border-color"
                  transitionDuration="0.2s"
                >
                  <Flex align="center" gap="10px" mb="14px">
                    <Flex
                      w="30px"
                      h="30px"
                      borderRadius="8px"
                      bg="rgba(255,255,255,0.04)"
                      border="1px solid rgba(255,255,255,0.08)"
                      align="center"
                      justify="center"
                    >
                      <Icon as={meta.icon} color={meta.color} w="15px" h="15px" />
                    </Flex>
                    <Text fontFamily="var(--font-heading)" fontSize="15.5px" fontWeight="700" color="var(--text-primary)">
                      {cat.title}
                    </Text>
                  </Flex>

                  <Flex gap="8px" flexWrap="wrap">
                    {cat.skills.map((skill) => {
                      const isFamiliar = Boolean(skill.note);
                      return (
                        <Box
                          key={skill.name}
                          px="11px"
                          py="5px"
                          borderRadius="999px"
                          fontSize="12.5px"
                          fontWeight={isFamiliar ? "400" : "500"}
                          color={isFamiliar ? "var(--text-muted)" : "#E2E8F0"}
                          bg={isFamiliar ? "transparent" : "rgba(255, 255, 255, 0.05)"}
                          border={isFamiliar ? "1px dashed rgba(255, 255, 255, 0.18)" : "1px solid rgba(255, 255, 255, 0.1)"}
                        >
                          {skill.name}
                          {skill.note && (
                            <Text as="span" ml="5px" fontFamily="var(--font-mono)" fontSize="10px" color="var(--text-muted)">
                              ({skill.note})
                            </Text>
                          )}
                        </Box>
                      );
                    })}
                  </Flex>

                  {cat.footnote && (
                    <Text fontSize="11.5px" color="var(--text-muted)" mt="12px" lineHeight="1.5">
                      {cat.footnote}
                    </Text>
                  )}
                </MotionBox>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
