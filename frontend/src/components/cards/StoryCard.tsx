import {
    Box,
    HStack,
    Badge,
    Icon,
    Heading,
    Image,
    Text,
} from "@chakra-ui/react";
import { FaClock, FaBookOpen } from "react-icons/fa";

export // Sample data for stories
const upcomingStories = [
    {
        id: 1,
        title: "The Digital Nomad",
        excerpt:
            "A journey through remote work culture and the freedom of location independence.",
        genre: "Tech Lifestyle",
        readTime: "15 min read",
        releaseDate: "Coming Dec 2023",
        coverImage:
            "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=500&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Artificial Dreams",
        excerpt:
            "A speculative fiction exploring the boundaries between human consciousness and artificial intelligence.",
        genre: "Sci-Fi",
        readTime: "20 min read",
        releaseDate: "Coming Jan 2024",
        coverImage:
            "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=500&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "The Open Source Revolution",
        excerpt:
            "How collaborative development is changing the world one commit at a time.",
        genre: "Tech History",
        readTime: "12 min read",
        releaseDate: "Coming Feb 2024",
        coverImage:
            "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=500&auto=format&fit=crop",
    },
];

export const StoryCard: React.FC<{ story: (typeof upcomingStories)[0] }> = ({
    story,
}) => {
    return (
        <Box
            borderRadius="lg"
            overflow="hidden"
            bg="retroGreen.700"
            transition="transform 0.3s"
            _hover={{ transform: "translateY(-5px)" }}
            boxShadow="md"
            display="flex"
            flexDirection={["column", "column", "row"]}
            height={["auto", "auto", "220px"]}
        >
            <Image
                src={story.coverImage}
                alt={story.title}
                width={["100%", "100%", "200px"]}
                height={["200px", "200px", "100%"]}
                objectFit="cover"
            />
            <Box
                p={5}
                flex="1"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
            >
                <Box>
                    <HStack mb={2}>
                        <Badge colorScheme="orange">{story.genre}</Badge>
                        <HStack spacing={1} color="retroGreen.200">
                            <Icon as={FaClock} />
                            <Text fontSize="xs">{story.readTime}</Text>
                        </HStack>
                    </HStack>
                    <Heading as="h3" size="md" mb={2} color="retroGreen.100">
                        {story.title}
                    </Heading>
                    <Text color="#FFF" mb={4}>
                        {story.excerpt}
                    </Text>
                </Box>
                <HStack justify="space-between" color="retroGreen.200">
                    <HStack>
                        <Icon as={FaBookOpen} />
                        <Text fontSize="sm">Coming soon</Text>
                    </HStack>
                    <Text fontSize="sm">{story.releaseDate}</Text>
                </HStack>
            </Box>
        </Box>
    );
};
