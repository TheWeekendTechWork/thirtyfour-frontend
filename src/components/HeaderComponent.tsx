import * as React from "react";
import { Link } from "react-router-dom";
import { Box, HStack, Heading, Link as ChakraLink } from "@chakra-ui/react";

const HeaderComponent: React.FC = () => {
    return (
        <Box bg="retroGreen.900" py={4} px={4}>
            <HStack spacing={8} alignItems="center" justify="space-between">
                <Heading as="h1" size="lg" color="retroGreen.100">
                    <ChakraLink
                        as={Link}
                        to="/"
                        _hover={{ textDecoration: "none" }}
                    >
                        ThirtyFour
                    </ChakraLink>
                </Heading>
                <HStack as="nav" spacing={4}>
                    <ChakraLink as={Link} to="/about" color="retroGreen.200">
                        About
                    </ChakraLink>
                    <ChakraLink as={Link} to="/contact" color="retroGreen.200">
                        Contact
                    </ChakraLink>
                </HStack>
            </HStack>
        </Box>
    );
};

export default HeaderComponent;
