import { Box, Flex, Grid, Heading, Text, Icon, Badge } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiBriefcase, FiMapPin, FiCalendar } from "react-icons/fi";
import { experienceList } from "../data/portfolioData";

const MotionBox = motion(Box);

const Experience = () => {
  return (
    <Box
      id="experience"
      py={{ base: "80px", md: "100px" }}
      px={{ base: "20px", md: "60px" }}
      maxW="1200px"
      mx="auto"
      position="relative"
    >
      <Flex direction="column" gap="45px">
        {/* Section Header */}
        <Box>
          <span className="section-tag">02 / EXPERIENCE</span>
          <Heading
            fontSize={{ base: "32px", md: "42px" }}
            fontWeight="800"
            letterSpacing="-0.02em"
            mb="15px"
          >
            Professional Experience.
          </Heading>
          <Text color="var(--text-secondary)" fontSize="16px" maxW="640px">
            Combining full-stack software development with client-facing engineering experience grounded in real operational requirements.
          </Text>
          <Box
            w="60px"
            h="4px"
            bg="linear-gradient(90deg, var(--primary-accent), var(--secondary-accent))"
            borderRadius="2px"
            mt="20px"
          />
        </Box>

        {/* Experience Cards */}
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap="30px" alignItems="stretch">
          {experienceList.map((exp, idx) => (
            <MotionBox
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card"
              p={{ base: "25px", md: "35px" }}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              gap="20px"
            >
              <Flex direction="column" gap="18px">
                <Flex justify="space-between" align="flex-start" flexWrap="wrap" gap="12px">
                  <Flex align="center" gap="12px">
                    <Flex
                      w="42px"
                      h="42px"
                      borderRadius="10px"
                      bg={idx === 0 ? "rgba(0, 242, 254, 0.08)" : "rgba(127, 0, 255, 0.08)"}
                      align="center"
                      justify="center"
                      flexShrink={0}
                    >
                      <Icon
                        as={FiBriefcase}
                        color={idx === 0 ? "var(--primary-accent)" : "var(--secondary-accent)"}
                        w="20px"
                        h="20px"
                      />
                    </Flex>
                    <Box>
                      <Heading as="h3" fontSize="20px" fontWeight="800" color="white">
                        {exp.company}
                      </Heading>
                      <Text fontSize="14px" fontWeight="600" color="var(--primary-accent)">
                        {exp.role}
                      </Text>
                    </Box>
                  </Flex>

                  <Badge
                    bg="rgba(255, 255, 255, 0.04)"
                    color="var(--text-secondary)"
                    border="1px solid rgba(255, 255, 255, 0.08)"
                    px="10px"
                    py="3px"
                    borderRadius="6px"
                    fontSize="11px"
                    textTransform="none"
                  >
                    <Flex align="center" gap="6px">
                      <Icon as={FiCalendar} w="11px" h="11px" />
                      {exp.period}
                    </Flex>
                  </Badge>
                </Flex>

                <Flex align="center" gap="6px" fontSize="13px" color="var(--text-muted)">
                  <Icon as={FiMapPin} w="13px" h="13px" color="var(--primary-accent)" />
                  <Text>{exp.location}</Text>
                </Flex>

                <Text fontSize="14px" color="var(--text-secondary)" lineHeight="1.65">
                  {exp.summary}
                </Text>

                <Flex as="ul" direction="column" gap="10px" pl="18px" color="var(--text-secondary)" fontSize="14px" lineHeight="1.6">
                  {exp.highlights.map((item) => (
                    <Box as="li" key={item}>
                      {item}
                    </Box>
                  ))}
                </Flex>
              </Flex>

              {exp.technologies && exp.technologies.length > 0 && (
                <Flex flexWrap="wrap" gap="8px" pt="8px" borderTop="1px solid rgba(255, 255, 255, 0.05)">
                  {exp.technologies.map((tech) => (
                    <Box
                      key={tech}
                      bg="rgba(255, 255, 255, 0.03)"
                      border="1px solid rgba(255, 255, 255, 0.06)"
                      borderRadius="6px"
                      px="10px"
                      py="3px"
                      fontSize="11px"
                      color="var(--text-muted)"
                    >
                      {tech}
                    </Box>
                  ))}
                </Flex>
              )}
            </MotionBox>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};

export default Experience;

