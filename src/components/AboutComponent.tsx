import React from "react";
import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    HStack,
    Divider,
    Image,
    Link,
    ListItem,
    UnorderedList,
    SimpleGrid,
    Stack,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const AboutComponent: React.FC = () => {
    const imageLink =
        "https://media.licdn.com/dms/image/v2/D4D03AQH4DMyiF2cgkw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1684482534737?e=2147483647&v=beta&t=rMUvi1rK5KxDHs16OeNYNzB0jqYl_ikOwspHnj8pcLo";
    const githubProfileLink = "https://github.com/Jairamjavv";
    const linkedinProfileLink =
        "https://www.linkedin.com/in/jairam-b-b72432109/";

    const techincalSkills = [
        "Python",
        "JavaScript",
        "Java",
        "FastAPI",
        "Flask",
        "Django",
        "NodeJS",
        "React",
        "Redux",
        "HTML",
        "CSS",
        "Material UI",
        "Chakra UI",
        "SQL",
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "Git",
        "GitHub",
        "Linux",
        "AWS",
        "GCP",
        "RESTful API's",
        "Scrum",
        "Jira",
        "Postman",
    ];

    return (
        <Box mx="auto" p={8} bg="retroGreen.800">
            <Container
                maxW={["100%", "100%", "container.xl"]}
                p={[4, 6, 8]}
                mx="auto"
            >
                <VStack align="stretch" spacing={6}>
                    <HStack spacing={8} align="flex-start">
                        <Image
                            borderRadius="full"
                            boxSize="150px"
                            src={imageLink}
                            alt="Jairam B"
                        />
                        <VStack align="stretch" spacing={2}>
                            <Heading as="h1" size="2xl" color="retroGreen.100">
                                Jairam B
                            </Heading>
                            <Text fontSize="xl" color="#FFF">
                                Software Developer | Machine Learning Enthusiast
                            </Text>
                            <HStack spacing={4}>
                                <Link href={linkedinProfileLink} isExternal>
                                    <FaLinkedin color="#FFF" size={24} />
                                </Link>
                                <Link href={githubProfileLink} isExternal>
                                    <FaGithub color="#FFF" size={24} />
                                </Link>
                            </HStack>
                        </VStack>
                    </HStack>

                    <Divider borderColor="retroGreen.700" />

                    <VStack align="stretch" spacing={4}>
                        <Heading as="h2" size="lg" color="retroGreen.100">
                            Summary
                        </Heading>
                        <Text color="#FFF">
                            Experienced Software Developer with experience in
                            backend development using FastAPI, Java Spring Boot,
                            and Hibernate and frontend development using HTML,
                            CSS, JavaScript, React, and Redux. Proficient in
                            handling large datasets, optimizing database
                            queries, writing test cases and working in Agile
                            Development. Proficient in programming languages
                            like Python, Java and JavaScript. Proven ability to
                            deliver high-quality code, with experience in tools
                            like Jira, Git, Perforce, and Jenkins and also
                            ability to learn new tools. Holds an M.Tech in
                            Computer Science (AI & ML) and a B.Tech in Software
                            Engineering
                        </Text>
                    </VStack>

                    <VStack align="stretch" spacing={4}>
                        <Heading as="h2" size="lg" color="retroGreen.100">
                            Experience
                        </Heading>
                        <VStack align="stretch" spacing={2}>
                            <Heading as="h3" size="md" color="retroGreen.100">
                                Teksystems (Allegis) - Contract for Mercedes
                                Benz R&D India
                            </Heading>
                            <Stack
                                direction="row"
                                align={"center"}
                                justify={"space-between"}
                            >
                                <Text color="#FFF">Software Developer</Text>
                                <Text color="#FFF">Aug, 2023 - Present</Text>
                            </Stack>
                            <Text color="#FFF">
                                <UnorderedList>
                                    <ListItem>
                                        Developed and deployed backend APIs
                                        using FastAPI, handling session
                                        management and server-side pagination
                                        for large datasets with optimized
                                        queries after troubleshooting the
                                        existing performance.
                                    </ListItem>
                                    <ListItem>
                                        Created database tables and
                                        Object-Relational Mapping models,
                                        focusing on efficient database
                                        interactions.
                                    </ListItem>
                                    <ListItem>
                                        Researched and Refactored existing code
                                        to improve performance and
                                        maintainability; wrote comprehensive
                                        unit test cases to ensure high code
                                        quality.
                                    </ListItem>
                                    <ListItem>
                                        Transitioned to frontend development
                                        using React, React Router, and Redux,
                                        creating dynamic, customizable data
                                        tables to display large volumes of data
                                        from APIs.
                                    </ListItem>
                                </UnorderedList>
                            </Text>

                            <Heading as="h3" size="md" color="retroGreen.100">
                                Intel
                            </Heading>
                            <Stack
                                direction="row"
                                align={"center"}
                                justify={"space-between"}
                            >
                                <Text color="#FFF">
                                    Graduate Technical Intern
                                </Text>
                                <Text color="#FFF">Sep, 2022 - May, 2023</Text>
                            </Stack>
                            <Text color="#FFF">
                                <UnorderedList>
                                    <ListItem>
                                        Wrote TCL scripts for the Ethernet
                                        module in FPGA and migrated third-party
                                        encryption standards to Intel's
                                        proprietary encryption standards.
                                    </ListItem>
                                    <ListItem>
                                        Automated the log analysis process by
                                        developing a Python script to scan and
                                        scrape data from hundreds of pre-silicon
                                        testing logs, generating reports in CSV
                                        format.
                                    </ListItem>
                                    <ListItem>
                                        Worked with TCL, Verilog HDL, Python,
                                        Pandas, Perforce Version Control, and
                                        Intel FPGA Suite.
                                    </ListItem>
                                </UnorderedList>
                            </Text>

                            <Heading as="h3" size="md" color="retroGreen.100">
                                Accenture
                            </Heading>
                            <Stack
                                direction="row"
                                align={"center"}
                                justify={"space-between"}
                            >
                                <Text color="#FFF">
                                    Associate Software Engineer
                                </Text>
                                <Text color="#FFF">Aug, 2019 - Jun, 2021</Text>
                            </Stack>
                            <Text color="#FFF">
                                <UnorderedList>
                                    <ListItem>
                                        Designed and developed backend services
                                        and APIs using Java Spring Boot and
                                        Hibernate for order and trade management
                                        systems, including handling SWIFT
                                        orders.
                                    </ListItem>
                                    <ListItem>
                                        Created and integrated Object-Relational
                                        Mapping objects with the frontend. Also
                                        created technical documents.
                                    </ListItem>
                                    <ListItem>
                                        Collaborated on core application
                                        functionalities, delivered bug fixes,
                                        and tested code to ensure stability and
                                        scalability.
                                    </ListItem>
                                    <ListItem>
                                        Worked with Jira, Jenkins, Perforce,
                                        Git, JSP, HTML, and CSS.
                                    </ListItem>
                                </UnorderedList>
                            </Text>
                        </VStack>
                    </VStack>

                    <VStack align="stretch" spacing={4}>
                        <Heading as="h2" size="lg" color="retroGreen.100">
                            Education
                        </Heading>
                        <VStack align="stretch" spacing={2}>
                            <Stack
                                direction="row"
                                align={"center"}
                                justify={"space-between"}
                            >
                                <Heading
                                    as="h3"
                                    size="md"
                                    color="retroGreen.100"
                                >
                                    Vellore Institute of Technology, Vellore
                                </Heading>
                                <Text color="#FFF">July, 2021 - May, 2023</Text>
                            </Stack>
                            <Stack
                                direction="row"
                                align={"center"}
                                justify={"space-between"}
                            >
                                <Text color="#FFF">
                                    Computer Science and Engineering (AI & ML
                                    Specialization)
                                </Text>
                                <Text color="#FFF">M.Tech</Text>
                            </Stack>
                            <Stack
                                direction="row"
                                align={"center"}
                                justify={"space-between"}
                            >
                                <Text color="#FFF">8.8 CGPA</Text>
                            </Stack>

                            <Stack
                                direction="row"
                                align={"center"}
                                justify={"space-between"}
                            >
                                <Heading
                                    as="h3"
                                    size="md"
                                    color="retroGreen.100"
                                >
                                    SRM Institute of Science and Technology,
                                    Chennai
                                </Heading>
                                <Text color="#FFF">
                                    July, 2015 - April, 2019
                                </Text>
                            </Stack>
                            <Stack
                                direction="row"
                                align={"center"}
                                justify={"space-between"}
                            >
                                <Text color="#FFF">Software Engineering</Text>
                                <Text color="#FFF">B.Tech</Text>
                            </Stack>
                            <Stack
                                direction="row"
                                align={"center"}
                                justify={"space-between"}
                            >
                                <Text color="#FFF">7.6 CGPA</Text>
                            </Stack>
                        </VStack>
                    </VStack>

                    <VStack align="stretch" spacing={4}>
                        <Heading as="h2" size="lg" color="retroGreen.100">
                            Skills
                        </Heading>
                        <SimpleGrid columns={[2, 3, 4]} spacing={4}>
                            {techincalSkills.map((skill) => (
                                <Box
                                    key={skill}
                                    bg="retroGreen.700"
                                    px={3}
                                    py={1}
                                    borderRadius="md"
                                >
                                    <Text color="#FFF">{skill}</Text>
                                </Box>
                            ))}
                        </SimpleGrid>
                    </VStack>

                    {/* <VStack align="stretch" spacing={4}>
                        <Heading as="h2" size="lg" color="retroGreen.100">
                            Projects
                        </Heading>
                        <VStack align="stretch" spacing={2}>
                            <Heading as="h3" size="md" color="retroGreen.100">
                                E-commerce Platform
                            </Heading>
                            <Text color="#FFF">
                                Developed a full-stack e-commerce platform using
                                React, Node.js, and MongoDB. Implemented
                                features such as user authentication, product
                                catalog, and payment integration.
                            </Text>
                        </VStack>
                    </VStack> */}

                    <VStack align="stretch" spacing={4}>
                        <Heading as="h2" size="lg" color="retroGreen.100">
                            Hobbies
                        </Heading>
                        <Text color="#FFF">
                            When not coding, I enjoy readin books, writing short
                            stories, watching animation content, listening to
                            old music and cooking. I like to play chess a lot
                            and riding bicycle.
                        </Text>
                    </VStack>
                </VStack>
            </Container>
        </Box>
    );
};

export default AboutComponent;
