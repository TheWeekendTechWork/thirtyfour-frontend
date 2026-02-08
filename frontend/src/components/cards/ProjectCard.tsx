import { Box, Heading, Text, Wrap, WrapItem } from "@chakra-ui/react";

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
            bg="retroGreen.100"
            border="2px solid"
            borderColor="retroGreen.800"
            p={6}
            borderRadius="20px"
            transition="all 0.2s ease-out"
            cursor="pointer"
            role="group"
            _hover={{
                transform: "translateY(-8px) scale(1.02)",
                boxShadow: "12px 12px 0",
                borderColor: "retroGreen.900",
            }}
            sx={{ _hover: { boxShadow: "12px 12px 0 var(--chakra-colors-retroGreen-900)" } }}
        >
            <Heading
                as="h3"
                size="md"
                mb={3}
                color="retroGreen.900"
                fontFamily="'Courier New', monospace"
                fontWeight="bold"
                position="relative"
                width="fit-content"
                _after={{
                    content: '""',
                    position: "absolute",
                    width: "0%",
                    height: "2px",
                    bottom: "-2px",
                    left: "0",
                    bg: "retroGreen.900",
                    transition: "width 0.2s ease-out",
                }}
                _groupHover={{
                    _after: {
                        width: "100%",
                    },
                }}
            >
                {project.title}
            </Heading>
            <Text
                color="retroGreen.800"
                mb={4}
                fontFamily="'Courier New', monospace"
                fontSize="sm"
                lineHeight="1.6"
            >
                {project.description}
            </Text>
            <Wrap spacing={2}>
                {project.tags.map((tag, index) => (
                    <WrapItem key={index}>
                        <Text
                            color="retroGreen.700"
                            fontFamily="'Courier New', monospace"
                            fontSize="sm"
                            fontWeight="medium"
                            border="1px solid"
                            borderColor="retroGreen.900"
                            px={2}
                            py={0.5}
                            borderRadius="sm"
                        >
                            [{tag}]
                        </Text>
                    </WrapItem>
                ))}
            </Wrap>
        </Box>
    );
};
