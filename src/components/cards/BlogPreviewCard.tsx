import { Box, Badge, Heading, HStack, Text } from "@chakra-ui/react";

export // Sample data for blog posts
const upcomingBlogs = [
    {
        id: 1,
        title: "The Future of Web Development in 2024",
        excerpt:
            "Exploring emerging technologies and trends that will shape web development in the coming year.",
        author: "Jairam B",
        date: "Coming Dec 2023",
        category: "Technology",
    },
    {
        id: 2,
        title: "Building Scalable Applications with FastAPI",
        excerpt:
            "A comprehensive guide to creating high-performance APIs with Python's FastAPI framework.",
        author: "Jairam B",
        date: "Coming Jan 2024",
        category: "Programming",
    },
    {
        id: 3,
        title: "Machine Learning for Everyday Developers",
        excerpt:
            "Breaking down complex ML concepts into practical applications for regular developers.",
        author: "Jairam B",
        date: "Coming Feb 2024",
        category: "AI & ML",
    },
];

export const BlogPreview: React.FC<{ blog: (typeof upcomingBlogs)[0] }> = ({
    blog,
}) => {
    return (
        <Box
            p={5}
            borderRadius="lg"
            bg="retroGreen.700"
            transition="transform 0.3s"
            _hover={{ transform: "translateY(-5px)" }}
            boxShadow="md"
        >
            <Badge mb={2} colorScheme="teal">
                {blog.category}
            </Badge>
            <Heading as="h3" size="md" mb={2} color="retroGreen.100">
                {blog.title}
            </Heading>
            <Text color="#FFF" mb={4}>
                {blog.excerpt}
            </Text>
            <HStack justify="space-between" color="retroGreen.200">
                <Text fontSize="sm">{blog.author}</Text>
                <Text fontSize="sm">{blog.date}</Text>
            </HStack>
        </Box>
    );
};
