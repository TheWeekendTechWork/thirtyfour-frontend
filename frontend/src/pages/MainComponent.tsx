import {
    Box,
    Button,
    Heading,
    Text,
    VStack,
    Container,
    Flex,
    Divider,
    Icon,
    SimpleGrid,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";
import { ProjectCard } from "../components/cards/ProjectCard";
import { StoryCard } from "../components/cards/StoryCard";
import { useData } from "../context/DataContext";

const MainComponent: React.FC = () => {
    const { homeData } = useData();
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
                py={{ base: 20, md: 32 }}
                px={8}
                textAlign="center"
                backgroundImage={`linear-gradient(to bottom, rgba(15, 44, 31, 0.9), rgba(15, 44, 31, 0.95)), url('${hero.backgroundImage}')`}
                backgroundSize="cover"
                backgroundPosition="center"
            >
                <Container maxW="container.md">
                    <VStack spacing={6}>
                        <Heading
                            as="h1"
                            size="3xl"
                            color="retroGreen.100"
                            textTransform="uppercase"
                            letterSpacing="tight"
                            fontFamily="'Courier New', monospace"
                        >
                            {hero.title}
                        </Heading>
                        <Text
                            fontSize="2xl"
                            color="retroGreen.100"
                            maxW="container.md"
                            fontFamily="'Courier New', monospace"
                        >
                            {hero.subtitle}
                        </Text>
                        <Button
                            as={Link}
                            to="/projects"
                            rightIcon={<ArrowForwardIcon />}
                            bg="retroGreen.400"
                            color="retroGreen.900"
                            _hover={{ bg: "retroGreen.500" }}
                            size="lg"
                            mt={4}
                            borderRadius="20px"
                            fontFamily="'Courier New', monospace"
                            fontWeight="bold"
                        >
                            {hero.ctaText}
                        </Button>
                    </VStack>
                </Container>
            </Box>

            <Container maxW="container.xl" py={16}>
                {/* Projects Section */}
                <VStack spacing={6} mb={20} align="stretch">
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
                            as="h2"
                            size="lg"
                            color="retroGreen.100"
                            fontFamily="'Courier New', monospace"
                            fontWeight="bold"
                            textTransform="uppercase"
                            letterSpacing="wide"
                        >
                            {upcomingProjects.sectionTitle}
                        </Heading>
                    </Flex>

                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                        {upcomingProjects.projects.map((project: any) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </SimpleGrid>
                </VStack>

                <Divider my={16} borderColor="retroGreen.600" />

                {/* Stories Section */}
                <VStack spacing={6} align="stretch">
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
                            as="h2"
                            size="lg"
                            color="retroGreen.100"
                            fontFamily="'Courier New', monospace"
                            fontWeight="bold"
                            textTransform="uppercase"
                            letterSpacing="wide"
                        >
                            {upcomingStories.sectionTitle}
                        </Heading>
                    </Flex>

                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                        {upcomingStories.stories.map((story: any) => (
                            <StoryCard key={story.id} story={story} />
                        ))}
                    </SimpleGrid>

                    <Button
                        as={Link}
                        to="/stories"
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
