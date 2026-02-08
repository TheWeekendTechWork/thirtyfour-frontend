import {
    Box,
    Heading,
    Badge,
    Flex,
    Text,
    VStack,
    SimpleGrid,
    Card,
    CardHeader,
    CardBody
} from "@chakra-ui/react";
import MotionCard from "./MotionCard";

interface TechnicalSkillsProps {
    skills: {
        programming: string[];
        backend: string[];
        frontend: string[];
        database: string[];
        devops: string[];
        cloud: string[];
        other: string[];
    };
}

const TechnicalSkills: React.FC<TechnicalSkillsProps> = ({ skills }) => {
    return (
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
                <Heading size="md" color="retroGreen.100" fontFamily="'Press Start 2P', cursive">
                    Technical Skills
                </Heading>
            </CardHeader>
            <CardBody p={{ base: 4, md: 6 }}>
                <VStack spacing={8} align="stretch">
                    {/* Programming Languages - Prominent Display */}
                    <Box textAlign="center" py={4} borderBottom="2px dashed" borderColor="retroGreen.500">
                        <Badge
                            bg="retroGreen.900"
                            color="retroGreen.100"
                            fontSize="xs"
                            px={4}
                            py={2}
                            mb={4}
                            fontFamily="'Press Start 2P', cursive"
                            border="1px solid"
                            borderColor="retroGreen.400"
                        >
                            CORE LANGUAGES
                        </Badge>
                        <Flex justify="center" gap={3} flexWrap="wrap">
                            {skills.programming.map((skill, index) => (
                                <Box
                                    key={index}
                                    px={4}
                                    py={2}
                                    bg="retroGreen.500"
                                    color="retroGreen.900"
                                    borderRadius="none"
                                    cursor="default"
                                    fontFamily="'Press Start 2P', cursive"
                                    fontSize="xs"
                                    boxShadow="4px 4px 0 var(--chakra-colors-retroGreen-800)"
                                    transition="all 0.2s"
                                    _hover={{ transform: "translate(-2px, -2px)", boxShadow: "6px 6px 0 var(--chakra-colors-retroGreen-800)" }}
                                >
                                    {skill}
                                </Box>
                            ))}
                        </Flex>
                    </Box>

                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                        {[
                            { title: "Backend & APIs", skills: skills.backend },
                            { title: "Frontend & UI", skills: skills.frontend },
                            { title: "Databases", skills: skills.database },
                            { title: "DevOps & Tools", skills: skills.devops },
                            { title: "Cloud Platforms", skills: skills.cloud },
                            { title: "Other Skills", skills: skills.other }
                        ].map((category, idx) => (
                            <Box
                                key={idx}
                                p={5}
                                bg="retroGreen.800"
                                border="2px solid"
                                borderColor="retroGreen.600"
                                position="relative"
                                role="group"
                                _hover={{ borderColor: "retroGreen.400" }}
                                transition="all 0.2s"
                            >
                                <Heading
                                    size="xs"
                                    color="retroGreen.100"
                                    fontFamily="'Press Start 2P', cursive"
                                    mb={4}
                                    textAlign="center"
                                    borderBottom="2px solid"
                                    borderColor="retroGreen.600"
                                    pb={2}
                                >
                                    {category.title}
                                </Heading>
                                <SimpleGrid columns={2} spacing={2}>
                                    {category.skills.map((skill, sIdx) => (
                                        <Flex key={sIdx} align="center" gap={2}>
                                            <Box w="6px" h="6px" bg="retroGreen.500" />
                                            <Text
                                                color="retroGreen.200"
                                                fontSize="xs"
                                                fontFamily="'Courier New', monospace"
                                                fontWeight="bold"
                                            >
                                                {skill}
                                            </Text>
                                        </Flex>
                                    ))}
                                </SimpleGrid>
                            </Box>
                        ))}
                    </SimpleGrid>
                </VStack>
            </CardBody>
        </MotionCard>
    );
};

export default TechnicalSkills;
