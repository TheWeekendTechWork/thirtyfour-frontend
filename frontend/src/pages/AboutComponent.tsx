import { 
    Box, 
    Container, 
    Heading, 
    Text, 
    VStack, 
    HStack, 
    Image, 
    Link, 
    UnorderedList, 
    ListItem, 
    SimpleGrid,
    Card,
    CardHeader,
    CardBody,
    Badge,
    Flex,
    Icon,
    chakra
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import resumeData from '../assets/resume-data.json';

const MotionCard = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

const AboutComponent = () => {
    const { personalInfo, summary, workExperience, education, skills, projects, hobbies } = resumeData;

    return (
        <Box minH="100vh" bg="retroGreen.800" py={12}>
            <Container maxW="container.xl">
                <VStack spacing={8} align="stretch">
                    {/* Postcard-style Professional Summary with Vintage Contact Card */}
                    <Box position="relative" mt={{ base: 24, md: 20 }}>
                        {/* Vintage Contact Postcard - Clipped on top left */}
                        <MotionCard
                            as={Card}
                            position="absolute"
                            top={{ base: "-90px", md: "-100px" }}
                            left={{ base: "2%", md: "5%" }}
                            w={{ base: "96%", md: "40%" }}
                            bg="retroGreen.100"
                            border="3px solid"
                            borderColor="retroGreen.400"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            // @ts-ignore
                            transition={{ duration: 0.7, delay: 0.3 }}
                            boxShadow="xl"
                            zIndex={3}
                            transform="rotate(-5deg)"
                            _hover={{ transform: "rotate(-3deg) translateY(-5px)", transition: "all 0.4s ease" }}
                            _before={{
                                content: '""',
                                position: "absolute",
                                top: "-15px",
                                right: "30px",
                                width: "35px",
                                height: "35px",
                                borderRadius: "50%",
                                bg: "retroGreen.500",
                                boxShadow: "inset 0 2px 6px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.2)",
                                zIndex: 4,
                                border: "2px solid",
                                borderColor: "retroGreen.600"
                            }}
                        >
                            <CardBody p={{ base: 4, md: 6 }} position="relative">
                                {/* Postcard Header with stripes */}
                                <Box
                                    position="absolute"
                                    top={0}
                                    left={0}
                                    right={0}
                                    h="30px"
                                    bgGradient="repeating-linear(to-r, retroGreen.600 0px, retroGreen.600 10px, retroGreen.200 10px, retroGreen.200 20px, retroGreen.700 20px, retroGreen.700 30px, retroGreen.200 30px, retroGreen.200 40px)"
                                    borderTopRadius="md"
                                />
                                <Text
                                    position="absolute"
                                    top="6px"
                                    right="40px"
                                    fontSize="xs"
                                    fontWeight="bold"
                                    color="retroGreen.900"
                                    letterSpacing="wider"
                                >
                                    CONTACT
                                </Text>

                                <VStack spacing={3} align="center" mt={8}>
                                    <Image
                                        borderRadius="full"
                                        boxSize={{ base: "70px", md: "90px" }}
                                        src={personalInfo.profileImage}
                                        alt={personalInfo.name}
                                        border="3px solid"
                                        borderColor="retroGreen.500"
                                    />
                                    <Heading size={{ base: "sm", md: "md" }} color="retroGreen.900" textAlign="center">
                                        {personalInfo.name}
                                    </Heading>
                                    <Badge bg="retroGreen.600" color="retroGreen.100" fontSize="xs" px={3} py={1}>
                                        {personalInfo.title}
                                    </Badge>
                                    <Text fontSize="xs" color="retroGreen.700" textAlign="center" fontStyle="italic">
                                        {personalInfo.tagline}
                                    </Text>
                                    
                                    <Box w="100%" borderTop="2px dashed" borderColor="retroGreen.400" my={2} />
                                    
                                    <VStack spacing={2} fontSize="xs" color="retroGreen.800" w="100%">
                                        <HStack justify="center" spacing={3}>
                                            <Link href={personalInfo.contact.linkedin} isExternal>
                                                <Icon as={FaLinkedin} w={5} h={5} color="retroGreen.600" _hover={{ color: "retroGreen.800" }} />
                                            </Link>
                                            <Link href={personalInfo.contact.github} isExternal>
                                                <Icon as={FaGithub} w={5} h={5} color="retroGreen.600" _hover={{ color: "retroGreen.800" }} />
                                            </Link>
                                        </HStack>
                                        <HStack spacing={2}>
                                            <Icon as={FaEnvelope} w={3.5} h={3.5} color="retroGreen.600" />
                                            <Text>{personalInfo.contact.email}</Text>
                                        </HStack>
                                        <HStack spacing={2}>
                                            <Icon as={FaPhone} w={3.5} h={3.5} color="retroGreen.600" />
                                            <Text>{personalInfo.contact.phone}</Text>
                                        </HStack>
                                        <HStack spacing={2}>
                                            <Icon as={FaMapMarkerAlt} w={3.5} h={3.5} color="retroGreen.600" />
                                            <Text>{personalInfo.contact.location}</Text>
                                        </HStack>
                                    </VStack>
                                </VStack>

                                {/* Vintage postmark effect */}
                                <Box
                                    position="absolute"
                                    bottom="15px"
                                    right="15px"
                                    w="55px"
                                    h="55px"
                                    borderRadius="50%"
                                    border="2px dashed"
                                    borderColor="retroGreen.500"
                                    opacity={0.4}
                                />
                            </CardBody>
                        </MotionCard>

                        {/* Professional Summary - Main Green Card */}
                        <MotionCard
                            as={Card}
                            bg="retroGreen.700"
                            borderColor="retroGreen.600"
                            borderWidth="3px"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            // @ts-ignore
                            transition={{ duration: 0.5 }}
                            boxShadow="2xl"
                            position="relative"
                            zIndex={1}
                            minH={{ base: "320px", md: "380px" }}
                        >
                            {/* Vertical divider line */}
                            <Box
                                position="absolute"
                                left={{ base: "0", md: "calc(40% + 5%)" }}
                                top="0"
                                bottom="0"
                                width="2px"
                                bg="retroGreen.500"
                                opacity={0.3}
                                display={{ base: "none", md: "block" }}
                                zIndex={0}
                            />
                            
                            <CardHeader 
                                bg="retroGreen.600" 
                                borderTopRadius="md" 
                                pt={8} 
                                pb={6}
                                pl={{ base: 6, md: "calc(40% + 8%)" }}
                            >
                                <Heading size={{ base: "lg", md: "xl" }} color="retroGreen.100">
                                    Professional Summary
                                </Heading>
                            </CardHeader>
                            <CardBody 
                                p={{ base: 6, md: 10 }} 
                                pt={{ base: 4, md: 6 }}
                                pl={{ base: 6, md: "calc(40% + 8%)" }}
                            >
                                <Text fontSize={{ base: "md", md: "xl" }} color="retroGreen.200" lineHeight="tall">
                                    {summary}
                                </Text>
                            </CardBody>
                        </MotionCard>
                    </Box>

                    <MotionCard
                        as={Card}
                        bg="retroGreen.700"
                        borderColor="retroGreen.600"
                        borderWidth="2px"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        // @ts-ignore
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <CardHeader bg="retroGreen.600">
                            <Heading size="lg" color="retroGreen.100">
                                Work Experience
                            </Heading>
                        </CardHeader>
                        <CardBody>
                            <VStack align="stretch" spacing={6}>
                                {workExperience.map((job) => (
                                    <Box
                                        key={job.id}
                                        p={5}
                                        bg="retroGreen.800"
                                        borderRadius="md"
                                        borderLeft="4px solid"
                                        borderColor="retroGreen.400"
                                    >
                                        <VStack align="start" spacing={2}>
                                            <Flex justify="space-between" width="100%" wrap="wrap">
                                                <Box>
                                                    <Badge colorScheme="green" fontSize="md" mb={2}>
                                                        {job.title}
                                                    </Badge>
                                                    <Heading size="md" color="retroGreen.100">
                                                        {job.company}
                                                    </Heading>
                                                </Box>
                                                <Text color="retroGreen.300" fontWeight="bold">
                                                    {job.duration}
                                                </Text>
                                            </Flex>
                                            <Text color="retroGreen.200" fontSize="md">
                                                {job.description}
                                            </Text>
                                            <UnorderedList spacing={2} color="retroGreen.200" pl={4}>
                                                {job.achievements.map((achievement, index) => (
                                                    <ListItem key={index}>
                                                        {achievement}
                                                    </ListItem>
                                                ))}
                                            </UnorderedList>
                                        </VStack>
                                    </Box>
                                ))}
                            </VStack>
                        </CardBody>
                    </MotionCard>

                    <MotionCard
                        as={Card}
                        bg="retroGreen.700"
                        borderColor="retroGreen.600"
                        borderWidth="2px"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        // @ts-ignore
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <CardHeader bg="retroGreen.600">
                            <Heading size="lg" color="retroGreen.100">
                                Education
                            </Heading>
                        </CardHeader>
                        <CardBody>
                            <VStack align="stretch" spacing={6}>
                                {education.map((edu) => (
                                    <Box
                                        key={edu.id}
                                        p={5}
                                        bg="retroGreen.800"
                                        borderRadius="md"
                                        borderLeft="4px solid"
                                        borderColor="retroGreen.400"
                                    >
                                        <VStack align="start" spacing={2}>
                                            <Flex justify="space-between" width="100%" wrap="wrap">
                                                <Box>
                                                    <Badge colorScheme="green" fontSize="md" mb={2}>
                                                        {edu.degree}
                                                    </Badge>
                                                    <Heading size="md" color="retroGreen.100">
                                                        {edu.institution}
                                                    </Heading>
                                                </Box>
                                                <Text color="retroGreen.300" fontWeight="bold">
                                                    {edu.duration}
                                                </Text>
                                            </Flex>
                                            <Text color="retroGreen.200">
                                                {edu.field} | CGPA: {edu.cgpa}
                                            </Text>
                                        </VStack>
                                    </Box>
                                ))}
                            </VStack>
                        </CardBody>
                    </MotionCard>

                    <MotionCard
                        as={Card}
                        bg="retroGreen.700"
                        borderColor="retroGreen.600"
                        borderWidth="2px"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        // @ts-ignore
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <CardHeader bg="retroGreen.600">
                            <Heading size="lg" color="retroGreen.100">
                                Technical Skills
                            </Heading>
                        </CardHeader>
                        <CardBody>
                            <VStack spacing={6} align="stretch">
                                {/* Programming Languages - Central Circle */}
                                <Box textAlign="center">
                                    <Badge bg="retroGreen.500" color="retroGreen.100" fontSize="md" px={4} py={2} mb={3}>
                                        Programming Languages
                                    </Badge>
                                    <Flex justify="center" gap={2} flexWrap="wrap">
                                        {skills.programming.map((skill, index) => (
                                            <Box
                                                key={index}
                                                px={4}
                                                py={2}
                                                bg="retroGreen.600"
                                                borderRadius="full"
                                                cursor="pointer"
                                                _hover={{ transform: "scale(1.1)", transition: "all 0.2s" }}
                                            >
                                                <Text color="retroGreen.100" fontWeight="bold" fontSize="sm">
                                                    {skill}
                                                </Text>
                                            </Box>
                                        ))}
                                    </Flex>
                                </Box>

                                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                                    {/* Backend Skills */}
                                    <Box
                                        p={5}
                                        bg="retroGreen.800"
                                        borderRadius="lg"
                                        border="2px solid"
                                        borderColor="retroGreen.500"
                                        position="relative"
                                    >
                                        <Badge bg="retroGreen.400" color="retroGreen.900" fontSize="sm" mb={3}>
                                            Backend & APIs
                                        </Badge>
                                        <Flex gap={4}>
                                            <VStack align="start" spacing={2} flex="1">
                                                {skills.backend.slice(0, 6).map((skill, index) => (
                                                    <Text key={index} color="retroGreen.200" fontSize="sm">
                                                        • {skill}
                                                    </Text>
                                                ))}
                                            </VStack>
                                            {skills.backend.length > 6 && (
                                                <>
                                                    <Box width="1px" bg="retroGreen.500" />
                                                    <VStack align="start" spacing={2} flex="1">
                                                        {skills.backend.slice(6).map((skill, index) => (
                                                            <Text key={index} color="retroGreen.200" fontSize="sm">
                                                                • {skill}
                                                            </Text>
                                                        ))}
                                                    </VStack>
                                                </>
                                            )}
                                        </Flex>
                                    </Box>

                                    {/* Frontend Skills */}
                                    <Box
                                        p={5}
                                        bg="retroGreen.800"
                                        borderRadius="lg"
                                        border="2px solid"
                                        borderColor="retroGreen.500"
                                        position="relative"
                                    >
                                        <Badge bg="retroGreen.400" color="retroGreen.900" fontSize="sm" mb={3}>
                                            Frontend & UI
                                        </Badge>
                                        <Flex gap={4}>
                                            <VStack align="start" spacing={2} flex="1">
                                                {skills.frontend.slice(0, 6).map((skill, index) => (
                                                    <Text key={index} color="retroGreen.200" fontSize="sm">
                                                        • {skill}
                                                    </Text>
                                                ))}
                                            </VStack>
                                            {skills.frontend.length > 6 && (
                                                <>
                                                    <Box width="1px" bg="retroGreen.500" />
                                                    <VStack align="start" spacing={2} flex="1">
                                                        {skills.frontend.slice(6).map((skill, index) => (
                                                            <Text key={index} color="retroGreen.200" fontSize="sm">
                                                                • {skill}
                                                            </Text>
                                                        ))}
                                                    </VStack>
                                                </>
                                            )}
                                        </Flex>
                                    </Box>

                                    {/* Database Skills */}
                                    <Box
                                        p={5}
                                        bg="retroGreen.800"
                                        borderRadius="lg"
                                        border="2px solid"
                                        borderColor="retroGreen.500"
                                        position="relative"
                                    >
                                        <Badge bg="retroGreen.400" color="retroGreen.900" fontSize="sm" mb={3}>
                                            Databases
                                        </Badge>
                                        <Flex gap={4}>
                                            <VStack align="start" spacing={2} flex="1">
                                                {skills.database.slice(0, 6).map((skill, index) => (
                                                    <Text key={index} color="retroGreen.200" fontSize="sm">
                                                        • {skill}
                                                    </Text>
                                                ))}
                                            </VStack>
                                            {skills.database.length > 6 && (
                                                <>
                                                    <Box width="1px" bg="retroGreen.500" />
                                                    <VStack align="start" spacing={2} flex="1">
                                                        {skills.database.slice(6).map((skill, index) => (
                                                            <Text key={index} color="retroGreen.200" fontSize="sm">
                                                                • {skill}
                                                            </Text>
                                                        ))}
                                                    </VStack>
                                                </>
                                            )}
                                        </Flex>
                                    </Box>

                                    {/* DevOps Skills */}
                                    <Box
                                        p={5}
                                        bg="retroGreen.800"
                                        borderRadius="lg"
                                        border="2px solid"
                                        borderColor="retroGreen.500"
                                        position="relative"
                                    >
                                        <Badge bg="retroGreen.400" color="retroGreen.900" fontSize="sm" mb={3}>
                                            DevOps & Tools
                                        </Badge>
                                        <Flex gap={4}>
                                            <VStack align="start" spacing={2} flex="1">
                                                {skills.devops.slice(0, 6).map((skill, index) => (
                                                    <Text key={index} color="retroGreen.200" fontSize="sm">
                                                        • {skill}
                                                    </Text>
                                                ))}
                                            </VStack>
                                            {skills.devops.length > 6 && (
                                                <>
                                                    <Box width="1px" bg="retroGreen.500" />
                                                    <VStack align="start" spacing={2} flex="1">
                                                        {skills.devops.slice(6).map((skill, index) => (
                                                            <Text key={index} color="retroGreen.200" fontSize="sm">
                                                                • {skill}
                                                            </Text>
                                                        ))}
                                                    </VStack>
                                                </>
                                            )}
                                        </Flex>
                                    </Box>

                                    {/* Cloud Skills */}
                                    <Box
                                        p={5}
                                        bg="retroGreen.800"
                                        borderRadius="lg"
                                        border="2px solid"
                                        borderColor="retroGreen.500"
                                        position="relative"
                                    >
                                        <Badge bg="retroGreen.400" color="retroGreen.900" fontSize="sm" mb={3}>
                                            Cloud Platforms
                                        </Badge>
                                        <Flex gap={4}>
                                            <VStack align="start" spacing={2} flex="1">
                                                {skills.cloud.slice(0, 6).map((skill, index) => (
                                                    <Text key={index} color="retroGreen.200" fontSize="sm">
                                                        • {skill}
                                                    </Text>
                                                ))}
                                            </VStack>
                                            {skills.cloud.length > 6 && (
                                                <>
                                                    <Box width="1px" bg="retroGreen.500" />
                                                    <VStack align="start" spacing={2} flex="1">
                                                        {skills.cloud.slice(6).map((skill, index) => (
                                                            <Text key={index} color="retroGreen.200" fontSize="sm">
                                                                • {skill}
                                                            </Text>
                                                        ))}
                                                    </VStack>
                                                </>
                                            )}
                                        </Flex>
                                    </Box>

                                    {/* Other Skills */}
                                    <Box
                                        p={5}
                                        bg="retroGreen.800"
                                        borderRadius="lg"
                                        border="2px solid"
                                        borderColor="retroGreen.500"
                                        position="relative"
                                    >
                                        <Badge bg="retroGreen.400" color="retroGreen.900" fontSize="sm" mb={3}>
                                            Other Skills
                                        </Badge>
                                        <Flex gap={4}>
                                            <VStack align="start" spacing={2} flex="1">
                                                {skills.other.slice(0, 6).map((skill, index) => (
                                                    <Text key={index} color="retroGreen.200" fontSize="sm">
                                                        • {skill}
                                                    </Text>
                                                ))}
                                            </VStack>
                                            {skills.other.length > 6 && (
                                                <>
                                                    <Box width="1px" bg="retroGreen.500" />
                                                    <VStack align="start" spacing={2} flex="1">
                                                        {skills.other.slice(6).map((skill, index) => (
                                                            <Text key={index} color="retroGreen.200" fontSize="sm">
                                                                • {skill}
                                                            </Text>
                                                        ))}
                                                    </VStack>
                                                </>
                                            )}
                                        </Flex>
                                    </Box>
                                </SimpleGrid>
                            </VStack>
                        </CardBody>
                    </MotionCard>

                    <MotionCard
                        as={Card}
                        bg="retroGreen.700"
                        borderColor="retroGreen.600"
                        borderWidth="2px"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        // @ts-ignore
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <CardHeader bg="retroGreen.600">
                            <Heading size="lg" color="retroGreen.100">
                                Key Projects
                            </Heading>
                        </CardHeader>
                        <CardBody>
                            <VStack align="stretch" spacing={6}>
                                {projects.map((project) => (
                                    <Box
                                        key={project.id}
                                        p={5}
                                        bg="retroGreen.800"
                                        borderRadius="md"
                                        borderLeft="4px solid"
                                        borderColor="retroGreen.400"
                                    >
                                        <VStack align="start" spacing={2}>
                                            <Heading size="md" color="retroGreen.100">
                                                {project.name}
                                            </Heading>
                                            <HStack spacing={2} flexWrap="wrap">
                                                {project.technologies.map((tech, index) => (
                                                    <Badge key={index} colorScheme="green">{tech}</Badge>
                                                ))}
                                            </HStack>
                                            <Text color="retroGreen.200">
                                                {project.description}
                                            </Text>
                                        </VStack>
                                    </Box>
                                ))}
                            </VStack>
                        </CardBody>
                    </MotionCard>

                    <MotionCard
                        as={Card}
                        bg="retroGreen.700"
                        borderColor="retroGreen.600"
                        borderWidth="2px"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        // @ts-ignore
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <CardHeader bg="retroGreen.600">
                            <Heading size="lg" color="retroGreen.100">
                                Interests & Hobbies
                            </Heading>
                        </CardHeader>
                        <CardBody>
                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                                {hobbies.map((hobby) => (
                                    <Box key={hobby.id} p={4} bg="retroGreen.800" borderRadius="md">
                                        <Text color="retroGreen.200" fontSize="lg">
                                            {hobby.icon} {hobby.name}
                                        </Text>
                                    </Box>
                                ))}
                            </SimpleGrid>
                        </CardBody>
                    </MotionCard>
                </VStack>
            </Container>
        </Box>
    );
};

export default AboutComponent;
