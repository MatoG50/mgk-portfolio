import { Box, Flex, Grid, Heading, Text, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiBookOpen, FiCpu, FiLayers, FiDatabase, FiTerminal, FiGlobe } from "react-icons/fi";

const MotionBox = motion(Box);

const About = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: FiGlobe,
      color: "var(--primary-accent)",
      skills: ["React", "TypeScript", "Angular", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Backend",
      icon: FiLayers,
      color: "var(--secondary-accent)",
      skills: ["Node.js", "Express", "REST APIs"],
    },
    {
      title: "Databases",
      icon: FiDatabase,
      color: "#f59e0b",
      skills: ["PostgreSQL", "MySQL"],
    },
    {
      title: "AI & Data Science",
      icon: FiCpu,
      color: "var(--highlight-accent)",
      skills: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
    },
    {
      title: "Tools & DevOps",
      icon: FiTerminal,
      color: "#ec4899",
      skills: ["Git", "Docker", "GitHub"],
    },
  ];

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
            Engineering with Purpose.
          </Heading>
          <Box w="60px" h="4px" bg="linear-gradient(90deg, var(--primary-accent), var(--secondary-accent))" borderRadius="2px" />
        </Box>

        {/* About Grid */}
        <Grid templateColumns={{ base: "1fr", lg: "1.2fr 1fr" }} gap="40px" alignItems="start">
          {/* Left Block: Bio & Philosophy */}
          <Flex direction="column" gap="25px">
            <Text
              fontSize={{ base: "17px", md: "19px" }}
              lineHeight="1.7"
              color="var(--text-primary)"
              fontWeight="500"
            >
              I build production-ready software systems, high-traffic integrations, and machine learning models that address complex corporate requirements.
            </Text>

            <Text fontSize="15px" lineHeight="1.7" color="var(--text-secondary)">
              My software engineering philosophy revolves around reliability, maintainability, and domain-driven design. Rather than stitching together templates, I focus on building resilient backend pipelines, clean frontend applications, and robust third-party system sync engines.
            </Text>

            <Text fontSize="15px" lineHeight="1.7" color="var(--text-secondary)">
              Leveraging a strong foundation in modern Javascript/Typescript frameworks and Python machine learning libraries, I construct secure, end-to-end applications designed to solve concrete business challenges. I am continuously refining these capabilities through rigorous academic study at Quantic.
            </Text>

            {/* MSc Highlight Box */}
            <MotionBox
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card"
              p="25px"
              borderLeft="4px solid var(--primary-accent)"
              bg="rgba(0, 242, 254, 0.02)"
            >
              <Flex gap="16px" align="flex-start">
                <Flex
                  w="46px"
                  h="46px"
                  bg="rgba(0, 242, 254, 0.08)"
                  borderRadius="12px"
                  align="center"
                  justify="center"
                  flexShrink={0}
                >
                  <Icon as={FiBookOpen} color="var(--primary-accent)" w="22px" h="22px" />
                </Flex>
                <Box>
                  <Text fontSize="12px" fontWeight="700" color="var(--primary-accent)" letterSpacing="0.05em">
                    ACADEMIC EXCELLENCE
                  </Text>
                  <Heading as="h4" fontSize="16px" fontWeight="700" color="white" mt="4px" mb="4px">
                    Master of Science in Software Engineering
                  </Heading>
                  <Text fontSize="14px" color="var(--text-secondary)" fontWeight="600">
                    Quantic School of Business and Technology
                  </Text>
                  <Text fontSize="12px" color="var(--text-muted)" mt="4px">
                    Active Student • Focus on Advanced Systems, Scalable Architectures & Data Structures
                  </Text>
                </Box>
              </Flex>
            </MotionBox>
          </Flex>

          {/* Right Block: Core Skills Stack */}
          <Flex direction="column" gap="25px">
            <Box>
              <Heading as="h3" fontSize="20px" fontWeight="700" mb="8px" color="white">
                Technical Expertise
              </Heading>
              <Text fontSize="13px" color="var(--text-muted)">
                Clean structures, grouped by ecosystem. No arbitrary rating scales.
              </Text>
            </Box>

            <Flex direction="column" gap="16px">
              {skillCategories.map((cat, idx) => (
                <MotionBox
                  key={cat.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  bg="rgba(255, 255, 255, 0.02)"
                  border="1px solid rgba(255, 255, 255, 0.05)"
                  borderRadius="14px"
                  p="15px 20px"
                  _hover={{ borderColor: cat.color }}
                  style={{ transition: "border-color 0.2s" }}
                >
                  <Flex align="center" justify="space-between" flexWrap="wrap" gap="10px">
                    <Flex align="center" gap="10px">
                      <Icon as={cat.icon} color={cat.color} w="16px" h="16px" />
                      <Text fontSize="14px" fontWeight="700" color="white">
                        {cat.title}
                      </Text>
                    </Flex>

                    <Flex gap="6px" flexWrap="wrap">
                      {cat.skills.map((skill) => (
                        <Box
                          key={skill}
                          bg="rgba(255, 255, 255, 0.03)"
                          border="1px solid rgba(255, 255, 255, 0.06)"
                          borderRadius="6px"
                          px="10px"
                          py="3px"
                          fontSize="12px"
                          color="var(--text-secondary)"
                          _hover={{ color: "white", bg: "rgba(255, 255, 255, 0.08)" }}
                          transition="all 0.2s"
                        >
                          {skill}
                        </Box>
                      ))}
                    </Flex>
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
