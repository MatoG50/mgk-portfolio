import { Box, Flex, Grid, Text, Icon } from "@chakra-ui/react";
import { FiCheckCircle, FiCpu, FiLock, FiShield, FiShoppingBag, FiSliders, FiZap } from "react-icons/fi";

const PreviewCaption = ({ label = "Illustrative UI preview" }: { label?: string }) => (
  <Text
    fontFamily="var(--font-mono)"
    fontSize="10px"
    letterSpacing="0.06em"
    color="rgba(148, 163, 184, 0.72)"
    textAlign="right"
    mt="10px"
  >
    {label}
  </Text>
);

export const KisimaVisual = () => (
  <Box w="100%">
    <Box
      className="product-stage"
      bg="linear-gradient(145deg, #09131C 0%, #0A101B 55%, #07191A 100%)"
      p={{ base: "16px", md: "22px" }}
      position="relative"
      boxShadow="0 28px 60px -24px rgba(6, 182, 212, 0.25)"
    >
      {/* Subtle Top-Right Teal Glow */}
      <Box
        position="absolute"
        top="-40px"
        right="-40px"
        w="200px"
        h="200px"
        bg="radial-gradient(circle, rgba(34, 211, 238, 0.22) 0%, transparent 70%)"
        pointerEvents="none"
      />

      {/* App Header Bar */}
      <Flex
        justify="space-between"
        align="center"
        pb="12px"
        mb="14px"
        borderBottom="1px solid rgba(255,255,255,0.08)"
        gap="8px"
        flexWrap="wrap"
      >
        <Flex align="center" gap="8px">
          <Box w="8px" h="8px" borderRadius="full" bg="#22D3EE" />
          <Text fontFamily="var(--font-heading)" fontSize="13px" fontWeight="700" color="white">
            Kisima AI
          </Text>
          <Text fontFamily="var(--font-mono)" fontSize="10px" color="#67E8F9" opacity={0.8}>
            / Borehole Sizing
          </Text>
        </Flex>
        <Box
          px="8px"
          py="2px"
          borderRadius="999px"
          bg="rgba(16, 185, 129, 0.14)"
          border="1px solid rgba(16, 185, 129, 0.32)"
          fontFamily="var(--font-mono)"
          fontSize="9.5px"
          color="#34D399"
        >
          Deterministic Engine
        </Box>
      </Flex>

      {/* Main Split: Parameters + H-Q Curve SVG */}
      <Grid templateColumns={{ base: "1fr", sm: "0.78fr 1.22fr" }} gap="12px" mb="12px">
        {/* Left Inputs & Catalog Match */}
        <Flex direction="column" gap="8px">
          <Box
            p="10px"
            borderRadius="10px"
            bg="rgba(255, 255, 255, 0.03)"
            border="1px solid rgba(255, 255, 255, 0.07)"
          >
            <Flex align="center" gap="6px" mb="6px">
              <Icon as={FiSliders} w="11px" h="11px" color="#22D3EE" />
              <Text fontFamily="var(--font-mono)" fontSize="9.5px" color="#94A3B8">
                HYDRAULIC INPUTS
              </Text>
            </Flex>
            <Flex direction="column" gap="5px">
              {["Borehole Yield · 80% Cap", "Hazen-Williams Friction", "Total Dynamic Head"].map((row) => (
                <Flex key={row} align="center" gap="6px">
                  <Box w="4px" h="4px" borderRadius="full" bg="#22D3EE" flexShrink={0} />
                  <Text fontSize="11px" color="#E2E8F0" noOfLines={1}>
                    {row}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Box>

          <Box
            p="10px"
            borderRadius="10px"
            bg="rgba(16, 185, 129, 0.07)"
            border="1px solid rgba(16, 185, 129, 0.24)"
          >
            <Text fontFamily="var(--font-mono)" fontSize="9px" color="#34D399" mb="2px">
              POSTGRESQL MATCH
            </Text>
            <Text fontSize="12px" fontWeight="700" color="white">
              151 Pump Models
            </Text>
            <Text fontSize="10.5px" color="#94A3B8">
              943 H-Q curve points
            </Text>
          </Box>
        </Flex>

        {/* Right H-Q Pump Performance Curve SVG */}
        <Box
          p="12px"
          borderRadius="10px"
          bg="rgba(6, 10, 18, 0.72)"
          border="1px solid rgba(34, 211, 238, 0.16)"
          position="relative"
        >
          <Flex justify="space-between" align="center" mb="6px">
            <Text fontFamily="var(--font-mono)" fontSize="9.5px" color="#67E8F9">
              H-Q PERFORMANCE CURVE
            </Text>
            <Text fontFamily="var(--font-mono)" fontSize="9px" color="#34D399">
              Duty Point
            </Text>
          </Flex>

          <Box as="svg" viewBox="0 0 240 112" w="100%" h="108px" display="block" aria-hidden="true">
            <defs>
              <linearGradient id="kisimaCurveFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="kisimaCurveStroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#34D399" />
                <stop offset="100%" stopColor="#22D3EE" />
              </linearGradient>
            </defs>
            {/* Subtle Grid Lines */}
            <line x1="20" y1="22" x2="228" y2="22" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <line x1="20" y1="54" x2="228" y2="54" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <line x1="20" y1="86" x2="228" y2="86" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            <line x1="20" y1="12" x2="20" y2="96" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
            <line x1="20" y1="96" x2="228" y2="96" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

            {/* Area & Pump Curve */}
            <path
              d="M20 26 C 72 28, 128 42, 220 92 L 220 96 L 20 96 Z"
              fill="url(#kisimaCurveFill)"
            />
            <path
              d="M20 26 C 72 28, 128 42, 220 92"
              fill="none"
              stroke="url(#kisimaCurveStroke)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Duty Point Crosshair */}
            <line x1="126" y1="45" x2="126" y2="96" stroke="#34D399" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="20" y1="45" x2="126" y2="45" stroke="#34D399" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="126" cy="45" r="7" fill="rgba(52, 211, 153, 0.24)" />
            <circle cx="126" cy="45" r="3.5" fill="#34D399" stroke="#09131C" strokeWidth="1.5" />
          </Box>
        </Box>
      </Grid>

      {/* Bottom RAG Grounding Strip */}
      <Flex
        align="center"
        justify="space-between"
        gap="10px"
        flexWrap="wrap"
        px="12px"
        py="9px"
        borderRadius="10px"
        bg="rgba(129, 140, 248, 0.08)"
        border="1px solid rgba(129, 140, 248, 0.22)"
      >
        <Flex align="center" gap="8px">
          <Icon as={FiCpu} w="13px" h="13px" color="#A5B4FC" />
          <Text fontSize="11.5px" color="#E2E8F0" fontWeight="500">
            RAG Explanation Layer · Explains results from 24 PDF datasheets
          </Text>
        </Flex>
        <Text fontFamily="var(--font-mono)" fontSize="9.5px" color="#A5B4FC">
          Citations Grounded
        </Text>
      </Flex>
    </Box>
    <PreviewCaption label="Illustrative UI preview · Hydraulic engine & RAG workspace" />
  </Box>
);

export const OutsideVisual = () => (
  <Box w="100%">
    <Box
      className="product-stage"
      bg="linear-gradient(145deg, #160D24 0%, #0E0C1A 55%, #1E0F1D 100%)"
      p={{ base: "16px", md: "22px" }}
      position="relative"
      boxShadow="0 28px 60px -24px rgba(168, 85, 247, 0.28)"
    >
      <Box
        position="absolute"
        top="-30px"
        left="-30px"
        w="190px"
        h="190px"
        bg="radial-gradient(circle, rgba(168, 85, 247, 0.26) 0%, transparent 70%)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-30px"
        right="-20px"
        w="180px"
        h="180px"
        bg="radial-gradient(circle, rgba(251, 113, 133, 0.22) 0%, transparent 70%)"
        pointerEvents="none"
      />

      <Grid templateColumns={{ base: "1fr", sm: "1.12fr 0.88fr" }} gap="14px" position="relative" zIndex="1">
        {/* Left: Event Discovery Card */}
        <Box
          p="16px"
          borderRadius="14px"
          bg="linear-gradient(160deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)"
          border="1px solid rgba(255,255,255,0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          gap="14px"
        >
          <Box>
            <Flex justify="space-between" align="center" mb="12px">
              <Text fontFamily="var(--font-heading)" fontSize="12px" fontWeight="800" letterSpacing="0.08em" color="#F8FAFC">
                OUTSIDE.VIP
              </Text>
              <Box
                px="7px"
                py="2px"
                borderRadius="999px"
                bg="rgba(251, 113, 133, 0.16)"
                border="1px solid rgba(251, 113, 133, 0.35)"
                fontFamily="var(--font-mono)"
                fontSize="9px"
                color="#FDA4AF"
              >
                LIVE EVENTS
              </Box>
            </Flex>

            <Box
              p="14px"
              borderRadius="10px"
              bg="linear-gradient(135deg, rgba(168, 85, 247, 0.28), rgba(251, 113, 133, 0.2))"
              border="1px solid rgba(255,255,255,0.12)"
              mb="10px"
            >
              <Text fontFamily="var(--font-mono)" fontSize="9px" color="#FDE68A" mb="4px">
                CURATED EXPERIENCE
              </Text>
              <Text fontFamily="var(--font-heading)" fontSize="15px" fontWeight="800" color="white" lineHeight="1.2">
                Discovery, Tiers &amp; Organizer Ops
              </Text>
            </Box>
          </Box>

          <Flex justify="space-between" align="center" gap="8px" flexWrap="wrap">
            <Text fontFamily="var(--font-mono)" fontSize="10px" color="#CBD5E1">
              15m Timed Hold
            </Text>
            <Box
              px="9px"
              py="4px"
              borderRadius="7px"
              bg="rgba(168, 85, 247, 0.22)"
              border="1px solid rgba(168, 85, 247, 0.4)"
              fontFamily="var(--font-mono)"
              fontSize="10px"
              color="#E9D5FF"
            >
              Stripe Checkout
            </Box>
          </Flex>
        </Box>

        {/* Right: Stylized Digital QR Ticket Pass */}
        <Box
          p="14px"
          borderRadius="14px"
          bg="rgba(9, 10, 18, 0.9)"
          border="1px solid rgba(255,255,255,0.14)"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          gap="12px"
        >
          <Flex justify="space-between" align="center">
            <Text fontFamily="var(--font-mono)" fontSize="9.5px" color="#C4B5FD">
              DIGITAL PASS
            </Text>
            <Flex align="center" gap="4px" color="#34D399" fontSize="9.5px" fontFamily="var(--font-mono)">
              <Icon as={FiCheckCircle} w="10px" h="10px" />
              QR Gate
            </Flex>
          </Flex>

          {/* Stylized Geometric QR Motif */}
          <Flex justify="center" py="6px">
            <Box
              p="10px"
              borderRadius="10px"
              bg="#F8FAFC"
              w="84px"
              h="84px"
              display="grid"
              gridTemplateColumns="repeat(5, 1fr)"
              gap="3px"
              aria-hidden="true"
            >
              {[1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1].map(
                (cell, idx) => (
                  <Box
                    key={idx}
                    bg={cell ? "#0B0E17" : "transparent"}
                    borderRadius="1.5px"
                  />
                )
              )}
            </Box>
          </Flex>

          <Box pt="8px" borderTop="1px dashed rgba(255,255,255,0.16)">
            <Flex justify="space-between" fontFamily="var(--font-mono)" fontSize="9.5px" color="#94A3B8">
              <Text>RBAC Staff</Text>
              <Text color="#F59E0B">Pre-Pilot</Text>
            </Flex>
          </Box>
        </Box>
      </Grid>
    </Box>
    <PreviewCaption label="Illustrative UI preview · Event storefront & QR pass workflow" />
  </Box>
);

export const IssueTrackerVisual = () => (
  <Box w="100%">
    <Box
      className="product-stage"
      bg="linear-gradient(145deg, #0D1024 0%, #0A0D19 60%, #10162B 100%)"
      p={{ base: "16px", md: "22px" }}
      position="relative"
      boxShadow="0 28px 60px -24px rgba(99, 102, 241, 0.28)"
    >
      <Box
        position="absolute"
        top="-30px"
        right="-20px"
        w="200px"
        h="200px"
        bg="radial-gradient(circle, rgba(99, 102, 241, 0.24) 0%, transparent 70%)"
        pointerEvents="none"
      />

      {/* Top App Bar */}
      <Flex
        justify="space-between"
        align="center"
        pb="12px"
        mb="14px"
        borderBottom="1px solid rgba(255,255,255,0.08)"
        gap="8px"
        flexWrap="wrap"
      >
        <Flex align="center" gap="8px">
          <Icon as={FiZap} color="#818CF8" w="14px" h="14px" />
          <Text fontFamily="var(--font-heading)" fontSize="13px" fontWeight="700" color="white">
            Issue Tracker
          </Text>
          <Box
            px="7px"
            py="2px"
            borderRadius="6px"
            bg="rgba(99, 102, 241, 0.16)"
            border="1px solid rgba(99, 102, 241, 0.34)"
            fontFamily="var(--font-mono)"
            fontSize="9.5px"
            color="#C7D2FE"
          >
            Next.js 14 App Router
          </Box>
        </Flex>
        <Flex align="center" gap="5px" fontFamily="var(--font-mono)" fontSize="9.5px" color="#94A3B8">
          <Icon as={FiLock} w="10px" h="10px" color="#38BDF8" />
          NextAuth Guard
        </Flex>
      </Flex>

      {/* Dashboard Visual: Bar Chart + Issue List */}
      <Grid templateColumns={{ base: "1fr", sm: "0.95fr 1.05fr" }} gap="12px">
        {/* Left: Status Summary & Recharts-Style Bars */}
        <Box
          p="12px"
          borderRadius="10px"
          bg="rgba(7, 9, 18, 0.72)"
          border="1px solid rgba(255,255,255,0.08)"
        >
          <Text fontFamily="var(--font-mono)" fontSize="9.5px" color="#94A3B8" mb="10px">
            SERVER-FETCHED METRICS
          </Text>

          <Flex align="flex-end" justify="space-around" h="88px" pt="8px" px="8px" borderBottom="1px solid rgba(255,255,255,0.08)">
            {[
              { label: "Open", height: "68%", color: "linear-gradient(180deg, #FB7185, #E11D48)" },
              { label: "Progress", height: "46%", color: "linear-gradient(180deg, #818CF8, #4F46E5)" },
              { label: "Closed", height: "82%", color: "linear-gradient(180deg, #34D399, #059669)" },
            ].map((bar) => (
              <Flex key={bar.label} direction="column" align="center" h="100%" justify="flex-end" gap="6px">
                <Box w="26px" h={bar.height} borderRadius="6px 6px 2px 2px" bg={bar.color} />
              </Flex>
            ))}
          </Flex>
          <Flex justify="space-around" pt="6px" fontFamily="var(--font-mono)" fontSize="9px" color="#94A3B8">
            <Text>OPEN</Text>
            <Text>PROG</Text>
            <Text>DONE</Text>
          </Flex>
        </Box>

        {/* Right: Issue Rows */}
        <Flex direction="column" gap="8px">
          {[
            { title: "Auth middleware guard", status: "OPEN", color: "#FB7185", bg: "rgba(251,113,133,0.14)" },
            { title: "Zod API route schema", status: "IN PROGRESS", color: "#818CF8", bg: "rgba(129,140,248,0.16)" },
            { title: "URL pagination state", status: "CLOSED", color: "#34D399", bg: "rgba(52,211,153,0.14)" },
          ].map((issue) => (
            <Flex
              key={issue.title}
              justify="space-between"
              align="center"
              gap="8px"
              px="11px"
              py="9px"
              borderRadius="9px"
              bg="rgba(255,255,255,0.03)"
              border="1px solid rgba(255,255,255,0.07)"
            >
              <Text fontSize="11.5px" color="#E2E8F0" fontWeight="500" noOfLines={1}>
                {issue.title}
              </Text>
              <Box
                px="6px"
                py="2px"
                borderRadius="4px"
                bg={issue.bg}
                color={issue.color}
                fontFamily="var(--font-mono)"
                fontSize="8.5px"
                fontWeight="600"
                flexShrink={0}
              >
                {issue.status}
              </Box>
            </Flex>
          ))}

          <Flex
            justify="space-between"
            align="center"
            px="10px"
            py="7px"
            borderRadius="8px"
            bg="rgba(56, 189, 248, 0.08)"
            border="1px solid rgba(56, 189, 248, 0.2)"
            fontFamily="var(--font-mono)"
            fontSize="9.5px"
            color="#7DD3FC"
          >
            <Text>Prisma + MySQL</Text>
            <Text>TanStack Query</Text>
          </Flex>
        </Flex>
      </Grid>
    </Box>
    <PreviewCaption label="Illustrative UI preview · Next.js App Router dashboard & list" />
  </Box>
);

export const HbsWearVisual = () => (
  <Box w="100%">
    <Box
      className="product-stage"
      bg="linear-gradient(145deg, #171310 0%, #0E0E13 55%, #0B1613 100%)"
      p={{ base: "16px", md: "22px" }}
      position="relative"
      boxShadow="0 28px 60px -24px rgba(245, 158, 11, 0.2)"
    >
      <Box
        position="absolute"
        top="-30px"
        left="-20px"
        w="180px"
        h="180px"
        bg="radial-gradient(circle, rgba(245, 158, 11, 0.18) 0%, transparent 70%)"
        pointerEvents="none"
      />

      <Grid templateColumns={{ base: "1fr", sm: "1fr 1fr" }} gap="14px" position="relative" zIndex="1">
        {/* Left: Apparel Product Lookbook Card */}
        <Box
          p="14px"
          borderRadius="12px"
          bg="linear-gradient(160deg, rgba(255, 250, 240, 0.07), rgba(255, 255, 255, 0.02))"
          border="1px solid rgba(255, 255, 255, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          gap="12px"
        >
          <Flex justify="space-between" align="center">
            <Text fontFamily="var(--font-heading)" fontSize="12px" fontWeight="800" letterSpacing="0.14em" color="#FEF3C7">
              HBS WEAR
            </Text>
            <Icon as={FiShoppingBag} w="13px" h="13px" color="#FCD34D" />
          </Flex>

          <Box
            p="12px"
            borderRadius="9px"
            bg="rgba(12, 12, 16, 0.72)"
            border="1px solid rgba(255,255,255,0.07)"
          >
            <Text fontFamily="var(--font-mono)" fontSize="9px" color="#F59E0B" mb="4px">
              VARIANT CATALOG
            </Text>
            <Text fontSize="13px" fontWeight="700" color="white" mb="8px">
              Size &amp; Color SKUs
            </Text>
            <Flex gap="5px" flexWrap="wrap">
              {["S", "M", "L", "XL"].map((size, idx) => (
                <Box
                  key={size}
                  px="7px"
                  py="2px"
                  borderRadius="4px"
                  fontFamily="var(--font-mono)"
                  fontSize="9.5px"
                  bg={idx === 1 ? "#F8FAFC" : "rgba(255,255,255,0.05)"}
                  color={idx === 1 ? "#0B0D10" : "#CBD5E1"}
                  fontWeight={idx === 1 ? "700" : "500"}
                >
                  {size}
                </Box>
              ))}
            </Flex>
          </Box>

          <Text fontFamily="var(--font-mono)" fontSize="9.5px" color="#94A3B8">
            Cloudinary Media · Admin CMS
          </Text>
        </Box>

        {/* Right: Dual Payment Checkout Sheet */}
        <Box
          p="14px"
          borderRadius="12px"
          bg="rgba(8, 10, 15, 0.88)"
          border="1px solid rgba(255,255,255,0.12)"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          gap="10px"
        >
          <Text fontFamily="var(--font-mono)" fontSize="9.5px" color="#94A3B8">
            DUAL CHECKOUT FLOW
          </Text>

          <Flex direction="column" gap="8px">
            <Flex
              align="center"
              justify="space-between"
              px="10px"
              py="9px"
              borderRadius="8px"
              bg="rgba(16, 185, 129, 0.12)"
              border="1px solid rgba(16, 185, 129, 0.34)"
            >
              <Box>
                <Text fontSize="11.5px" fontWeight="700" color="#ECFDF5">
                  M-Pesa Daraja
                </Text>
                <Text fontSize="9.5px" color="#6EE7B7">
                  STK Push + Callback
                </Text>
              </Box>
              <Box w="7px" h="7px" borderRadius="full" bg="#34D399" />
            </Flex>

            <Flex
              align="center"
              justify="space-between"
              px="10px"
              py="9px"
              borderRadius="8px"
              bg="rgba(129, 140, 248, 0.12)"
              border="1px solid rgba(129, 140, 248, 0.3)"
            >
              <Box>
                <Text fontSize="11.5px" fontWeight="700" color="#EEF2FF">
                  Stripe Card
                </Text>
                <Text fontSize="9.5px" color="#C7D2FE">
                  PaymentIntents + Webhook
                </Text>
              </Box>
              <Box w="7px" h="7px" borderRadius="full" bg="#818CF8" />
            </Flex>
          </Flex>

          <Flex justify="space-between" fontFamily="var(--font-mono)" fontSize="9px" color="#F59E0B">
            <Text>30m Stock Reserve</Text>
            <Text>Sandbox Mode</Text>
          </Flex>
        </Box>
      </Grid>
    </Box>
    <PreviewCaption label="Illustrative UI preview · Apparel catalog & dual-payment checkout" />
  </Box>
);

export const MalwareVisual = () => (
  <Flex
    className="project-media-frame"
    direction="column"
    align="center"
    justify="center"
    gap="10px"
    px="20px"
    textAlign="center"
    bg="linear-gradient(145deg, #0A1516 0%, #0C101B 100%)"
  >
    <Flex
      w="42px"
      h="42px"
      borderRadius="12px"
      bg="rgba(52, 211, 153, 0.12)"
      border="1px solid rgba(52, 211, 153, 0.3)"
      align="center"
      justify="center"
    >
      <Icon as={FiShield} color="#34D399" w="20px" h="20px" />
    </Flex>
    <Text fontFamily="var(--font-mono)" fontSize="10.5px" fontWeight="600" letterSpacing="0.1em" color="#6EE7B7">
      PE HEADER ML CLASSIFIER
    </Text>
    <Text fontSize="12px" color="#94A3B8">
      Scikit-learn · Multi-Model CV · Flask Web App
    </Text>
  </Flex>
);

