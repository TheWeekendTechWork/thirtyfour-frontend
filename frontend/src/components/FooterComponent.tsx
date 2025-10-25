import { Box, Flex, Text } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
const FooterComponent = () => {
    const currentDate = new Date().toLocaleDateString();

    return (
        <Box bg="retroGreen.900" py={4}>
            <Flex
                alignItems="center"
                justifyContent="center"
                direction="column"
            >
                <Text color="retroGreen.100" fontSize="sm">
                    Made in India with{" "}
                    <FaHeart style={{ display: "inline", color: "#FF6B6B" }} />
                </Text>
                <Text color="retroGreen.100" fontSize="sm">
                    &copy; JRM
                </Text>
                <Text color="retroGreen.100" fontSize="sm">
                    Date: {currentDate}
                </Text>
            </Flex>
        </Box>
    );
};

export default FooterComponent;
