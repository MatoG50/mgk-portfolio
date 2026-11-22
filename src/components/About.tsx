import { Box, Flex, Grid, Heading, Text, Icon, Badge } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiBookOpen, FiCpu, FiLayers, FiDatabase, FiGlobe, FiAward } from "react-icons/fi";
import { aboutContent, educationList, skillCategories } from "../data/portfolioData";

const MotionBox = motion(Box);

const categoryIcons: Record<string, typeof FiGlobe> = {
  frontend: FiGlobe,
  backend: FiLayers,
  "databases-tools": FiDatabase,
  "ai-app-dev": FiCpu,
};

const About = () => {
  return (
    <Box
      id="about"
      py={{ base: "80px", md: "100px" }}
      px={{ base: "20px", md: "60px" }}
      maxW="1200px"
      mx="auto"
      position="relative"
    >
      <Flex direction="column" gap="45px">
        {/* Section Header */}
        <Box>
          <span className="section-tag">01 / ABOUT ME</span>
          <Heading
            fontSize={{ base: "32px", md: "42px" }}
            fontWeight="800"
            letterSpacing="-0.02em"
            mb="15px"
          >
            {aboutContent.heading}
          </Heading>
          <Box
            w="60px"
            h="4px"
            bg="linear-gradient(90deg, var(--primary-accent), var(--secondary-accent))"
            borderRadius="2px"
          />
        </Box>

        {/* About Grid */}
        <Grid templateColumns={{ base: "1fr", lg: "1.15fr 1fr" }} gap="40px" alignItems="start">
          {/* Left Block: Bio & Education */}
          <Flex direction="column" gap="22px">
            <Text
              fontSize={{ base: "17px", md: "18px" }}
              lineHeight="1.7"
              color="var(--text-primary)"
              fontWeight="500"
            >
              {aboutContent.paragraphs[0]}
            </Text>

            {aboutContent.paragraphs.slice(1).map((paragraph) => (
              <Text key={paragraph} fontSize="15px" lineHeight="1.7" color="var(--text-secondary)">
                {paragraph}
              </Text>
            ))}

            {/* Education Cards */}
            <Flex direction="column" gap="16px" mt="6px">
              {educationList.map((edu, idx) => (
                <MotionBox
                  key={edu.degree}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card"
                  p="22px"
                  borderLeft={`4px solid ${idx === 0 ? "var(--primary-accent)" : "var(--secondary-accent)"}`}
                  bg={idx === 0 ? "rgba(0, 242, 254, 0.02)" : "rgba(127, 0, 255, 0.02)"}
                >
                  <Flex gap="16px" align="flex-start">
                    <Flex
                      w="44px"
                      h="44px"
                      bg={idx === 0 ? "rgba(0, 242, 254, 0.08)" : "rgba(127, 0, 255, 0.08)"}
                      borderRadius="12px"
                      align="center"
                      justify="center"
                      flexShrink={0}
                    >
                      <Icon
                        as={idx === 0 ? FiAward : FiBookOpen}
                        color={idx === 0 ? "var(--primary-accent)" : "var(--secondary-accent)"}
                        w="20px"
                        h="20px"
                      />
                    </Flex>
                    <Box flex="1">
                      <Flex justify="space-between" align="center" flexWrap="wrap" gap="8px">
                        <Text
                          fontSize="11px"
                          fontWeight="700"
                          color={idx === 0 ? "var(--primary-accent)" : "var(--secondary-accent)"}
                          letterSpacing="0.05em"
                          textTransform="uppercase"
                        >
                          EDUCATION | {edu.period}
                        </Text>
                        <Badge colorScheme="green" fontSize="10px" px="8px" py="1px" borderRadius="4px">
                          {edu.status}
                        </Badge>
                      </Flex>
                      <Heading as="h4" fontSize="16px" fontWeight="700" color="white" mt="4px" mb="4px">
                        {edu.degree}
                      </Heading>
                      <Text fontSize="14px" color="var(--text-secondary)" fontWeight="600">
                        {edu.institution}
                      </Text>
                      <Text fontSize="12px" color="var(--text-muted)" mt="6px" lineHeight="1.55">
                        {edu.details}
                      </Text>
                    </Box>
                  </Flex>
                </MotionBox>
              ))}
            </Flex>
          </Flex>

          {/* Right Block: Core Skills Stack */}
          <Flex direction="column" gap="22px">
            <Box>
              <Heading as="h3" fontSize="20px" fontWeight="700" mb="8px" color="white">
                Skills & Technologies
              </Heading>
              <Text fontSize="13px" color="var(--text-muted)">
                Organized by domain and grounded in actual projects and engineering work.
              </Text>
            </Box>

            <Flex direction="column" gap="16px">
              {skillCategories.map((cat, idx) => (
                <MotionBox
                  key={cat.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  bg="rgba(255, 255, 255, 0.02)"
                  border="1px solid rgba(255, 255, 255, 0.05)"
                  borderRadius="14px"
                  p="18px 20px"
                  _hover={{ borderColor: cat.color }}
                  style={{ transition: "border-color 0.2s" }}
                >
                  <Flex direction="column" gap="12px">
                    <Flex align="center" gap="10px">
                      <Icon as={categoryIcons[cat.id] || FiGlobe} color={cat.color} w="16px" h="16px" />
                      <Text fontSize="14px" fontWeight="700" color="white">
                        {cat.title}
                      </Text>
                    </Flex>

                    <Flex gap="7px" flexWrap="wrap">
                      {cat.skills.map((skill) => (
                        <Box
                          key={skill.name}
                          bg="rgba(255, 255, 255, 0.03)"
                          border="1px solid rgba(255, 255, 255, 0.06)"
                          borderRadius="6px"
                          px="10px"
                          py="4px"
                          fontSize="12px"
                          color={skill.note ? "var(--text-muted)" : "var(--text-secondary)"}
                          _hover={{ color: "white", bg: "rgba(255, 255, 255, 0.08)" }}
                          transition="all 0.2s"
                        >
                          {skill.name}
                          {skill.note ? ` (${skill.note})` : ""}
                        </Box>
                      ))}
                    </Flex>

                    {cat.footnote && (
                      <Text fontSize="11px" color="var(--text-muted)" lineHeight="1.5">
                        {cat.footnote}
                      </Text>
                    )}
                  </Flex>
                </MotionBox>
              ))}
            </Flex>
          </Flex>
        </Grid>
      </Flex>
    </Box>
  );
};

export default About;
