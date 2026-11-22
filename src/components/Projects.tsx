import { Box, Flex, Grid, Heading, Text, Link, Icon, Badge } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FiExternalLink,
  FiGithub,
  FiDatabase,
  FiShield,
  FiLayers,
  FiTruck,
  FiPlay,
  FiCpu,
  FiClock,
} from "react-icons/fi";
import { projectsList, type ProjectItem } from "../data/portfolioData";

const MotionBox = motion(Box);

const additionalProjectIcons: Record<string, typeof FiTruck> = {
  "fleet-compliance": FiTruck,
  gamehub: FiPlay,
  "malware-detector": FiShield,
};

const FeaturedArchitectureVisual = ({ project }: { project: ProjectItem }) => {
  const nodes = project.architectureNodes || [];

  return (
    <Flex direction="column" justify="center" align="center" w="100%">
      <Box
        w="100%"
        maxW="480px"
        bg="rgba(0,0,0,0.4)"
        borderRadius="16px"
        p="25px"
        border="1px solid rgba(255,255,255,0.06)"
        position="relative"
        boxShadow="inset 0 0 20px rgba(0, 242, 254, 0.05)"
      >
        <Text
          fontSize="10px"
          fontWeight="700"
          color="var(--primary-accent)"
          letterSpacing="0.08em"
          mb="20px"
        >
          {project.architectureTitle || "SYSTEM ARCHITECTURE"}
        </Text>

        <Flex direction="column" gap="16px" position="relative">
          {nodes.map((node, index) => (
            <Box key={node.title}>
              <Flex
                justify="space-between"
                align="center"
                gap="10px"
                bg={index === 1 ? "rgba(127, 0, 255, 0.05)" : "rgba(255, 255, 255, 0.03)"}
                border={
                  index === 1
                    ? "1px solid rgba(127, 0, 255, 0.45)"
                    : "1px solid rgba(255,255,255,0.05)"
                }
                p="12px"
                borderRadius="10px"
              >
                <Flex align="center" gap="10px" minW="0">
                  <Icon
                    as={index === 0 ? FiLayers : index === 1 ? FiCpu : FiDatabase}
                    color={index === 1 ? "var(--secondary-accent)" : "var(--primary-accent)"}
                    flexShrink={0}
                  />
                  <Box minW="0">
                    <Text fontSize="12px" fontWeight="700" color="white">
                      {node.title}
                    </Text>
                    <Text fontSize="10px" color="var(--text-muted)">
                      {node.subtitle}
                    </Text>
                  </Box>
                </Flex>
                <Badge colorScheme={node.badgeColor} fontSize="9px" flexShrink={0}>
                  {node.badge}
                </Badge>
              </Flex>

              {index < nodes.length - 1 && (
                <Flex justify="center" align="center" h="14px" mt="2px">
                  <Box
                    w="2px"
                    h="14px"
                    bg="linear-gradient(to bottom, var(--primary-accent), var(--secondary-accent))"
                  />
                </Flex>
              )}
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

const Projects = () => {
  const featuredProjects = projectsList.filter((p) => p.tier === "featured");
  const additionalProjects = projectsList.filter((p) => p.tier === "additional");

  return (
    <Box
      id="projects"
      py={{ base: "80px", md: "100px" }}
      px={{ base: "20px", md: "60px" }}
      maxW="1200px"
      mx="auto"
    >
      <Flex direction="column" gap="50px">
        {/* Section Header */}
        <Box>
          <span className="section-tag">03 / PORTFOLIO</span>
          <Heading
            fontSize={{ base: "32px", md: "42px" }}
            fontWeight="800"
            letterSpacing="-0.02em"
            mb="15px"
          >
            Featured Projects.
          </Heading>
          <Text color="var(--text-secondary)" fontSize="16px" maxW="650px">
            Full-stack applications, backend APIs, payment integrations, and applied AI systems built around real operational problems.
          </Text>
          <Box
            w="60px"
            h="4px"
            bg="linear-gradient(90deg, var(--primary-accent), var(--secondary-accent))"
            borderRadius="2px"
            mt="20px"
          />
        </Box>

        {/* Featured Projects Stack (1-4) */}
        <Flex direction="column" gap="64px" mt="10px">
          {featuredProjects.map((project, idx) => {
            const isVisualRight = idx % 2 === 1;

            return (
              <MotionBox
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="glass-card"
                p={{ base: "25px", md: "45px" }}
              >
                <Grid
                  templateColumns={{ base: "1fr", lg: isVisualRight ? "1.15fr 0.95fr" : "0.95fr 1.15fr" }}
                  gap="40px"
                  alignItems="center"
                >
                  {/* Visual Column */}
                  <Box order={{ base: 1, lg: isVisualRight ? 2 : 1 }}>
                    <FeaturedArchitectureVisual project={project} />
                  </Box>

                  {/* Details Column */}
                  <Flex direction="column" gap="16px" order={{ base: 2, lg: isVisualRight ? 1 : 2 }}>
                    <Flex align="center" gap="8px" flexWrap="wrap">
                      <Badge colorScheme={project.statusColor} px="8px" py="2px" fontSize="10px">
                        {project.status}
                      </Badge>
                      <Badge
                        bg="rgba(0, 242, 254, 0.1)"
                        color="var(--primary-accent)"
                        border="1px solid rgba(0, 242, 254, 0.2)"
                        px="8px"
                        py="2px"
                        fontSize="10px"
                      >
                        {project.categoryBadge}
                      </Badge>
                    </Flex>

                    <Heading as="h3" fontSize={{ base: "22px", md: "26px" }} fontWeight="800" color="white">
                      {project.title}
                    </Heading>

                    <Text fontSize="14px" color="var(--text-primary)" lineHeight="1.65">
                      {project.intro}
                    </Text>

                    <Text fontSize="14px" color="var(--text-secondary)" lineHeight="1.6">
                      <strong>Problem:</strong> {project.problem}
                    </Text>

                    <Text fontSize="14px" color="var(--text-secondary)" lineHeight="1.6">
                      <strong>Implementation:</strong> {project.solution}
                    </Text>

                    <Flex
                      as="ul"
                      direction="column"
                      gap="6px"
                      pl="18px"
                      fontSize="13px"
                      color="var(--text-secondary)"
                      lineHeight="1.55"
                    >
                      {project.keyPoints.map((point) => (
                        <Box as="li" key={point}>
                          {point}
                        </Box>
                      ))}
                    </Flex>

                    {project.ongoingWork && (
                      <Box
                        bg="rgba(245, 158, 11, 0.06)"
                        border="1px solid rgba(245, 158, 11, 0.2)"
                        borderRadius="10px"
                        p="12px 14px"
                      >
                        <Text fontSize="12px" color="var(--text-secondary)" lineHeight="1.55">
                          <strong style={{ color: "#f59e0b" }}>Current Status:</strong> {project.ongoingWork}
                        </Text>
                      </Box>
                    )}

                    <Flex flexWrap="wrap" gap="8px" pt="6px">
                      {project.technologies.map((tech) => (
                        <Box
                          key={tech}
                          bg="rgba(255,255,255,0.03)"
                          border="1px solid rgba(255,255,255,0.06)"
                          borderRadius="6px"
                          px="10px"
                          py="2px"
                          fontSize="12px"
                          color="var(--text-muted)"
                        >
                          {tech}
                        </Box>
                      ))}
                    </Flex>

                    {/* Action Links or Pending Notice */}
                    <Flex gap="18px" pt="4px" align="center" flexWrap="wrap">
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          fontSize="14px"
                          fontWeight="600"
                          color="white"
                          display="inline-flex"
                          alignItems="center"
                          gap="6px"
                          _hover={{ color: "var(--primary-accent)", textDecoration: "none" }}
                        >
                          <Icon as={FiGithub} /> GitHub
                        </Link>
                      )}

                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          fontSize="14px"
                          fontWeight="600"
                          color="white"
                          display="inline-flex"
                          alignItems="center"
                          gap="6px"
                          _hover={{ color: "var(--primary-accent)", textDecoration: "none" }}
                        >
                          <Icon as={FiExternalLink} /> Live Site
                        </Link>
                      )}

                      {project.linksPendingNote && (
                        <Flex align="center" gap="8px" color="var(--text-muted)" fontSize="13px">
                          <Icon as={FiClock} color="var(--secondary-accent)" />
                          <Text>{project.linksPendingNote}</Text>
                        </Flex>
                      )}
                    </Flex>
                  </Flex>
                </Grid>
              </MotionBox>
            );
          })}
        </Flex>

        {/* Additional Projects Section (5-7) */}
        <Box mt="40px">
          <Heading
            fontSize={{ base: "24px", md: "30px" }}
            fontWeight="800"
            letterSpacing="-0.02em"
            mb="25px"
            color="white"
          >
            Additional Projects
          </Heading>

          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "repeat(3, 1fr)" }} gap="25px">
            {additionalProjects.map((project, idx) => (
              <MotionBox
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card"
                p="22px"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                height="100%"
              >
                <Box>
                  {/* Visual Header */}
                  {project.image ? (
                    <Box className="project-image-container" mb="18px" overflow="hidden" height="170px">
                      <img
                        src={project.image}
                        alt={project.shortTitle}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.4s",
                        }}
                        className="additional-project-img"
                      />
                    </Box>
                  ) : (
                    <Flex
                      mb="18px"
                      height="170px"
                      borderRadius="14px"
                      border="1px solid var(--border-color)"
                      bg="rgba(0, 0, 0, 0.4)"
                      direction="column"
                      align="center"
                      justify="center"
                      gap="10px"
                      px="16px"
                      textAlign="center"
                    >
                      <Flex
                        w="44px"
                        h="44px"
                        borderRadius="12px"
                        bg="rgba(16, 185, 129, 0.1)"
                        align="center"
                        justify="center"
                      >
                        <Icon as={FiShield} color="var(--highlight-accent)" w="22px" h="22px" />
                      </Flex>
                      <Text fontSize="11px" fontWeight="700" color="var(--highlight-accent)" letterSpacing="0.08em">
                        PYTHON ML PIPELINE + FLASK APP
                      </Text>
                      <Text fontSize="12px" color="var(--text-muted)">
                        PE header classification with Scikit-learn & XGBoost
                      </Text>
                    </Flex>
                  )}

                  <Flex justify="space-between" align="flex-start" gap="8px" mb="10px">
                    <Flex align="center" gap="8px">
                      <Icon
                        as={additionalProjectIcons[project.id] || FiLayers}
                        color="var(--primary-accent)"
                        flexShrink={0}
                      />
                      <Heading as="h4" fontSize="17px" fontWeight="700" color="white" lineHeight="1.3">
                        {project.title}
                      </Heading>
                    </Flex>
                    <Badge colorScheme={project.statusColor} fontSize="9px" flexShrink={0}>
                      {project.categoryBadge}
                    </Badge>
                  </Flex>

                  <Text fontSize="13px" color="var(--text-secondary)" lineHeight="1.6" mb="16px">
                    {project.intro}
                  </Text>
                </Box>

                <Box>
                  <Flex flexWrap="wrap" gap="6px" mb="16px">
                    {project.technologies.map((tech) => (
                      <Box
                        key={tech}
                        bg="rgba(255,255,255,0.03)"
                        border="1px solid rgba(255,255,255,0.05)"
                        px="8px"
                        py="2px"
                        borderRadius="4px"
                        fontSize="10px"
                        color="var(--text-muted)"
                      >
                        {tech}
                      </Box>
                    ))}
                  </Flex>

                  <Flex gap="14px" flexWrap="wrap">
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        fontSize="13px"
                        fontWeight="600"
                        color="white"
                        display="inline-flex"
                        alignItems="center"
                        gap="6px"
                        _hover={{ color: "var(--primary-accent)", textDecoration: "none" }}
                      >
                        <Icon as={FiGithub} /> GitHub
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        fontSize="13px"
                        fontWeight="600"
                        color="white"
                        display="inline-flex"
                        alignItems="center"
                        gap="6px"
                        _hover={{ color: "var(--primary-accent)", textDecoration: "none" }}
                      >
                        <Icon as={FiExternalLink} /> Live Demo
                      </Link>
                    )}
                  </Flex>
                </Box>
              </MotionBox>
            ))}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Projects;
