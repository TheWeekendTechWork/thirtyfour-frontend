import {
    Box,
    Container,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Heading,
    Button,
    useToast,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import HomeEditor from "../components/admin/HomeEditor";
import ResumeEditor from "../components/admin/ResumeEditor";
import { useData } from "../context/DataContext";

const AdminDashboard = () => {
    const navigate = useNavigate();
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef<HTMLButtonElement>(null);

    // State management for both datasets - Initialize from DataContext
    const { homeData: contextHomeData, resumeData: contextResumeData } = useData();
    const [homeData, setHomeData] = useState(contextHomeData);
    const [resumeData, setResumeData] = useState(contextResumeData);

    // Sync local state with context when fetched data arrives
    useEffect(() => {
        setHomeData(contextHomeData);
    }, [contextHomeData]);

    useEffect(() => {
        setResumeData(contextResumeData);
    }, [contextResumeData]);

    useEffect(() => {
        const isAdmin = localStorage.getItem("isAdmin");
        if (!isAdmin) {
            navigate("/admin");
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("isAdmin");
        navigate("/admin");
    };

    const handleSaveAndPublish = async () => {
        onClose(); // Close existing dialog

        try {
            // Save Home Data
            const homeResponse = await fetch('/api/save/home-data', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(homeData)
            });

            if (!homeResponse.ok) throw new Error('Failed to save Home Data');

            // Save Resume Data
            const resumeResponse = await fetch('/api/save/resume-data', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(resumeData)
            });

            if (!resumeResponse.ok) throw new Error('Failed to save Resume Data');

            toast({
                title: "Changes Published!",
                description: "Data updated successfully. Logging out...",
                status: "success",
                duration: 2000,
                isClosable: true,
            });

            setTimeout(() => {
                handleLogout();
                // Optionally reload purely to see changes if SPA routing didn't catch it, 
                // but navigating to home usually suffices if data is re-imported.
                // Since imports are static in Vite, a full reload might be needed to see updated JSONs in dev.
                window.location.href = "/";
            }, 2000);

        } catch (error) {
            console.error(error);
            toast({
                title: "Error Saving Data",
                description: "Could not save changes to the server.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    return (
        <Box minH="100vh" bg="retroGreen.900" py={10} fontFamily="'Press Start 2P', cursive">
            <Container maxW="container.xl">
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={8}>
                    <Heading size="md" color="retroGreen.100">
                        ADMIN DASHBOARD
                    </Heading>
                    <Box>
                        <Button
                            size="sm"
                            variant="outline"
                            colorScheme="red"
                            mr={4}
                            onClick={handleLogout}
                            fontFamily="'Press Start 2P', cursive"
                        >
                            LOGOUT
                        </Button>
                        <Button
                            size="sm"
                            colorScheme="green"
                            bg="retroGreen.600"
                            _hover={{ bg: "retroGreen.500" }}
                            onClick={onOpen}
                            fontFamily="'Press Start 2P', cursive"
                            boxShadow="4px 4px 0 var(--chakra-colors-retroGreen-800)"
                        >
                            SAVE & PUBLISH
                        </Button>
                    </Box>
                </Box>

                <Tabs variant="enclosed" colorScheme="green" isLazy>
                    <TabList mb="1em" borderBottomColor="retroGreen.600">
                        <Tab
                            _selected={{ color: "retroGreen.900", bg: "retroGreen.100", borderColor: "retroGreen.100" }}
                            color="retroGreen.400"
                            fontFamily="'Press Start 2P', cursive"
                            fontSize="xs"
                        >
                            HOME DATA
                        </Tab>
                        <Tab
                            _selected={{ color: "retroGreen.900", bg: "retroGreen.100", borderColor: "retroGreen.100" }}
                            color="retroGreen.400"
                            fontFamily="'Press Start 2P', cursive"
                            fontSize="xs"
                        >
                            RESUME DATA
                        </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <HomeEditor data={homeData} setData={setHomeData} />
                        </TabPanel>
                        <TabPanel>
                            <ResumeEditor data={resumeData} setData={setResumeData} />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Container>

            {/* Confirmation Alert */}
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent bg="retroGreen.800" color="retroGreen.100" fontFamily="'Press Start 2P', cursive" border="2px solid" borderColor="retroGreen.500">
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Save Changes?
                        </AlertDialogHeader>

                        <AlertDialogBody fontSize="sm" fontFamily="'Courier New', monospace">
                            Are you sure you want to publish these changes? This will update the website content immediately and log you out.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose} variant="ghost" colorScheme="green" mr={3} fontFamily="'Press Start 2P', cursive" size="sm">
                                Cancel
                            </Button>
                            <Button colorScheme="green" onClick={handleSaveAndPublish} ml={3} fontFamily="'Press Start 2P', cursive" size="sm">
                                Yes, Save
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </Box>
    );
};

export default AdminDashboard;
