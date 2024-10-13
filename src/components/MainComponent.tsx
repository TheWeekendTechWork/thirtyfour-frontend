import React from "react";
import {
    Box,
    Heading,
    Text,
    UnorderedList,
    ListItem,
    VStack,
    Container,
    Flex,
} from "@chakra-ui/react";

const MainComponent: React.FC = () => {
    return (
        <Flex
            direction="column"
            minHeight="calc(100vh - 160px)"
            bg="retroGreen.800"
        >
            <Container
                maxW={["100%", "100%", "container.xl"]}
                flex="1"
                p={[4, 6, 8]}
                mx="auto"
            >
                <VStack
                    spacing={6}
                    align="stretch"
                    justify="center"
                    height="100%"
                >
                    <Heading
                        as="h1"
                        size="2xl"
                        textAlign="center"
                        color="retroGreen.100"
                    >
                        Welcome to 34
                    </Heading>

                    <Text fontSize="xl" textAlign="center" color="#FFF">
                        Explore our upcoming content and exciting features!
                    </Text>

                    <Box>
                        <Heading
                            as="h2"
                            size="lg"
                            mb={2}
                            color="retroGreen.100"
                        >
                            Upcoming Content:
                        </Heading>
                        <UnorderedList spacing={2} color="#FFF">
                            <ListItem>Engaging blog posts</ListItem>
                            <ListItem>Captivating stories</ListItem>
                            <ListItem>Innovative projects</ListItem>
                        </UnorderedList>
                    </Box>
                </VStack>
            </Container>
        </Flex>
    );
};

export default MainComponent;
