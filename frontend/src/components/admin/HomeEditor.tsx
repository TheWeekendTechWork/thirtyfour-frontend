import {
    Box,
    Heading,
    VStack,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    SimpleGrid
} from "@chakra-ui/react";

interface HomeEditorProps {
    data: any;
    setData: (data: any) => void;
}

const HomeEditor = ({ data, setData }: HomeEditorProps) => {

    // Generic handler for input changes
    const handleChange = (section: "upcomingProjects" | "upcomingStories", index: number, field: string, value: string | string[]) => {
        const newData = { ...data };
        // @ts-ignore
        newData[section][section === "upcomingProjects" ? "projects" : "stories"][index][field] = value;
        setData(newData);
    };

    // Add new project
    const addProject = () => {
        const newData = { ...data };
        const newId = newData.upcomingProjects.projects.length + 1;
        newData.upcomingProjects.projects.push({
            id: newId,
            title: "New Project",
            description: "",
            tags: [],
            imageUrl: "",
            status: "Planning",
            url: ""
        });
        setData(newData);
    };

    // Add new story
    const addStory = () => {
        const newData = { ...data };
        const newId = newData.upcomingStories.stories.length + 1;
        newData.upcomingStories.stories.push({
            id: newId,
            title: "New Story",
            excerpt: "",
            genre: "",
            readTime: "",
            releaseDate: "",
            coverImage: "",
            url: ""
        });
        setData(newData);
    };



    return (
        <VStack spacing={8} align="stretch">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Heading size="md" color="retroGreen.100" fontFamily="'Press Start 2P', cursive">
                    Edit Home Data
                </Heading>
            </Box>

            {/* Editing Projects */}
            <Box bg="retroGreen.800" p={6} borderRadius="lg" border="1px solid" borderColor="retroGreen.600">
                <Heading size="sm" mb={4} color="retroGreen.200" fontFamily="'Press Start 2P', cursive">Projects</Heading>
                <Accordion allowMultiple>
                    {data.upcomingProjects.projects.map((project: any, index: number) => (
                        <AccordionItem key={project.id} border="none" mb={4}>
                            <h2>
                                <AccordionButton bg="retroGreen.700" color="retroGreen.100" _hover={{ bg: "retroGreen.600" }}>
                                    <Box flex="1" textAlign="left" fontWeight="bold">
                                        {project.title || "Untitled Project"}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} bg="retroGreen.900" border="1px solid" borderColor="retroGreen.600">
                                <VStack spacing={4}>
                                    <FormControl>
                                        <FormLabel color="retroGreen.300" fontSize="sm">Title</FormLabel>
                                        <Input
                                            value={project.title}
                                            onChange={(e) => handleChange("upcomingProjects", index, "title", e.target.value)}
                                            color="retroGreen.100"
                                            borderColor="retroGreen.500"
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel color="retroGreen.300" fontSize="sm">Description</FormLabel>
                                        <Textarea
                                            value={project.description}
                                            onChange={(e) => handleChange("upcomingProjects", index, "description", e.target.value)}
                                            color="retroGreen.100"
                                            borderColor="retroGreen.500"
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel color="retroGreen.300" fontSize="sm">Tags (comma separated)</FormLabel>
                                        <Input
                                            value={project.tags.join(", ")}
                                            onChange={(e) => handleChange("upcomingProjects", index, "tags", e.target.value.split(",").map(t => t.trim()))}
                                            color="retroGreen.100"
                                            borderColor="retroGreen.500"
                                        />
                                    </FormControl>
                                    <SimpleGrid columns={2} spacing={4} w="100%">
                                        <FormControl>
                                            <FormLabel color="retroGreen.300" fontSize="sm">Status</FormLabel>
                                            <Input
                                                value={project.status}
                                                onChange={(e) => handleChange("upcomingProjects", index, "status", e.target.value)}
                                                color="retroGreen.100"
                                                borderColor="retroGreen.500"
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel color="retroGreen.300" fontSize="sm">Image URL</FormLabel>
                                            <Input
                                                value={project.imageUrl}
                                                onChange={(e) => handleChange("upcomingProjects", index, "imageUrl", e.target.value)}
                                                color="retroGreen.100"
                                                borderColor="retroGreen.500"
                                            />
                                        </FormControl>
                                    </SimpleGrid>
                                    <FormControl>
                                        <FormLabel color="retroGreen.300" fontSize="sm">Project URL</FormLabel>
                                        <Input
                                            value={project.url || ""}
                                            onChange={(e) => handleChange("upcomingProjects", index, "url", e.target.value)}
                                            color="retroGreen.100"
                                            borderColor="retroGreen.500"
                                            placeholder="https://..."
                                        />
                                    </FormControl>
                                </VStack>
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
                <Button size="sm" mt={4} onClick={addProject} colorScheme="teal" variant="outline">
                    + Add Project
                </Button>
            </Box>

            {/* Editing Stories */}
            <Box bg="retroGreen.800" p={6} borderRadius="lg" border="1px solid" borderColor="retroGreen.600">
                <Heading size="sm" mb={4} color="retroGreen.200" fontFamily="'Press Start 2P', cursive">Stories</Heading>
                <Accordion allowMultiple>
                    {data.upcomingStories.stories.map((story: any, index: number) => (
                        <AccordionItem key={story.id} border="none" mb={4}>
                            <h2>
                                <AccordionButton bg="retroGreen.700" color="retroGreen.100" _hover={{ bg: "retroGreen.600" }}>
                                    <Box flex="1" textAlign="left" fontWeight="bold">
                                        {story.title || "Untitled Story"}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} bg="retroGreen.900" border="1px solid" borderColor="retroGreen.600">
                                <VStack spacing={4}>
                                    <FormControl>
                                        <FormLabel color="retroGreen.300" fontSize="sm">Title</FormLabel>
                                        <Input
                                            value={story.title}
                                            onChange={(e) => handleChange("upcomingStories", index, "title", e.target.value)}
                                            color="retroGreen.100"
                                            borderColor="retroGreen.500"
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel color="retroGreen.300" fontSize="sm">Excerpt</FormLabel>
                                        <Textarea
                                            value={story.excerpt}
                                            onChange={(e) => handleChange("upcomingStories", index, "excerpt", e.target.value)}
                                            color="retroGreen.100"
                                            borderColor="retroGreen.500"
                                        />
                                    </FormControl>
                                    <SimpleGrid columns={2} spacing={4} w="100%">
                                        <FormControl>
                                            <FormLabel color="retroGreen.300" fontSize="sm">Genre</FormLabel>
                                            <Input
                                                value={story.genre}
                                                onChange={(e) => handleChange("upcomingStories", index, "genre", e.target.value)}
                                                color="retroGreen.100"
                                                borderColor="retroGreen.500"
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel color="retroGreen.300" fontSize="sm">Read Time</FormLabel>
                                            <Input
                                                value={story.readTime}
                                                onChange={(e) => handleChange("upcomingStories", index, "readTime", e.target.value)}
                                                color="retroGreen.100"
                                                borderColor="retroGreen.500"
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel color="retroGreen.300" fontSize="sm">Release Date</FormLabel>
                                            <Input
                                                value={story.releaseDate}
                                                onChange={(e) => handleChange("upcomingStories", index, "releaseDate", e.target.value)}
                                                color="retroGreen.100"
                                                borderColor="retroGreen.500"
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel color="retroGreen.300" fontSize="sm">Cover Image URL</FormLabel>
                                            <Input
                                                value={story.coverImage}
                                                onChange={(e) => handleChange("upcomingStories", index, "coverImage", e.target.value)}
                                                color="retroGreen.100"
                                                borderColor="retroGreen.500"
                                            />
                                        </FormControl>
                                    </SimpleGrid>
                                    <FormControl>
                                        <FormLabel color="retroGreen.300" fontSize="sm">Story URL</FormLabel>
                                        <Input
                                            value={story.url || ""}
                                            onChange={(e) => handleChange("upcomingStories", index, "url", e.target.value)}
                                            color="retroGreen.100"
                                            borderColor="retroGreen.500"
                                            placeholder="https://..."
                                        />
                                    </FormControl>
                                </VStack>
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
                <Button size="sm" mt={4} onClick={addStory} colorScheme="teal" variant="outline">
                    + Add Story
                </Button>
            </Box>
        </VStack>
    );
};

export default HomeEditor;
