import { Box, VStack, Heading, Text, Icon, HStack, Divider } from "@chakra-ui/react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useData } from "../context/DataContext";

const ContactComponent = () => {
    const { resumeData } = useData();
    const { contact, name, title } = resumeData.personalInfo;

    return (
        <Box
            mx="auto"
            p={8}
            bg="retroGreen.800"
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="calc(100vh - 100px)"
            fontFamily="'Press Start 2P', cursive"
        >
            {/* Visiting Card */}
            <Box
                w="100%"
                maxW="600px" // Standard visiting card roughly 3.5:2 ratio, but scalable
                aspectRatio={{ base: "auto", md: "1.75/1" }} // Visiting card aspect ratio
                bg="retroGreen.800" // Same as background
                borderRadius="20px"
                border="2px solid"
                borderColor="retroGreen.900" // Dark green border
                boxShadow="6px 6px 0 var(--chakra-colors-retroGreen-900), inset 0 0 20px rgba(0,0,0,0.1)" // 3D shadow + inner depth
                p={{ base: 8, md: 12 }}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                position="relative"
                _hover={{
                    transform: "translate(-2px, -2px)",
                    boxShadow: "8px 8px 0 var(--chakra-colors-retroGreen-900)"
                }}
                transition="all 0.3s ease"
            >

                {/* Decorative retro stripes top-right */}
                <Box position="absolute" top="20px" right="20px" display="flex" gap="4px">
                    <Box w="40px" h="4px" bg="retroGreen.600" borderRadius="2px" />
                    <Box w="20px" h="4px" bg="retroGreen.500" borderRadius="2px" />
                </Box>

                <VStack align="start" spacing={6} w="100%">

                    {/* Header Section */}
                    <Box>
                        <Heading
                            as="h1"
                            size="lg" // Larger for name
                            color="retroGreen.100"
                            mb={2}
                            textShadow="2px 2px 0 var(--chakra-colors-retroGreen-900)"
                        >
                            {name}
                        </Heading>
                        <Text
                            fontSize="sm"
                            color="retroGreen.400"
                            letterSpacing="wider"
                        >
                            {title.toUpperCase()}
                        </Text>
                    </Box>

                    <Divider borderColor="retroGreen.600" opacity={0.5} />

                    {/* Contact Details */}
                    <VStack align="start" spacing={4} w="100%">
                        <HStack spacing={4} color="retroGreen.200" _hover={{ color: "retroGreen.100", transform: "translateX(5px)" }} transition="all 0.2s">
                            <Icon as={MdEmail} boxSize={5} />
                            <Text fontSize="xs" as="a" href={`mailto:${contact.email}`}>
                                {contact.email}
                            </Text>
                        </HStack>

                        <HStack spacing={4} color="retroGreen.200" _hover={{ color: "retroGreen.100", transform: "translateX(5px)" }} transition="all 0.2s">
                            <Icon as={MdPhone} boxSize={5} />
                            <Text fontSize="xs">
                                {contact.phone}
                            </Text>
                        </HStack>

                        <HStack spacing={4} color="retroGreen.200" _hover={{ color: "retroGreen.100", transform: "translateX(5px)" }} transition="all 0.2s">
                            <Icon as={MdLocationOn} boxSize={5} />
                            <Text fontSize="xs" as="a" href="https://maps.app.goo.gl/of2ZWLGHPdq8bXRW8" target="_blank">
                                {contact.location}
                            </Text>
                        </HStack>
                    </VStack>

                    {/* Socials / Footer of card */}
                    <HStack spacing={6} mt={4} pt={4} borderTop="1px dashed" borderColor="retroGreen.900" w="100%">
                        <Box as="a" href={contact.linkedin} target="_blank" color="retroGreen.300" _hover={{ color: "retroGreen.100" }}>
                            <Icon as={FaLinkedin} boxSize={6} />
                        </Box>
                        <Box as="a" href={contact.github} target="_blank" color="retroGreen.300" _hover={{ color: "retroGreen.100" }}>
                            <Icon as={FaGithub} boxSize={6} />
                        </Box>
                        <Box ml="auto">
                            <Text fontSize="10px" color="retroGreen.600">ID: #0034</Text>
                        </Box>
                    </HStack>

                </VStack>
            </Box>
        </Box>
    );
};

export default ContactComponent;
