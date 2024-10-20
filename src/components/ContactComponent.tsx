import { Box, VStack, Heading, Text, Icon } from "@chakra-ui/react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const ContactComponent = () => {
    const locationLink = "https://maps.app.goo.gl/of2ZWLGHPdq8bXRW8";

    return (
        <Box
            mx="auto"
            p={8}
            bg="retroGreen.800"
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="calc(100vh - 100px)"
        >
            <VStack spacing={6} align="center">
                <Heading
                    as="h2"
                    size="xl"
                    color="retroGreen.100"
                    textAlign="center"
                >
                    Contact Me
                </Heading>
                <VStack spacing={3} align="center">
                    <Box display="flex" alignItems="center">
                        <Icon
                            as={MdEmail}
                            color="retroGreen.200"
                            boxSize={6}
                            mr={2}
                        />
                        <Text
                            color="retroGreen.100"
                            as="a"
                            href="mailto:b.jairam0512@gmail.com"
                            _hover={{ textDecoration: "underline" }}
                        >
                            b.jairam0512@gmail.com
                        </Text>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Icon
                            as={MdPhone}
                            color="retroGreen.200"
                            boxSize={6}
                            mr={2}
                        />
                        <Text color="retroGreen.100">+91 9791347757</Text>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Icon
                            as={MdLocationOn}
                            color="retroGreen.200"
                            boxSize={6}
                            mr={2}
                        />
                        <Text
                            color="retroGreen.100"
                            as="a"
                            href={locationLink}
                            target="_blank"
                            _hover={{ textDecoration: "underline" }}
                        >
                            Bengaluru, Karnataka, India
                        </Text>
                    </Box>
                </VStack>
            </VStack>
        </Box>
    );
};

export default ContactComponent;
