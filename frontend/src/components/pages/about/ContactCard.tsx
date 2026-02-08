import { useState, useEffect } from "react";
import {
    Box,
    Heading,
    Text,
    VStack,
    HStack,
    Image,
    Link,
    Card,
    CardBody,
    Badge,
    Icon
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import MotionCard from "./MotionCard";

import profileImage1 from '/images/jairam-profile-picture.jpeg';
import profileImage2 from '/images/jairam-profile-picturee.jpeg';
import altProfileImage from '/images/jairam-alt-avatar.jpeg';

interface ContactCardProps {
    personalInfo: {
        name: string;
        title: string;
        tagline: string;
        // Images are now handled internally
        contact: {
            email: string;
            phone: string;
            location: string;
            linkedin: string;
            github: string;
        };
    };
}

const ContactCard: React.FC<ContactCardProps> = ({ personalInfo }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const profileImages = [profileImage1, profileImage2];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % profileImages.length);
        }, 2000); // Cycle every 2 seconds for visibility
        return () => clearInterval(interval);
    }, []);

    const currentImage = isHovered
        ? altProfileImage
        : profileImages[currentImageIndex];

    return (
        <MotionCard
            as={Card}
            bg="retroGreen.100"
            border="3px solid"
            borderColor="retroGreen.400"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            // @ts-ignore
            transition={{ duration: 0.7, delay: 0.2 }}
            boxShadow="xl"
            transform="rotate(-2deg)"
            _hover={{ transform: "rotate(0deg) scale(1.02)", transition: "all 0.4s ease" }}
            position="relative"
            overflow="hidden"
        >
            <CardBody p={{ base: 6, md: 8 }} position="relative">
                {/* Decor: Stripes at top */}
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    h="20px"
                    bgGradient="repeating-linear-gradient(45deg, retroGreen.600 0px, retroGreen.600 10px, retroGreen.200 10px, retroGreen.200 20px)"
                />
                <Text
                    position="absolute"
                    top="24px"
                    right="24px"
                    fontSize="xs"
                    fontWeight="bold"
                    color="retroGreen.900"
                    letterSpacing="wider"
                    fontFamily="'Press Start 2P', cursive"
                >
                    CONTACT_ID: #0034
                </Text>

                <VStack spacing={5} align="center" mt={8}>
                    <Box
                        position="relative"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        cursor="pointer"
                    >
                        <Image
                            borderRadius="full"
                            boxSize={{ base: "100px", md: "120px" }}
                            src={currentImage}
                            alt={personalInfo.name}
                            border="4px solid"
                            borderColor="retroGreen.500"
                            transition="src 0.3s ease-in-out"
                        />
                        <Box
                            position="absolute"
                            bottom="0"
                            right="0"
                            bg="retroGreen.500"
                            borderRadius="full"
                            p={2}
                            border="2px solid"
                            borderColor="retroGreen.100"
                        >
                            <Icon as={FaMapMarkerAlt} color="retroGreen.100" w={3} h={3} />
                        </Box>
                    </Box>

                    <VStack spacing={1}>
                        <Heading size="md" color="retroGreen.900" textAlign="center" fontFamily="'Press Start 2P', cursive" lineHeight="1.4">
                            {personalInfo.name}
                        </Heading>
                        <Badge bg="retroGreen.600" color="retroGreen.100" fontSize="xs" px={3} py={1} fontFamily="'Press Start 2P', cursive">
                            {personalInfo.title}
                        </Badge>
                    </VStack>

                    <Text fontSize="sm" color="retroGreen.700" textAlign="center" fontFamily="'Courier New', monospace" fontWeight="bold">
                        "{personalInfo.tagline}"
                    </Text>

                    <Box w="100%" borderTop="2px dashed" borderColor="retroGreen.400" my={2} />

                    <VStack spacing={3} fontSize="sm" color="retroGreen.900" w="100%" align="start" fontFamily="'Courier New', monospace" fontWeight="bold">
                        <HStack spacing={3}>
                            <Icon as={FaEnvelope} color="retroGreen.600" />
                            <Text>{personalInfo.contact.email}</Text>
                        </HStack>
                        <HStack spacing={3}>
                            <Icon as={FaPhone} color="retroGreen.600" />
                            <Text>{personalInfo.contact.phone}</Text>
                        </HStack>
                        <HStack spacing={3}>
                            <Icon as={FaMapMarkerAlt} color="retroGreen.600" />
                            <Text>{personalInfo.contact.location}</Text>
                        </HStack>
                        <HStack spacing={4} justify="center" w="100%" pt={2}>
                            <Link href={personalInfo.contact.linkedin} isExternal>
                                <Icon as={FaLinkedin} w={6} h={6} color="retroGreen.700" _hover={{ color: "retroGreen.900" }} />
                            </Link>
                            <Link href={personalInfo.contact.github} isExternal>
                                <Icon as={FaGithub} w={6} h={6} color="retroGreen.700" _hover={{ color: "retroGreen.900" }} />
                            </Link>
                        </HStack>
                    </VStack>
                </VStack>
            </CardBody>
        </MotionCard>
    );
};

export default ContactCard;
