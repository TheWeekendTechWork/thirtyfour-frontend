import {
    Box,
    Heading,
    Badge,
    Text,
    VStack,
    Flex,
    HStack,
    Card,
    CardHeader,
    CardBody
} from "@chakra-ui/react";
import MotionCard from "./MotionCard";

interface WorkExperienceProps {
    workExperience: {
        id: number;
        title: string;
        company: string;
        duration: string;
        description: string;
        achievements: string[];
    }[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ workExperience }) => {
    return (
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
                <Heading size="md" color="retroGreen.100" fontFamily="'Press Start 2P', cursive">
                    Work Experience
                </Heading>
            </CardHeader>
            <CardBody p={{ base: 4, md: 6 }}>
                <VStack align="stretch" spacing={6}>
                    {workExperience.map((job) => (
                        <Box
                            key={job.id}
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
                            <Flex justify="space-between" align="start" mb={4} wrap="wrap" gap={3}>
                                <Box>
                                    <Heading size="xs" color="retroGreen.100" fontFamily="'Press Start 2P', cursive" mb={2} lineHeight="1.6">
                                        {job.company}
                                    </Heading>
                                    <Badge
                                        bg="retroGreen.600"
                                        color="retroGreen.200"
                                        px={2}
                                        py={1}
                                        fontFamily="'Courier New', monospace"
                                        fontSize="xs"
                                        border="1px solid"
                                        borderColor="retroGreen.500"
                                    >
                                        {job.title}
                                    </Badge>
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
                                    {job.duration}
                                </Text>
                            </Flex>

                            <Text color="retroGreen.200" fontSize="sm" fontFamily="'Courier New', monospace" mb={4} lineHeight="1.6">
                                {job.description}
                            </Text>

                            <VStack align="start" spacing={2} pl={2} borderLeft="2px dotted" borderColor="retroGreen.600">
                                {job.achievements.map((achievement, index) => (
                                    <HStack key={index} align="start" spacing={3}>
                                        <Text color="retroGreen.500" fontSize="xs" mt={0.5} fontFamily="'Press Start 2P', cursive">&gt;</Text>
                                        <Text color="retroGreen.300" fontSize="sm" fontFamily="'Courier New', monospace" lineHeight="1.5">
                                            {achievement}
                                        </Text>
                                    </HStack>
                                ))}
                            </VStack>
                        </Box>
                    ))}
                </VStack>
            </CardBody>
        </MotionCard>
    );
};

export default WorkExperience;
