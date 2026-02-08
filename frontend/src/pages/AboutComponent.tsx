import {
    Box,
    Container,
    VStack,
    SimpleGrid
} from "@chakra-ui/react";
import { useData } from "../context/DataContext";
import ContactCard from "../components/pages/about/ContactCard";
import ProfessionalSummary from "../components/pages/about/ProfessionalSummary";
import WorkExperience from "../components/pages/about/WorkExperience";
import Education from "../components/pages/about/Education";
import TechnicalSkills from "../components/pages/about/TechnicalSkills";
import KeyProjects from "../components/pages/about/KeyProjects";
import Hobbies from "../components/pages/about/Hobbies";

const AboutComponent = () => {
    const { resumeData, loading } = useData();

    if (loading) {
        return <Box minH="100vh" bg="retroGreen.800" />;
    }

    if (!resumeData || !resumeData.personalInfo) {
        return (
            <Box minH="100vh" bg="retroGreen.800" py={12} color="retroGreen.100" textAlign="center" fontFamily="'Courier New', monospace">
                Resume data unavailable.
            </Box>
        );
    }

    const { personalInfo, summary, workExperience, education, skills, projects, hobbies } = resumeData;

    return (
        <Box minH="100vh" bg="retroGreen.800" py={12} fontFamily="'Press Start 2P', cursive">
            <Container maxW="container.xl">
                <VStack spacing={8} align="stretch">
                    {/* Postcard-style Professional Summary with Vintage Contact Card */}
                    {/* Retro Layout: Contact Card (Left) + Summary (Right) */}
                    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10} alignItems="center" mt={{ base: 10, md: 0 }}>
                        {/* 1. Contact Card (Visual focus, rotated slightly) */}
                        <ContactCard personalInfo={personalInfo} />

                        {/* 2. Professional Summary (Clean text) */}
                        <ProfessionalSummary summary={summary} />
                    </SimpleGrid>

                    <WorkExperience workExperience={workExperience} />

                    <Education education={education} />

                    <TechnicalSkills skills={skills} />

                    <KeyProjects projects={projects} />

                    <Hobbies hobbies={hobbies} />
                </VStack>
            </Container>
        </Box>
    );
};

export default AboutComponent;
