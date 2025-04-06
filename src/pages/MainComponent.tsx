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
import {
    upcomingBlogs,
    BlogPreview,
} from "../components/cards/BlogPreviewCard";
import { upcomingProjects, ProjectCard } from "../components/cards/ProjectCard";
import { upcomingStories, StoryCard } from "../components/cards/StoryCard";

const MainComponent: React.FC = () => {
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
                backgroundImage="linear-gradient(to bottom, rgba(0, 48, 32, 0.9), rgba(0, 30, 20, 0.95)), url('https://images.unsplash.com/photo-1579713420614-1274eae39ebe?q=80&w=2070')"
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
                            Welcome to 34
                        </Heading>
                        <Text fontSize="2xl" color="#FFF" maxW="container.md">
                            Exploring the intersection of technology,
                            creativity, and innovation through projects and
                            insights.
                        </Text>
                        <Button
                            rightIcon={<ArrowForwardIcon />}
                            colorScheme="teal"
                            size="lg"
                            mt={4}
                        >
                            Explore Projects
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
                        Upcoming Projects
                    </Heading>
                    <Text
                        fontSize="xl"
                        color="#FFF"
                        textAlign="center"
                        maxW="container.md"
                        mx="auto"
                    >
                        A glimpse into what I'm currently working on and
                        planning to launch soon.
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
                        {upcomingProjects.map((project) => (
                            <GridItem key={project.id}>
                                <ProjectCard project={project} />
                            </GridItem>
                        ))}
                    </Grid>
                </VStack>

                <Divider my={16} borderColor="retroGreen.600" />

                {/* Blog Section */}
                <VStack spacing={12} mb={20}>
                    <Heading
                        as="h2"
                        size="2xl"
                        color="retroGreen.100"
                        textAlign="center"
                    >
                        Upcoming Blog Posts
                    </Heading>
                    <Text
                        fontSize="xl"
                        color="#FFF"
                        textAlign="center"
                        maxW="container.md"
                        mx="auto"
                    >
                        Stay tuned for insightful articles on technology,
                        development, and more.
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
                        {upcomingBlogs.map((blog) => (
                            <GridItem key={blog.id}>
                                <BlogPreview blog={blog} />
                            </GridItem>
                        ))}
                    </Grid>

                    <Button
                        variant="outline"
                        colorScheme="teal"
                        size="lg"
                        mt={4}
                    >
                        View All Posts
                    </Button>
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
                        Upcoming Stories
                    </Heading>
                    <Text
                        fontSize="xl"
                        color="#FFF"
                        textAlign="center"
                        maxW="container.md"
                        mx="auto"
                    >
                        Dive into captivating narratives that blend technology
                        with creative storytelling.
                    </Text>

                    <VStack spacing={8} width="100%">
                        {upcomingStories.map((story) => (
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
                        Explore All Stories
                    </Button>
                </VStack>
            </Container>

            {/* Newsletter Section */}
            <Box bg="retroGreen.700" py={16} mt={16}>
                <Container maxW="container.md" textAlign="center">
                    <VStack spacing={6}>
                        <Heading as="h2" size="xl" color="retroGreen.100">
                            Stay Updated
                        </Heading>
                        <Text color="#FFF" fontSize="lg">
                            Subscribe to get notified when new projects, blogs,
                            and stories are published.
                        </Text>
                        <Button colorScheme="teal" size="lg" mt={4}>
                            Subscribe Now
                        </Button>
                    </VStack>
                </Container>
            </Box>
        </Flex>
    );
};

export default MainComponent;
