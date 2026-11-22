import { useState } from "react";
import { Box, Flex, Grid, Heading, Text, Link, Icon, AspectRatio, Collapse } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiChevronDown,
  FiChevronUp,
  FiClock,
  FiCheck,
} from "react-icons/fi";
import { projectsList, type ProjectItem } from "../data/portfolioData";
import {
  KisimaVisual,
  OutsideVisual,
  IssueTrackerVisual,
  HbsWearVisual,
  MalwareVisual,
} from "./ProjectVisuals";

const MotionBox = motion(Box);

const projectAccents: Record<string, { color: string; softBg: string; border: string }> = {
  "kisima-ai": {
    color: "#22D3EE",
    softBg: "rgba(34, 211, 238, 0.1)",
    border: "rgba(34, 211, 238, 0.28)",
  },
  "outside-vip": {
    color: "#C084FC",
    softBg: "rgba(192, 132, 252, 0.12)",
    border: "rgba(192, 132, 252, 0.28)",
  },
  "issue-tracker": {
    color: "#818CF8",
    softBg: "rgba(129, 140, 248, 0.12)",
    border: "rgba(129, 140, 248, 0.3)",
  },
  "hbs-wear": {
    color: "#F59E0B",
    softBg: "rgba(245, 158, 11, 0.12)",
    border: "rgba(245, 158, 11, 0.28)",
  },
};

const renderFeaturedVisual = (id: string) => {
  switch (id) {
    case "kisima-ai":
      return <KisimaVisual />;
    case "outside-vip":
      return <OutsideVisual />;
    case "issue-tracker":
      return <IssueTrackerVisual />;
    case "hbs-wear":
      return <HbsWearVisual />;
    default:
      return null;
  }
};

const StatusBadge = ({ status, statusColor }: { status: string; statusColor: string }) => {
  const isLive = statusColor === "green" || statusColor === "cyan";
  const isWip = statusColor === "orange";
  const color = isLive ? "#34D399" : isWip ? "#F59E0B" : "#A5B4FC";
  const bg = isLive
    ? "rgba(52, 211, 153, 0.12)"
    : isWip
    ? "rgba(245, 158, 11, 0.12)"
    : "rgba(129, 140, 248, 0.14)";
  const border = isLive
    ? "rgba(52, 211, 153, 0.3)"
    : isWip
    ? "rgba(245, 158, 11, 0.32)"
    : "rgba(129, 140, 248, 0.32)";

  return (
    <Flex
      align="center"
      gap="6px"
      px="10px"
      py="3px"
      borderRadius="999px"
      bg={bg}
      border="1px solid"
      borderColor={border}
      flexShrink={0}
    >
      <Box w="6px" h="6px" borderRadius="full" bg={color} />
      <Text fontFamily="var(--font-mono)" fontSize="10.5px" fontWeight="600" color={color}>
        {status}
      </Text>
    </Flex>
  );
};

