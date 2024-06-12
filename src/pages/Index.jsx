import { Box, Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex direction="column" height="100vh">
      {/* Navbar */}
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        padding="1.5rem"
        bg="blue.500"
        color="white"
        position="fixed"
        width="100%"
        zIndex="1000"
      >
        <Box fontSize="1.5rem" fontWeight="bold">
          MyApp
        </Box>
        <IconButton
          aria-label="Open Menu"
          icon={isOpen ? <FaTimes /> : <FaBars />}
          onClick={isOpen ? onClose : onOpen}
          display={{ md: "none" }}
        />
      </Flex>

      {/* Sidebar */}
      <Flex
        as="aside"
        direction="column"
        position="fixed"
        top="0"
        left={isOpen ? "0" : "-100%"}
        width="200px"
        height="100%"
        bg="gray.800"
        color="white"
        transition="left 0.3s"
        zIndex="999"
        paddingTop="4rem"
      >
        <Box padding="1rem" _hover={{ bg: "gray.700" }}>
          Home
        </Box>
        <Box padding="1rem" _hover={{ bg: "gray.700" }}>
          About
        </Box>
        <Box padding="1rem" _hover={{ bg: "gray.700" }}>
          Contact
        </Box>
      </Flex>

      {/* Main Content */}
      <Box
        marginTop="4rem"
        marginLeft={{ base: "0", md: "200px" }}
        padding="1rem"
        flex="1"
      >
        <Box padding="1rem" bg="gray.100" borderRadius="md">
          Welcome to MyApp! This is your main content area.
        </Box>
      </Box>
    </Flex>
  );
};

export default Index;