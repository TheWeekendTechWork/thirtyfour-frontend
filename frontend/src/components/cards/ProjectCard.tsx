import { Box, HStack, Badge, Heading, Image, Text } from "@chakra-ui/react";

// Type definition for Project
export interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
    status: string;
}

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <Box
            borderRadius="lg"
            overflow="hidden"
            bg="retroGreen.700"
            transition="transform 0.3s"
            _hover={{ transform: "translateY(-5px)" }}
            boxShadow="md"
        >
            <Image
                src={project.imageUrl}
                alt={project.title}
                height="200px"
                width="100%"
                objectFit="cover"
            />
            <Box p={5}>
                <HStack mb={2}>
                    <Badge
                        colorScheme={
                            project.status === "In Progress"
                                ? "yellow"
                                : project.status === "Planning"
                                ? "purple"
                                : "blue"
                        }
                    >
                        {project.status}
                    </Badge>
                </HStack>
                <Heading as="h3" size="md" mb={2} color="retroGreen.100">
                    {project.title}
                </Heading>
                <Text color="#FFF" mb={4}>
                    {project.description}
                </Text>
                <HStack spacing={2} mt={2}>
                    {project.tags.map((tag, index) => (
                        <Badge key={index} colorScheme="green" variant="subtle">
                            {tag}
                        </Badge>
                    ))}
                </HStack>
            </Box>
        </Box>
    );
};
