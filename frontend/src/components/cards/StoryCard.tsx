import {
    Box,
    Heading,
    Text,
    Wrap,
    WrapItem,
} from "@chakra-ui/react";

// Type definition for Story
export interface Story {
    id: number;
    title: string;
    excerpt: string;
    genre: string;
    readTime: string;
    releaseDate: string;
    coverImage: string;
    url?: string;
}

export const StoryCard: React.FC<{ story: Story }> = ({ story }) => {
    return (
        <Box
            as={story.url ? "a" : "div"}
            // @ts-expect-error: href is valid when as="a"
            href={story.url}
            target={story.url ? "_blank" : undefined}
            rel={story.url ? "noopener noreferrer" : undefined}
            bg="retroGreen.100"
            border="2px solid"
            borderColor="retroGreen.800"
            borderRadius="20px"
            p={6}
            transition="all 0.2s ease-out"
            cursor={story.url ? "pointer" : "default"}
            _hover={{
                transform: "translateY(-8px) scale(1.02)",
                boxShadow: "12px 12px 0",
                borderColor: "retroGreen.900",
            }}
            sx={{ _hover: { boxShadow: "12px 12px 0 var(--chakra-colors-retroGreen-900)" } }}
            display="flex"
            flexDirection="column"
            height="100%"
            role="group"
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
                {story.title}
            </Heading>
            <Text
                color="retroGreen.800"
                mb={4}
                fontFamily="'Courier New', monospace"
                fontSize="sm"
                lineHeight="1.6"
                noOfLines={3}
                flex="1"
            >
                {story.excerpt}
            </Text>
            <Wrap spacing={2} align="center">
                <WrapItem>
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
                        [{story.genre}]
                    </Text>
                </WrapItem>
                <WrapItem>
                    <Text color="retroGreen.700">|</Text>
                </WrapItem>
                <WrapItem>
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
                        [{story.readTime}]
                    </Text>
                </WrapItem>
                <WrapItem>
                    <Text color="retroGreen.700">|</Text>
                </WrapItem>
                <WrapItem>
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
                        [{story.releaseDate}]
                    </Text>
                </WrapItem>
            </Wrap>
        </Box>
    );
};
