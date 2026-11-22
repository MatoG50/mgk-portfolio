import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FiDownload, FiMenu } from "react-icons/fi";
import type { NavItem, scrollToSectionFn } from "./NavBar";

interface ChakraMenuProps {
  items: readonly NavItem[];
  scrollToSection: scrollToSectionFn;
  activeSection: string;
}

const ChakraMenu: React.FC<ChakraMenuProps> = ({ items, scrollToSection, activeSection }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleNavigate = (sectionId: string) => {
    onClose();
    setTimeout(() => scrollToSection(sectionId), 120);
  };

  return (
    <>
      <IconButton
        aria-label="Open navigation menu"
        icon={<FiMenu size={19} />}
        onClick={onOpen}
        variant="ghost"
        size="sm"
        h="36px"
        w="36px"
        borderRadius="full"
        border="1px solid rgba(255, 255, 255, 0.12)"
        color="var(--text-primary)"
        bg="rgba(255, 255, 255, 0.04)"
        _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
      />

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay bg="rgba(4, 6, 12, 0.78)" backdropFilter="blur(6px)" />
        <DrawerContent
          bg="#0B0E17"
          borderLeft="1px solid rgba(255, 255, 255, 0.1)"
          color="var(--text-primary)"
        >
          <DrawerCloseButton
            top="18px"
            right="18px"
            color="var(--text-secondary)"
            _hover={{ color: "var(--text-primary)", bg: "rgba(255,255,255,0.06)" }}
          />
          <DrawerHeader
            borderBottom="1px solid rgba(255, 255, 255, 0.08)"
            py="20px"
            px="24px"
            fontFamily="var(--font-heading)"
            fontSize="16px"
            fontWeight="700"
          >
            Explore
          </DrawerHeader>

          <DrawerBody px="20px" py="24px" display="flex" flexDirection="column" justifyContent="space-between">
            <Flex as="nav" aria-label="Mobile navigation" direction="column" gap="8px">
              {items.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <Box
                    as="button"
                    type="button"
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    w="100%"
                    px="16px"
                    py="13px"
                    borderRadius="12px"
                    bg={isActive ? "rgba(34, 211, 238, 0.12)" : "transparent"}
                    border="1px solid"
                    borderColor={isActive ? "rgba(34, 211, 238, 0.35)" : "transparent"}
                    color={isActive ? "var(--text-primary)" : "var(--text-secondary)"}
                    fontSize="15px"
                    fontWeight={isActive ? "600" : "500"}
                    textAlign="left"
                    transition="all 0.18s ease"
                    _hover={{ bg: "rgba(255,255,255,0.05)", color: "var(--text-primary)" }}
                  >
                    <Text>{item.label}</Text>
                    <Text
                      fontFamily="var(--font-mono)"
                      fontSize="11px"
                      color={isActive ? "var(--accent-cyan)" : "var(--text-muted)"}
                    >
                      0{idx + 1}
                    </Text>
                  </Box>
                );
              })}
            </Flex>

            <Box pt="20px" borderTop="1px solid rgba(255, 255, 255, 0.08)">
              <Link
                href="/resume.pdf"
                download
                className="btn-showcase-primary"
                color="#07080D"
                _hover={{ color: "#07080D", textDecoration: "none" }}
                _active={{ color: "#07080D" }}
                _focus={{ color: "#07080D" }}
                w="100%"
                onClick={onClose}
              >
                <Icon as={FiDownload} w="15px" h="15px" color="#07080D" />
                Download Resume
              </Link>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ChakraMenu;
