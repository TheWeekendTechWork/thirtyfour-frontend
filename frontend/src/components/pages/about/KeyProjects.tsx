import {
    Box,
    Heading,
    Badge,
    Text,
    SimpleGrid,
    Flex,
    Card,
    CardHeader,
    CardBody
} from "@chakra-ui/react";
import MotionCard from "./MotionCard";

interface KeyProjectsProps {
    projects: {
        id: number;
        name: string;
        description: string;
        technologies: string[];
    }[];
}

const KeyProjects: React.FC<KeyProjectsProps> = ({ projects }) => {
    return (
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
                <Heading size="md" color="retroGreen.100" fontFamily="'Press Start 2P', cursive">
                    Key Projects
                </Heading>
            </CardHeader>
            <CardBody p={{ base: 4, md: 6 }}>
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
                    {projects.map((project) => (
                        <Box
                            key={project.id}
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
                            display="flex"
                            flexDirection="column"
                        >
                            <Heading
                                size="sm"
                                color="retroGreen.100"
                                fontFamily="'Press Start 2P', cursive"
                                mb={4}
                                lineHeight="1.5"
                            >
                                {project.name}
                            </Heading>

                            <Flex gap={2} flexWrap="wrap" mb={4}>
                                {project.technologies.map((tech, index) => (
                                    <Badge
                                        key={index}
                                        bg="retroGreen.900"
                                        color="retroGreen.300"
                                        px={2}
                                        py={1}
                                        fontFamily="'Courier New', monospace"
                                        fontSize="xs"
                                        border="1px solid"
                                        borderColor="retroGreen.600"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </Flex>

                            <Text
                                color="retroGreen.200"
                                fontSize="sm"
                                fontFamily="'Courier New', monospace"
                                lineHeight="1.6"
                                flex="1"
                            >
                                {project.description}
                            </Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </CardBody>
        </MotionCard>
    );
};

export default KeyProjects;
