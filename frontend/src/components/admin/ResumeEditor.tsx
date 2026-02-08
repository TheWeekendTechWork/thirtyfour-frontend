import {
    Box,
    Heading,
    VStack,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    SimpleGrid,
    Text
} from "@chakra-ui/react";

interface ResumeEditorProps {
    data: any;
    setData: (data: any) => void;
}

const ResumeEditor = ({ data, setData }: ResumeEditorProps) => {

    // Generic handler for Work Experience
    const updateWork = (index: number, field: string, value: any) => {
        const newData = { ...data };
        // @ts-ignore
        newData.workExperience[index][field] = value;
        setData(newData);
    };

    // Generic handler for Hobbies
    const updateHobby = (index: number, field: string, value: string) => {
        const newData = { ...data };
        // @ts-ignore
        newData.hobbies[index][field] = value;
        setData(newData);
    };

    // Generic handler for Skills
    const updateSkill = (category: string, value: string) => {
        const newData = { ...data };
        // @ts-ignore
        if (newData.skills[category]) {
            // @ts-ignore
            newData.skills[category] = value.split(",").map(s => s.trim());
            setData(newData);
        }
    };

    return (
        <VStack spacing={8} align="stretch">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Heading size="md" color="retroGreen.100" fontFamily="'Press Start 2P', cursive">
                    Edit Resume Data
                </Heading>
            </Box>

            {/* Read-Only Info Section to confirm it's loaded but disabled */}
            <Box bg="retroGreen.900" p={4} borderRadius="lg" border="1px dashed" borderColor="retroGreen.700">
                <Heading size="xs" mb={2} color="retroGreen.400" fontFamily="'Press Start 2P', cursive">Read-Only Info</Heading>
                <SimpleGrid columns={2} spacing={4}>
                    <Box>
                        <Text fontSize="xs" color="retroGreen.500">Name</Text>
                        <Text color="retroGreen.300">{data.personalInfo.name}</Text>
                    </Box>
                    <Box>
                        <Text fontSize="xs" color="retroGreen.500">Title</Text>
                        <Text color="retroGreen.300">{data.personalInfo.title}</Text>
                    </Box>
                </SimpleGrid>
                <Text fontSize="xs" mt={2} color="retroGreen.500">Summary</Text>
                <Text color="retroGreen.300" fontSize="sm" noOfLines={2}>{data.summary}</Text>
            </Box>

            {/* Editable: Work Experience */}
            <Box bg="retroGreen.800" p={6} borderRadius="lg" border="1px solid" borderColor="retroGreen.600">
                <Heading size="sm" mb={4} color="retroGreen.200" fontFamily="'Press Start 2P', cursive">Work Experience (Editable)</Heading>
                <Accordion allowMultiple>
                    {data.workExperience.map((job: any, index: number) => (
                        <AccordionItem key={job.id} border="none" mb={4}>
                            <h2>
                                <AccordionButton bg="retroGreen.700" color="retroGreen.100" _hover={{ bg: "retroGreen.600" }}>
                                    <Box flex="1" textAlign="left" fontWeight="bold">
                                        {job.company}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} bg="retroGreen.900" border="1px solid" borderColor="retroGreen.600">
                                <VStack spacing={4}>
                                    <FormControl>
                                        <FormLabel color="retroGreen.300" fontSize="sm">Company</FormLabel>
                                        <Input
                                            value={job.company}
                                            onChange={(e) => updateWork(index, "company", e.target.value)}
                                            color="retroGreen.100"
                                            borderColor="retroGreen.500"
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel color="retroGreen.300" fontSize="sm">Title</FormLabel>
                                        <Input
                                            value={job.title}
                                            onChange={(e) => updateWork(index, "title", e.target.value)}
                                            color="retroGreen.100"
                                            borderColor="retroGreen.500"
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel color="retroGreen.300" fontSize="sm">Duration</FormLabel>
                                        <Input
                                            value={job.duration}
                                            onChange={(e) => updateWork(index, "duration", e.target.value)}
                                            color="retroGreen.100"
                                            borderColor="retroGreen.500"
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel color="retroGreen.300" fontSize="sm">Description</FormLabel>
                                        <Input
                                            value={job.description}
                                            onChange={(e) => updateWork(index, "description", e.target.value)}
                                            color="retroGreen.100"
                                            borderColor="retroGreen.500"
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel color="retroGreen.300" fontSize="sm">Achievements (One per line)</FormLabel>
                                        <Textarea
                                            value={job.achievements.join("\n")}
                                            onChange={(e) => updateWork(index, "achievements", e.target.value.split("\n"))}
                                            color="retroGreen.100"
                                            borderColor="retroGreen.500"
                                            height="150px"
                                        />
                                    </FormControl>
                                </VStack>
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Box>

            {/* Editable: Technical Skills */}
            <Box bg="retroGreen.800" p={6} borderRadius="lg" border="1px solid" borderColor="retroGreen.600">
                <Heading size="sm" mb={4} color="retroGreen.200" fontFamily="'Press Start 2P', cursive">Technical Skills (Editable)</Heading>
                <Text fontSize="xs" color="retroGreen.500" mb={4}>Edit comma separated values.</Text>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    {Object.entries(data.skills).map(([category, skills]) => (
                        <FormControl key={category}>
                            <FormLabel textTransform="capitalize" color="retroGreen.300" fontSize="xs">{category}</FormLabel>
                            <Textarea
                                value={(skills as string[]).join(", ")}
                                onChange={(e) => updateSkill(category, e.target.value)}
                                color="retroGreen.100"
                                borderColor="retroGreen.500"
                                fontSize="sm"
                                rows={3}
                            />
                        </FormControl>
                    ))}
                </SimpleGrid>
            </Box>

            {/* Editable: Hobbies */}
            <Box bg="retroGreen.800" p={6} borderRadius="lg" border="1px solid" borderColor="retroGreen.600">
                <Heading size="sm" mb={4} color="retroGreen.200" fontFamily="'Press Start 2P', cursive">Hobbies (Editable)</Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    {data.hobbies.map((hobby: any, index: number) => (
                        <Box key={hobby.id} p={4} border="1px solid" borderColor="retroGreen.600" bg="retroGreen.900">
                            <FormControl mb={2}>
                                <FormLabel color="retroGreen.400" fontSize="xs">Name</FormLabel>
                                <Input
                                    value={hobby.name}
                                    onChange={(e) => updateHobby(index, "name", e.target.value)}
                                    color="retroGreen.100"
                                    borderColor="retroGreen.500"
                                    size="sm"
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel color="retroGreen.400" fontSize="xs">Icon (Emoji/String)</FormLabel>
                                <Input
                                    value={hobby.icon}
                                    onChange={(e) => updateHobby(index, "icon", e.target.value)}
                                    color="retroGreen.100"
                                    borderColor="retroGreen.500"
                                    size="sm"
                                />
                            </FormControl>
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>
        </VStack>
    );
};

export default ResumeEditor;
