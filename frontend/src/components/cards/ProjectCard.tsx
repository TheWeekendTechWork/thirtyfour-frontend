import { Box, HStack, Badge, Heading, Image, Text } from "@chakra-ui/react";

// Sample data for projects
export const upcomingProjects = [
    {
        id: 1,
        title: "AI-Powered Content Generator",
        description:
            "A tool that uses machine learning to generate high-quality content for various purposes.",
        tags: ["Python", "Machine Learning", "React"],
        imageUrl:
            "https://images.unsplash.com/photo-1677442135136-760c813028c0?q=80&w=500&auto=format&fit=crop",
        status: "In Progress",
    },
    {
        id: 2,
        title: "Smart Home Dashboard",
        description:
            "A centralized dashboard to control and monitor all your smart home devices.",
        tags: ["IoT", "React", "Node.js"],
        imageUrl:
            "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=500&auto=format&fit=crop",
        status: "Planning",
    },
    {
        id: 3,
        title: "Sustainable Living App",
        description:
            "Track and reduce your carbon footprint with personalized recommendations.",
        tags: ["React Native", "MongoDB", "Express"],
        imageUrl:
            "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=500&auto=format&fit=crop",
        status: "Coming Soon",
    },
];

export const ProjectCard: React.FC<{
    project: (typeof upcomingProjects)[0];
}> = ({ project }) => {
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
