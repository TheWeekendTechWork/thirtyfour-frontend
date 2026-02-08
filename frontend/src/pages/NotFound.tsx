import React from "react";
import { Box, Container, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { WarningTwoIcon } from "@chakra-ui/icons";

const NotFound: React.FC = () => {
    return (
        <Box
            bg="retroGreen.900"
            minHeight="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            px={4}
        >
            <Container maxW="container.md">
                <Box
                    bg="retroGreen.800"
                    border="4px solid"
                    borderColor="retroGreen.600"
                    p={8}
                    borderRadius="none"
                    boxShadow="8px 8px 0 var(--chakra-colors-retroGreen-900)"
                >
                    <VStack spacing={6}>
                        <WarningTwoIcon w={20} h={20} color="retroGreen.300" />

                        <Heading
                            as="h1"
                            size="2xl"
                            color="retroGreen.100"
                            fontFamily="'Press Start 2P', cursive"
                            lineHeight="1.5"
                        >
                            404 ERROR
                        </Heading>

                        <Text
                            fontSize="xl"
                            color="retroGreen.300"
                            fontFamily="'Courier New', monospace"
                            fontWeight="bold"
                        >
                            FILE NOT FOUND
                        </Text>

                        <Text
                            color="retroGreen.400"
                            fontFamily="'Courier New', monospace"
                        >
                            The system cannot find the file specified.
                            <br />
                            Please check the URL or contact the administrator.
                        </Text>

                        <Button
                            as={Link}
                            to="/"
                            bg="retroGreen.400"
                            color="retroGreen.900"
                            _hover={{ bg: "retroGreen.500" }}
                            size="lg"
                            fontFamily="'Courier New', monospace"
                            fontWeight="bold"
                            borderRadius="none"
                            border="2px solid"
                            borderColor="retroGreen.900"
                            boxShadow="4px 4px 0 var(--chakra-colors-retroGreen-900)"
                            _active={{
                                transform: "translate(2px, 2px)",
                                boxShadow: "2px 2px 0 var(--chakra-colors-retroGreen-900)",
                            }}
                        >
                            RETURN TO SYSTEM
                        </Button>
                    </VStack>
                </Box>
            </Container>
        </Box>
    );
};

export default NotFound;
