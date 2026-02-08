import React from "react";
import {
    Box,
    Container,
    VStack,
    Heading,
    Text,
    Flex,
    SimpleGrid,
    Button,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { StoryCard } from "../components/cards/StoryCard";
import { useData } from "../context/DataContext";

const StoriesComponent: React.FC = () => {
    const { homeData } = useData();
    const { upcomingStories } = homeData;

    return (
        <Box bg="retroGreen.800" minHeight="calc(100vh - 160px)">
            <Container maxW="container.xl" py={16}>
                <VStack spacing={8} align="stretch">
                    <Button
                        as={RouterLink}
                        to="/"
                        variant="ghost"
                        color="retroGreen.400"
                        _hover={{ bg: "retroGreen.900", color: "retroGreen.100" }}
                        leftIcon={<ArrowBackIcon />}
                        alignSelf="flex-start"
                        size="sm"
                        mb={-2}
                        fontFamily="'Courier New', monospace"
                    >
                        Back to Home
                    </Button>
                    <Flex align="center" gap={3}>
                        <Text
                            color="retroGreen.400"
                            fontFamily="'Courier New', monospace"
                            fontSize="xl"
                            fontWeight="bold"
                        >
                            &gt;
                        </Text>
                        <Heading
                            as="h1"
                            size="xl"
                            color="retroGreen.100"
                            fontFamily="'Courier New', monospace"
                            fontWeight="bold"
                            textTransform="uppercase"
                            letterSpacing="wide"
                        >
                            All Stories
                        </Heading>
                    </Flex>

                    <Text color="retroGreen.100" fontSize="lg" fontFamily="'Courier New', monospace">
                        {upcomingStories.sectionDescription}
                    </Text>

                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                        {upcomingStories.stories.map((story: any) => (
                            <StoryCard key={story.id} story={story} />
                        ))}
                    </SimpleGrid>
                </VStack>
            </Container>
        </Box>
    );
};

export default StoriesComponent;
