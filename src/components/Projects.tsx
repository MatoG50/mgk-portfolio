import { Box, Flex, Grid, Heading, Text, Link, Icon, Badge } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiDatabase, FiShield, FiActivity, FiLayers, FiTruck, FiPlay } from "react-icons/fi";
import cmvImage from "../assets/cmv.png";
import gamehubImage from "../assets/gamehub.png";

const MotionBox = motion(Box);

const Projects = () => {
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
          <span className="section-tag">02 / PORTFOLIO</span>
          <Heading
            fontSize={{ base: "32px", md: "42px" }}
            fontWeight="800"
            letterSpacing="-0.02em"
            mb="15px"
          >
            Featured Case Studies.
          </Heading>
          <Text color="var(--text-secondary)" fontSize="16px" maxW="600px">
            A selection of production-grade systems and business solutions developed from the ground up.
          </Text>
          <Box w="60px" h="4px" bg="linear-gradient(90deg, var(--primary-accent), var(--secondary-accent))" borderRadius="2px" mt="20px" />
        </Box>

        {/* Featured Projects Stack */}
        <Flex direction="column" gap="80px" mt="20px">
          
          {/* CASE STUDY 1: Clover-Integrated E-commerce Platform */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="glass-card"
            p={{ base: "25px", md: "45px" }}
          >
            <Grid templateColumns={{ base: "1fr", lg: "1fr 1.1fr" }} gap="40px" alignItems="center">
              
              {/* Visual Presentation (CSS System Architecture) */}
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
                  <Text fontSize="10px" fontWeight="700" color="var(--primary-accent)" letterSpacing="0.08em" mb="20px">
                    INTEGRATION ARCHITECTURE SCHEMA
                  </Text>
                  
                  {/* Flow layout */}
                  <Flex direction="column" gap="20px" position="relative">
                    {/* Node 1: Clover POS */}
                    <Flex justify="space-between" align="center" bg="rgba(255, 255, 255, 0.03)" border="1px solid rgba(255,255,255,0.05)" p="12px" borderRadius="10px">
                      <Flex align="center" gap="10px">
                        <Icon as={FiDatabase} color="var(--primary-accent)" />
                        <Box>
                          <Text fontSize="12px" fontWeight="700" color="white">Clover Retail POS</Text>
                          <Text fontSize="10px" color="var(--text-muted)">In-Store Physical Inventory</Text>
                        </Box>
                      </Flex>
                      <Badge colorScheme="green" fontSize="9px">POS Master</Badge>
                    </Flex>

                    {/* Sync Arrow Bridge */}
                    <Flex justify="center" align="center" h="10px" my="-5px">
                      <Box w="2px" h="20px" bg="linear-gradient(to bottom, var(--primary-accent), var(--secondary-accent))" />
                    </Flex>

                    {/* Node 2: Node.js Express Backend */}
                    <Flex justify="space-between" align="center" bg="rgba(127, 0, 255, 0.05)" border="1px solid var(--secondary-accent)" p="12px" borderRadius="10px">
                      <Flex align="center" gap="10px">
                        <Icon as={FiLayers} color="var(--secondary-accent)" />
                        <Box>
                          <Text fontSize="12px" fontWeight="700" color="white">Express API & Sync Engine</Text>
                          <Text fontSize="10px" color="var(--text-muted)">Webhooks, Inventory Sync, PostgreSQL</Text>
                        </Box>
                      </Flex>
                      <Badge colorScheme="purple" fontSize="9px">Active Service</Badge>
                    </Flex>

                    {/* Sync Arrow Bridge */}
                    <Flex justify="center" align="center" h="10px" my="-5px">
                      <Box w="2px" h="20px" bg="linear-gradient(to bottom, var(--secondary-accent), var(--primary-accent))" />
                    </Flex>

                    {/* Node 3: React Storefront */}
                    <Flex justify="space-between" align="center" bg="rgba(255, 255, 255, 0.03)" border="1px solid rgba(255,255,255,0.05)" p="12px" borderRadius="10px">
                      <Flex align="center" gap="10px">
                        <Icon as={FiExternalLink} color="var(--primary-accent)" />
                        <Box>
                          <Text fontSize="12px" fontWeight="700" color="white">React Customer Storefront</Text>
                          <Text fontSize="10px" color="var(--text-muted)">Dynamic Catalog & checkout flow</Text>
                        </Box>
                      </Flex>
                      <Badge colorScheme="cyan" fontSize="9px">Client App</Badge>
                    </Flex>
                  </Flex>

                  {/* Metrics Banner inside */}
                  <Grid templateColumns="repeat(3, 1fr)" gap="10px" mt="25px" borderTop="1px solid rgba(255,255,255,0.05)" pt="15px">
                    <Box textAlign="center">
                      <Text fontSize="16px" fontWeight="800" color="var(--highlight-accent)">99.8%</Text>
                      <Text fontSize="9px" color="var(--text-muted)">Sync Accuracy</Text>
                    </Box>
                    <Box textAlign="center">
                      <Text fontSize="16px" fontWeight="800" color="var(--primary-accent)">&lt; 5s</Text>
                      <Text fontSize="9px" color="var(--text-muted)">Webhook Latency</Text>
                    </Box>
                    <Box textAlign="center">
                      <Text fontSize="16px" fontWeight="800" color="var(--secondary-accent)">2.4x</Text>
                      <Text fontSize="9px" color="var(--text-muted)">Checkout Speed</Text>
                    </Box>
                  </Grid>
                </Box>
              </Flex>

              {/* Case Study Details */}
              <Flex direction="column" gap="18px">
                <Flex align="center" gap="8px" flexWrap="wrap">
                  <Badge bg="rgba(0, 242, 254, 0.1)" color="var(--primary-accent)" border="1px solid rgba(0, 242, 254, 0.2)" px="8px" py="2px">Production System</Badge>
                  <Badge bg="rgba(127, 0, 255, 0.1)" color="var(--secondary-accent)" border="1px solid rgba(127, 0, 255, 0.2)" px="8px" py="2px">B2B Integration</Badge>
                </Flex>

                <Heading as="h3" fontSize={{ base: "24px", md: "28px" }} fontWeight="800" color="white">
                  Clover-Integrated E-commerce Platform
                </Heading>

                <Text fontSize="14px" color="var(--text-secondary)" lineHeight="1.6">
                  <strong>Challenge:</strong> A retail business needed to launch an online storefront while keeping their active Clover POS inventory records, customer accounts, and sales logs in absolute synchronization without manual data entry.
                </Text>

                <Text fontSize="14px" color="var(--text-secondary)" lineHeight="1.6">
                  <strong>Solution:</strong> Engineered a robust node integration middleware running webhook listeners to bind Clover POS state changes to a custom React web catalog. This included automated transaction routing and state synchronization back to the retail counters.
                </Text>

                <Text fontSize="14px" color="var(--text-secondary)" lineHeight="1.6">
                  <strong>Key Outcomes:</strong> Designed webhooks for real-time inventory adjustments, eliminating double-sell incidents. Built checkout flows routing transactions directly to Clover registers with secure card handling.
                </Text>

                <Flex flexWrap="wrap" gap="8px" pt="10px">
                  {["React", "Node.js", "Express", "PostgreSQL", "Clover API", "Webhooks"].map((tech) => (
                    <Box key={tech} bg="rgba(255,255,255,0.03)" border="1px solid rgba(255,255,255,0.06)" borderRadius="6px" px="10px" py="2px" fontSize="12px" color="var(--text-muted)">
                      {tech}
                    </Box>
                  ))}
                </Flex>

                <Flex gap="15px" pt="5px">
                  <Link
                    href="https://kwetustores.com/"
                    target="_blank"
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
                </Flex>
              </Flex>

            </Grid>
          </MotionBox>

          {/* CASE STUDY 2: Malware Detection System */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="glass-card"
            p={{ base: "25px", md: "45px" }}
          >
            <Grid templateColumns={{ base: "1fr", lg: "1.1fr 1fr" }} gap="40px" alignItems="center">
              
              {/* Case Study Details */}
              <Flex direction="column" gap="18px" order={{ base: 2, lg: 1 }}>
                <Flex align="center" gap="8px" flexWrap="wrap">
                  <Badge bg="rgba(16, 185, 129, 0.1)" color="var(--highlight-accent)" border="1px solid rgba(16, 185, 129, 0.2)" px="8px" py="2px">AI & Cyber Security</Badge>
                  <Badge bg="rgba(245, 158, 11, 0.1)" color="#f59e0b" border="1px solid rgba(245, 158, 11, 0.2)" px="8px" py="2px">Data Pipeline</Badge>
                </Flex>

                <Heading as="h3" fontSize={{ base: "24px", md: "28px" }} fontWeight="800" color="white">
                  Malware Detection System
                </Heading>

                <Text fontSize="14px" color="var(--text-secondary)" lineHeight="1.6">
                  <strong>Challenge:</strong> Standard signature-based anti-virus tools fail to catch zero-day attacks and dynamic file obfuscation, requiring automated heuristic assessment pipelines to identify risks prior to deployment.
                </Text>

                <Text fontSize="14px" color="var(--text-secondary)" lineHeight="1.6">
                  <strong>Solution:</strong> Built an end-to-end Python-based malware classification pipeline utilizing machine learning algorithms. The system extracts structural features from incoming file formats, feeds them through trained classifiers, and evaluates danger risks.
                </Text>

                <Text fontSize="14px" color="var(--text-secondary)" lineHeight="1.6">
                  <strong>Key Outcomes:</strong> Achieved high accuracy on experimental test models, identifying complex execution anomalies and presenting structured warning logs with low computational load.
                </Text>

                <Flex flexWrap="wrap" gap="8px" pt="10px">
                  {["Python", "Scikit-learn", "Pandas", "Machine Learning", "Random Forest", "Data Extraction"].map((tech) => (
                    <Box key={tech} bg="rgba(255,255,255,0.03)" border="1px solid rgba(255,255,255,0.06)" borderRadius="6px" px="10px" py="2px" fontSize="12px" color="var(--text-muted)">
                      {tech}
                    </Box>
                  ))}
                </Flex>

                <Flex gap="15px" pt="5px">
                  <Link
                    href="https://malware-detector-x84s.onrender.com/"
                    target="_blank"
                    fontSize="14px"
                    fontWeight="600"
                    color="white"
                    display="inline-flex"
                    alignItems="center"
                    gap="6px"
                    _hover={{ color: "var(--primary-accent)", textDecoration: "none" }}
                  >
                    <Icon as={FiExternalLink} /> Live Demo
                  </Link>
                </Flex>
              </Flex>

              {/* Visual Presentation (CSS ML Classification Interface) */}
              <Flex direction="column" justify="center" align="center" w="100%" order={{ base: 1, lg: 2 }}>
                <Box
                  w="100%"
                  maxW="480px"
                  bg="rgba(0,0,0,0.4)"
                  borderRadius="16px"
                  p="25px"
                  border="1px solid rgba(255,255,255,0.06)"
                  position="relative"
                  boxShadow="inset 0 0 20px rgba(127, 0, 255, 0.05)"
                >
                  <Text fontSize="10px" fontWeight="700" color="var(--secondary-accent)" letterSpacing="0.08em" mb="20px">
                    HEURISTIC ML RISK ASSESSMENT ENGINE
                  </Text>

                  {/* Classifier View */}
                  <Flex direction="column" gap="14px">
                    <Box bg="rgba(255, 255, 255, 0.02)" border="1px solid rgba(255,255,255,0.04)" p="15px" borderRadius="10px">
                      <Flex justify="space-between" align="center" mb="8px">
                        <Text fontSize="11px" color="var(--text-muted)">TEST MODEL VERDICT</Text>
                        <Badge colorScheme="red" variant="solid" fontSize="8px">Suspicious</Badge>
                      </Flex>
                      <Text fontSize="14px" fontWeight="700" color="white" fontFamily="monospace">unverified_installer.exe</Text>
                      
                      {/* Metric bar */}
                      <Flex mt="10px" align="center" gap="10px">
                        <Box flex="1" h="6px" bg="rgba(255,255,255,0.1)" borderRadius="full" overflow="hidden">
                          <Box w="94%" h="100%" bg="linear-gradient(to right, var(--secondary-accent), #ef4444)" />
                        </Box>
                        <Text fontSize="11px" fontWeight="700" color="#ef4444">94.2% Risk</Text>
                      </Flex>
                    </Box>

                    {/* Classifier metrics */}
                    <Grid templateColumns="repeat(2, 1fr)" gap="10px">
                      <Flex align="center" gap="8px" bg="rgba(255, 255, 255, 0.02)" border="1px solid rgba(255,255,255,0.04)" p="10px" borderRadius="8px">
                        <Icon as={FiShield} color="var(--highlight-accent)" w="14px" h="14px" />
                        <Box>
                          <Text fontSize="9px" color="var(--text-muted)">ACCURACY</Text>
                          <Text fontSize="12px" fontWeight="700" color="white">94.2%</Text>
                        </Box>
                      </Flex>
                      
                      <Flex align="center" gap="8px" bg="rgba(255, 255, 255, 0.02)" border="1px solid rgba(255,255,255,0.04)" p="10px" borderRadius="8px">
                        <Icon as={FiActivity} color="var(--primary-accent)" w="14px" h="14px" />
                        <Box>
                          <Text fontSize="9px" color="var(--text-muted)">LATENCY</Text>
                          <Text fontSize="12px" fontWeight="700" color="white">&lt; 120ms</Text>
                        </Box>
                      </Flex>
                    </Grid>
                  </Flex>
                </Box>
              </Flex>

            </Grid>
          </MotionBox>

        </Flex>

        {/* Additional Projects Section */}
        <Box mt="60px">
          <Heading
            fontSize={{ base: "24px", md: "30px" }}
            fontWeight="800"
            letterSpacing="-0.02em"
            mb="25px"
            color="white"
          >
            Additional Projects
          </Heading>

          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="25px">
            
            {/* Project 1: Fleet Compliance Management System */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card"
              p="20px"
              display="flex"
              flexDirection="column"
              justify="space-between"
              height="100%"
            >
              <Box>
                {/* Visual Header */}
                <Box className="project-image-container" mb="18px" overflow="hidden" height="180px">
                  <img
                    src={cmvImage}
                    alt="Fleet Compliance System"
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
                    className="additional-project-img"
                  />
                </Box>

                <Flex justify="space-between" align="center" mb="10px">
                  <Flex align="center" gap="8px">
                    <Icon as={FiTruck} color="var(--primary-accent)" />
                    <Heading as="h4" fontSize="18px" fontWeight="700" color="white">
                      Fleet Compliance System
                    </Heading>
                  </Flex>
                  <Badge colorScheme="cyan" fontSize="9px">Full Stack</Badge>
                </Flex>

                <Text fontSize="13px" color="var(--text-secondary)" lineHeight="1.6" mb="15px">
                  A comprehensive portal facilitating truck drivers to manage operations, log hours, and track routes in alignment with ELD and DOT compliance guidelines.
                </Text>
              </Box>

              <Box>
                <Flex flexWrap="wrap" gap="6px" mb="15px">
                  {["React", "Typescript", "Django", "PostgreSQL", "Regulatory Compliance"].map((tech) => (
                    <Box key={tech} bg="rgba(255,255,255,0.03)" border="1px solid rgba(255,255,255,0.05)" px="8px" py="2px" borderRadius="4px" fontSize="10px" color="var(--text-muted)">
                      {tech}
                    </Box>
                  ))}
                </Flex>

                <Flex gap="12px">
                  <Link
                    href="https://github.com/MatoG50/CMV-LOG"
                    target="_blank"
                    fontSize="13px"
                    fontWeight="600"
                    color="white"
                    display="inline-flex"
                    alignItems="center"
                    gap="6px"
                    _hover={{ color: "var(--primary-accent)", textDecoration: "none" }}
                  >
                    <Icon as={FiGithub} /> Github
                  </Link>
                  <Link
                    href="https://cmv-log.vercel.app/"
                    target="_blank"
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
                </Flex>
              </Box>
            </MotionBox>

            {/* Project 2: GameHub */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card"
              p="20px"
              display="flex"
              flexDirection="column"
              justify="space-between"
              height="100%"
            >
              <Box>
                {/* Visual Header */}
                <Box className="project-image-container" mb="18px" overflow="hidden" height="180px">
                  <img
                    src={gamehubImage}
                    alt="GameHub"
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
                    className="additional-project-img"
                  />
                </Box>

                <Flex justify="space-between" align="center" mb="10px">
                  <Flex align="center" gap="8px">
                    <Icon as={FiPlay} color="var(--secondary-accent)" />
                    <Heading as="h4" fontSize="18px" fontWeight="700" color="white">
                      GameHub
                    </Heading>
                  </Flex>
                  <Badge colorScheme="purple" fontSize="9px">Frontend App</Badge>
                </Flex>

                <Text fontSize="13px" color="var(--text-secondary)" lineHeight="1.6" mb="15px">
                  A high-end discovery dashboard that aggregates trending and highly-rated video games across multiple platforms, implementing advanced frontend caching and dynamic UI filtering.
                </Text>
              </Box>

              <Box>
                <Flex flexWrap="wrap" gap="6px" mb="15px">
                  {["React", "TypeScript", "REST APIs", "Data Aggregation", "UX Design"].map((tech) => (
                    <Box key={tech} bg="rgba(255,255,255,0.03)" border="1px solid rgba(255,255,255,0.05)" px="8px" py="2px" borderRadius="4px" fontSize="10px" color="var(--text-muted)">
                      {tech}
                    </Box>
                  ))}
                </Flex>

                <Flex gap="12px">
                  <Link
                    href="https://github.com/MatoG50/Game-hub"
                    target="_blank"
                    fontSize="13px"
                    fontWeight="600"
                    color="white"
                    display="inline-flex"
                    alignItems="center"
                    gap="6px"
                    _hover={{ color: "var(--primary-accent)", textDecoration: "none" }}
                  >
                    <Icon as={FiGithub} /> Github
                  </Link>
                  <Link
                    href="https://game-hub-mgk.vercel.app/"
                    target="_blank"
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
                </Flex>
              </Box>
            </MotionBox>

          </Grid>
        </Box>

      </Flex>
    </Box>
  );
};

export default Projects;
