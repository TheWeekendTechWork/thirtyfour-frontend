import {
    Box,
    Heading,
    Text,
    VStack,
    Flex,
    Card,
    CardHeader,
    CardBody
} from "@chakra-ui/react";
import MotionCard from "./MotionCard";

interface EducationProps {
    education: {
        id: number;
        degree: string;
        institution: string;
        duration: string;
        field: string;
        cgpa: string;
    }[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
    return (
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
                <Heading size="md" color="retroGreen.100" fontFamily="'Press Start 2P', cursive">
                    Education
                </Heading>
            </CardHeader>
            <CardBody p={{ base: 4, md: 6 }}>
                <VStack align="stretch" spacing={6}>
                    {education.map((edu) => (
                        <Box
                            key={edu.id}
                            p={6}
                            bg="retroGreen.800"
                            border="2px solid"
                            borderColor="retroGreen.500"
                            position="relative"
                            role="group"
                            _hover={{
                                borderColor: "retroGreen.400",
                                boxShadow: "4px 4px 0 var(--chakra-colors-retroGreen-600)",
                                transform: "translate(-2px, -2px)"
                            }}
                            transition="all 0.2s ease"
                        >
                            <Flex justify="space-between" align="start" mb={3} wrap="wrap" gap={3}>
                                <Box>
                                    <Heading size="xs" color="retroGreen.100" fontFamily="'Press Start 2P', cursive" mb={2} lineHeight="1.6">
                                        {edu.degree}
                                    </Heading>
                                    <Text
                                        color="retroGreen.300"
                                        fontFamily="'Courier New', monospace"
                                        fontSize="sm"
                                        fontWeight="bold"
                                    >
                                        {edu.institution}
                                    </Text>
                                </Box>
                                <Text
                                    color="retroGreen.400"
                                    fontSize="xs"
                                    fontFamily="'Press Start 2P', cursive"
                                    bg="retroGreen.900"
                                    px={3}
                                    py={1}
                                    border="1px dashed"
                                    borderColor="retroGreen.600"
                                >
                                    {edu.duration}
                                </Text>
                            </Flex>

                            <Box w="100%" borderTop="1px dotted" borderColor="retroGreen.600" my={3} />

                            <Text color="retroGreen.200" fontSize="sm" fontFamily="'Courier New', monospace">
                                {edu.field} <Text as="span" color="retroGreen.500">|</Text> CGPA: <Text as="span" color="retroGreen.100" fontWeight="bold">{edu.cgpa}</Text>
                            </Text>
                        </Box>
                    ))}
                </VStack>
            </CardBody>
        </MotionCard>
    );
};

export default Education;
