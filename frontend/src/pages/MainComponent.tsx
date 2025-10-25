import React from "react";
import {
    Box,
    Button,
    Heading,
    Text,
    VStack,
    Container,
    Flex,
    Grid,
    GridItem,
    Divider,
    Icon,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { FaBookOpen } from "react-icons/fa";
import { ProjectCard } from "../components/cards/ProjectCard";
import { StoryCard } from "../components/cards/StoryCard";
import homeData from "../assets/home-data.json";

const MainComponent: React.FC = () => {
    const { hero, upcomingProjects, upcomingStories } = homeData;
    return (
        <Flex
            direction="column"
            minHeight="calc(100vh - 160px)"
            bg="retroGreen.800"
        >
            {/* Hero Section */}
            <Box
                bg="retroGreen.900"
                py={20}
                backgroundImage={`linear-gradient(to bottom, rgba(0, 48, 32, 0.9), rgba(0, 30, 20, 0.95)), url('${hero.backgroundImage}')`}
                backgroundSize="cover"
                backgroundPosition="center"
            >
                <Container maxW="container.xl">
                    <VStack spacing={6} align="center" textAlign="center">
                        <Heading
                            as="h1"
                            size="4xl"
                            color="retroGreen.100"
                            fontWeight="bold"
                        >
                            {hero.title}
                        </Heading>
                        <Text fontSize="2xl" color="#FFF" maxW="container.md">
                            {hero.subtitle}
                        </Text>
                        <Button
                            rightIcon={<ArrowForwardIcon />}
                            colorScheme="teal"
                            size="lg"
                            mt={4}
                        >
                            {hero.ctaText}
                        </Button>
                    </VStack>
                </Container>
            </Box>

            <Container maxW="container.xl" py={16}>
                {/* Projects Section */}
                <VStack spacing={12} mb={20}>
                    <Heading
                        as="h2"
                        size="2xl"
                        color="retroGreen.100"
                        textAlign="center"
                    >
                        {upcomingProjects.sectionTitle}
                    </Heading>
                    <Text
                        fontSize="xl"
                        color="#FFF"
                        textAlign="center"
                        maxW="container.md"
                        mx="auto"
                    >
                        {upcomingProjects.sectionDescription}
                    </Text>

                    <Grid
                        templateColumns={[
                            "1fr",
                            "1fr",
                            "repeat(2, 1fr)",
                            "repeat(3, 1fr)",
                        ]}
                        gap={8}
                        width="100%"
                    >
                        {upcomingProjects.projects.map((project) => (
                            <GridItem key={project.id}>
                                <ProjectCard project={project} />
                            </GridItem>
                        ))}
                    </Grid>
                </VStack>

                <Divider my={16} borderColor="retroGreen.600" />

                {/* Stories Section */}
                <VStack spacing={12}>
                    <Heading
                        as="h2"
                        size="2xl"
                        color="retroGreen.100"
                        textAlign="center"
                    >
                        {upcomingStories.sectionTitle}
                    </Heading>
                    <Text
                        fontSize="xl"
                        color="#FFF"
                        textAlign="center"
                        maxW="container.md"
                        mx="auto"
                    >
                        {upcomingStories.sectionDescription}
                    </Text>

                    <VStack spacing={8} width="100%">
                        {upcomingStories.stories.map((story) => (
                            <StoryCard key={story.id} story={story} />
                        ))}
                    </VStack>

                    <Button
                        variant="outline"
                        colorScheme="teal"
                        size="lg"
                        mt={4}
                        rightIcon={<Icon as={FaBookOpen} />}
                    >
                        {upcomingStories.ctaText}
                    </Button>
                </VStack>
            </Container>
        </Flex>
    );
};

export default MainComponent;
