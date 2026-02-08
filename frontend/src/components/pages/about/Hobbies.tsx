import {
    Box,
    Heading,
    SimpleGrid,
    Flex,
    Text,
    Icon,
    Card,
    CardHeader,
    CardBody
} from "@chakra-ui/react";
import { FaMusic, FaBookOpen, FaRunning, FaCamera, FaStar } from 'react-icons/fa';
import MotionCard from "./MotionCard";

interface HobbiesProps {
    hobbies: {
        id: number;
        name: string;
        icon?: string; // Kept for type compatibility though we use mapping
    }[];
}

const Hobbies: React.FC<HobbiesProps> = ({ hobbies }) => {
    const hobbyIcons: { [key: string]: any } = {
        "Music Production & DJing": FaMusic,
        "Reading Tech Blogs": FaBookOpen,
        "Fitness & Running": FaRunning,
        "Traveling & Photography": FaCamera,
    };

    return (
        <MotionCard
            as={Card}
            bg="retroGreen.700"
            borderColor="retroGreen.600"
            borderWidth="2px"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            // @ts-ignore
            transition={{ duration: 0.5, delay: 0.6 }}
        >
            <CardHeader bg="retroGreen.600">
                <Heading size="md" color="retroGreen.100" fontFamily="'Press Start 2P', cursive">
                    Interests & Hobbies
                </Heading>
            </CardHeader>
            <CardBody p={{ base: 4, md: 6 }}>
                <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={6}>
                    {hobbies.map((hobby) => (
                        <Box
                            key={hobby.id}
                            p={6}
                            bg="retroGreen.800"
                            border="2px solid"
                            borderColor="retroGreen.500"
                            display="flex"
                            alignItems="center"
                            gap={4}
                            role="group"
                            _hover={{
                                borderColor: "retroGreen.300",
                                bg: "retroGreen.900",
                                transform: "translate(-2px, -2px)",
                                boxShadow: "4px 4px 0 var(--chakra-colors-retroGreen-600)"
                            }}
                            transition="all 0.2s ease"
                            cursor="default"
                        >
                            <Flex
                                w="48px"
                                h="48px"
                                align="center"
                                justify="center"
                                bg="retroGreen.900"
                                border="2px solid"
                                borderColor="retroGreen.600"
                                fontSize="xl"
                                color="retroGreen.300"
                                _groupHover={{ color: "retroGreen.100" }}
                            >
                                <Icon as={hobbyIcons[hobby.name] || FaStar} />
                            </Flex>
                            <Text
                                color="retroGreen.100"
                                fontSize="xs"
                                fontFamily="'Press Start 2P', cursive"
                                lineHeight="1.6"
                            >
                                {hobby.name}
                            </Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </CardBody>
        </MotionCard>
    );
};

export default Hobbies;