const FeaturedShowcaseRow = ({ project, index }: { project: ProjectItem; index: number }) => {
  const [showDetails, setShowDetails] = useState(false);
  const accent = projectAccents[project.id] || projectAccents["kisima-ai"];
  const isVisualLeft = index % 2 === 0;
  const isFlagship = index === 0;

  return (
    <MotionBox
      as="article"
      id={`project-${project.id}`}
      className="product-stage-group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.5 }}
      py={{ base: "36px", md: isFlagship ? "48px" : "44px" }}
      borderTop={index > 0 ? "1px solid rgba(255, 255, 255, 0.07)" : "none"}
    >
      <Grid
        templateColumns={{
          base: "1fr",
          lg: isVisualLeft ? "1.12fr 0.88fr" : "0.88fr 1.12fr",
        }}
        gap={{ base: "28px", lg: "52px" }}
        alignItems="center"
      >
        {/* Visual Stage Column */}
        <Box order={{ base: 1, lg: isVisualLeft ? 1 : 2 }}>
          {renderFeaturedVisual(project.id)}
        </Box>

        {/* Story & Actions Column (Concise Upfront, Deep Details On-Demand) */}
        <Flex direction="column" gap="18px" order={{ base: 2, lg: isVisualLeft ? 2 : 1 }}>
          <Flex align="center" gap="10px" flexWrap="wrap">
            <Text
              fontFamily="var(--font-mono)"
              fontSize="11.5px"
              fontWeight="600"
              color={accent.color}
              letterSpacing="0.08em"
            >
              0{index + 1} · {project.categoryBadge.toUpperCase()}
            </Text>
            <StatusBadge status={project.status} statusColor={project.statusColor} />
          </Flex>

          <Heading
            as="h3"
            fontFamily="var(--font-heading)"
            fontSize={{ base: "24px", md: isFlagship ? "32px" : "28px" }}
            fontWeight="800"
            letterSpacing="-0.03em"
            lineHeight="1.15"
            color="var(--text-primary)"
          >
            {project.title}
          </Heading>

          <Text fontSize={{ base: "15px", md: "16px" }} color="var(--text-secondary)" lineHeight="1.68">
            {project.intro}
          </Text>

          {/* Compact Tech Strip */}
          <Flex flexWrap="wrap" gap="7px">
            {project.technologies.map((tech) => (
              <Box
                key={tech}
                fontFamily="var(--font-mono)"
                fontSize="11px"
                color="#CBD5E1"
                bg="rgba(255, 255, 255, 0.04)"
                border="1px solid rgba(255, 255, 255, 0.09)"
                borderRadius="999px"
                px="10px"
                py="3px"
              >
                {tech}
              </Box>
            ))}
          </Flex>

          {/* Ongoing Work Micro-Callout (for WIP / Pending Status) */}
          {project.ongoingWork && (
            <Text fontSize="12.5px" color="var(--text-muted)" lineHeight="1.55">
              <Text as="span" color={project.statusColor === "orange" ? "#F59E0B" : accent.color} fontWeight="600">
                Status:{" "}
              </Text>
              {project.ongoingWork}
            </Text>
          )}

          {/* Action Links + Progressive Disclosure Toggle */}
          <Flex gap="12px" pt="4px" align="center" flexWrap="wrap">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-showcase-primary"
                color="#07080D"
                _hover={{ color: "#07080D", textDecoration: "none" }}
                _active={{ color: "#07080D" }}
                _focus={{ color: "#07080D" }}
                fontSize="13.5px"
                py="9px"
                px="18px"
              >
                Live Site
                <Icon as={FiArrowUpRight} w="15px" h="15px" color="#07080D" />
              </Link>
            )}

            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-showcase-secondary"
                color="#F8FAFC"
                _hover={{ color: "#FFFFFF", textDecoration: "none" }}
                _active={{ color: "#FFFFFF" }}
                _focus={{ color: "#FFFFFF" }}
                fontSize="13.5px"
                py="9px"
                px="16px"
              >
                <Icon as={FiGithub} w="15px" h="15px" color="#F8FAFC" />
                Source
              </Link>
            )}

            {project.linksPendingNote && (
              <Flex
                align="center"
                gap="8px"
                px="12px"
                py="8px"
                borderRadius="999px"
                bg="rgba(129, 140, 248, 0.08)"
                border="1px dashed rgba(129, 140, 248, 0.34)"
              >
                <Icon as={FiClock} w="13px" h="13px" color="#A5B4FC" flexShrink={0} />
                <Text fontSize="12px" color="#CBD5E1">
                  {project.linksPendingNote}
                </Text>
              </Flex>
            )}

            <Box
              as="button"
              type="button"
              onClick={() => setShowDetails((prev) => !prev)}
              aria-expanded={showDetails}
              display="inline-flex"
              alignItems="center"
              gap="6px"
              fontFamily="var(--font-mono)"
              fontSize="11.5px"
              fontWeight="600"
              color={accent.color}
              bg="transparent"
              border="none"
              cursor="pointer"
              py="6px"
              px="4px"
              _hover={{ opacity: 0.85 }}
            >
              {showDetails ? "Hide details" : "Technical details"}
              <Icon as={showDetails ? FiChevronUp : FiChevronDown} w="14px" h="14px" />
            </Box>
          </Flex>

          {/* Progressive Disclosure Technical Breakdown */}
          <Collapse in={showDetails} animateOpacity>
            <Box
              mt="6px"
              p={{ base: "16px", md: "20px" }}
              borderRadius="14px"
              bg="rgba(15, 19, 31, 0.85)"
              border="1px solid"
              borderColor={accent.border}
            >
              <Flex direction="column" gap="12px">
                <Text fontSize="13px" color="var(--text-secondary)" lineHeight="1.6">
                  <strong style={{ color: "#F8FAFC" }}>Problem:</strong> {project.problem}
                </Text>
                <Text fontSize="13px" color="var(--text-secondary)" lineHeight="1.6">
                  <strong style={{ color: "#F8FAFC" }}>Approach:</strong> {project.solution}
                </Text>
                <Flex as="ul" direction="column" gap="7px" listStyleType="none" pt="4px">
                  {project.keyPoints.map((point) => (
                    <Flex as="li" key={point} gap="9px" align="flex-start">
                      <Icon as={FiCheck} w="13px" h="13px" color={accent.color} mt="4px" flexShrink={0} />
                      <Text fontSize="12.5px" color="#CBD5E1" lineHeight="1.55">
                        {point}
                      </Text>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            </Box>
          </Collapse>
        </Flex>
      </Grid>
    </MotionBox>
  );
};

const AdditionalProjectCard = ({ project, idx }: { project: ProjectItem; idx: number }) => (
  <MotionBox
    as="article"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: "some" }}
    transition={{ duration: 0.45, delay: idx * 0.07 }}
    className="showcase-surface showcase-surface-hover project-card-group"
    p="18px"
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    h="100%"
  >
    <Box>
      <AspectRatio ratio={16 / 10} mb="16px">
        {project.image ? (
          <Box className="project-media-frame">
            <img src={project.image} alt={`${project.shortTitle} application preview`} loading="lazy" />
          </Box>
        ) : (
          <MalwareVisual />
        )}
      </AspectRatio>

      <Flex justify="space-between" align="center" gap="8px" mb="8px">
        <Text
          fontFamily="var(--font-mono)"
          fontSize="10px"
          fontWeight="600"
          letterSpacing="0.09em"
          textTransform="uppercase"
          color="var(--accent-cyan)"
        >
          {project.categoryBadge}
        </Text>
        <StatusBadge status={project.status} statusColor={project.statusColor} />
      </Flex>

      <Heading
        as="h4"
        fontFamily="var(--font-heading)"
        fontSize="17px"
        fontWeight="700"
        color="var(--text-primary)"
        lineHeight="1.3"
        mb="8px"
      >
        {project.shortTitle}
      </Heading>

      <Text fontSize="13.5px" color="var(--text-secondary)" lineHeight="1.6" mb="16px" noOfLines={3}>
        {project.intro}
      </Text>
    </Box>

    <Box>
      <Flex flexWrap="wrap" gap="6px" mb="14px">
        {project.technologies.slice(0, 5).map((tech) => (
          <Box
            key={tech}
            fontFamily="var(--font-mono)"
            fontSize="10px"
            color="var(--text-muted)"
            bg="rgba(255, 255, 255, 0.03)"
            border="1px solid rgba(255, 255, 255, 0.07)"
            px="8px"
            py="2px"
            borderRadius="999px"
          >
            {tech}
          </Box>
        ))}
      </Flex>

      <Flex gap="16px" pt="12px" borderTop="1px solid rgba(255, 255, 255, 0.06)" align="center">
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            fontSize="13px"
            fontWeight="600"
            color="var(--text-primary)"
            display="inline-flex"
            alignItems="center"
            gap="5px"
            _hover={{ color: "var(--accent-cyan)", textDecoration: "none" }}
            transition="color 0.18s ease"
          >
            Live Demo
            <Icon as={FiArrowUpRight} w="14px" h="14px" />
          </Link>
        )}
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            fontSize="13px"
            fontWeight="500"
            color="var(--text-secondary)"
            display="inline-flex"
            alignItems="center"
            gap="5px"
            _hover={{ color: "var(--text-primary)", textDecoration: "none" }}
            transition="color 0.18s ease"
          >
            <Icon as={FiGithub} w="14px" h="14px" />
            GitHub
          </Link>
        )}
      </Flex>
    </Box>
  </MotionBox>
);

