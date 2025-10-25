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

// Type definition for Story
export interface Story {
    id: number;
    title: string;
    excerpt: string;
    genre: string;
    readTime: string;
    releaseDate: string;
    coverImage: string;
}

export const StoryCard: React.FC<{ story: Story }> = ({ story }) => {
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