const Projects = () => {
  const featuredProjects = projectsList.filter((p) => p.tier === "featured");
  const additionalProjects = projectsList.filter((p) => p.tier === "additional");

  return (
    <Box
      as="section"
      id="projects"
      py={{ base: "64px", md: "96px" }}
      px={{ base: "20px", md: "40px" }}
    >
      <Box maxW="1140px" mx="auto">
        {/* Section Heading */}
        <MotionBox
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.45 }}
          mb={{ base: "20px", md: "28px" }}
        >
          <span className="section-eyebrow">01 / Selected Work</span>
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align={{ base: "flex-start", md: "flex-end" }}
            gap="14px"
          >
            <Heading
              as="h2"
              fontFamily="var(--font-heading)"
              fontSize={{ base: "32px", md: "46px" }}
              fontWeight="800"
              letterSpacing="-0.035em"
              color="var(--text-primary)"
              lineHeight="1.08"
            >
              Featured{" "}
              <Box as="span" className="headline-accent">
                Projects.
              </Box>
            </Heading>
            <Text color="var(--text-secondary)" fontSize="15px" maxW="420px" lineHeight="1.6">
              End-to-end products spanning hydraulic AI systems, ticketing, Next.js App Router, and commerce.
            </Text>
          </Flex>
        </MotionBox>

        {/* Featured 1-4 Asymmetrical Product Showcases */}
        <Box>
          {featuredProjects.map((project, idx) => (
            <FeaturedShowcaseRow key={project.id} project={project} index={idx} />
          ))}
        </Box>

        {/* Additional Projects 5-7 Compact Showcase */}
        <Box mt={{ base: "56px", md: "80px" }} pt={{ base: "40px", md: "52px" }} borderTop="1px solid rgba(255, 255, 255, 0.08)">
          <Flex
            direction={{ base: "column", sm: "row" }}
            justify="space-between"
            align={{ base: "flex-start", sm: "baseline" }}
            gap="8px"
            mb="26px"
          >
            <Heading
              as="h3"
              fontFamily="var(--font-heading)"
              fontSize={{ base: "22px", md: "26px" }}
              fontWeight="700"
              letterSpacing="-0.02em"
              color="var(--text-primary)"
            >
              More Builds
            </Heading>
            <Text fontFamily="var(--font-mono)" fontSize="11px" color="var(--text-muted)">
              Fleet Compliance · GameHub · Malware Detection
            </Text>
          </Flex>

          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap="20px">
            {additionalProjects.map((project, idx) => (
              <AdditionalProjectCard key={project.id} project={project} idx={idx} />
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
