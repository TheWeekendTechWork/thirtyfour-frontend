import { useState } from "react";
import { Box, VStack, Heading, Input, Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const toast = useToast();

    // Logic: dobDdobMcurDcurMadminmariaj
    // Assuming DOB is 12th May based on "0512" in email (could be 5th Dec, but trying standard Indian DDMM first -> 05/12)
    // Actually, user said "my date of birth day and month". Suffix 0512 usually implies 5th Dec (DDMM) or May 12th (MMDD).
    // Given the ambiguity, I'll allow both 0512 and 1205.
    // Dynamic part: current day and month

    const handleLogin = () => {
        const today = new Date();
        const curD = String(today.getDate()).padStart(2, '0');
        const curM = String(today.getMonth() + 1).padStart(2, '0');

        // Construct expected passwords
        // Format: dobD + dobM + curD + curM + "admin" + "mariaj"
        // Case A: DOB = 05/12 (5th Dec)
        const expectedPassA = `0512${curD}${curM}adminmariaj`;
        // Case B: DOB = 12/05 (12th May)
        const expectedPassB = `1205${curD}${curM}adminmariaj`;

        if (password === expectedPassA || password === expectedPassB) {
            toast({
                title: "Login Successful",
                status: "success",
                duration: 2000,
                isClosable: true,
            });

            // Prepare for admin dashboard
            localStorage.setItem("isAdmin", "true");
            navigate("/admin/dashboard");
        } else {
            toast({
                title: "Access Denied",
                description: "Incorrect password sequence.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            setPassword("");
        }
    };

    return (
        <Box
            minH="100vh"
            bg="retroGreen.900"
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontFamily="'Press Start 2P', cursive"
        >
            <VStack spacing={8} bg="retroGreen.800" p={10} borderRadius="20px" border="2px solid" borderColor="retroGreen.600" boxShadow="6px 6px 0 var(--chakra-colors-retroGreen-700)">
                <Heading size="md" color="retroGreen.100" textShadow="2px 2px 0 var(--chakra-colors-retroGreen-900)">
                    ADMIN CONSOLE
                </Heading>

                <Input
                    type="password"
                    placeholder="ENTER PASSCODE"
                    variant="flushed"
                    borderColor="retroGreen.500"
                    color="retroGreen.100"
                    focusBorderColor="retroGreen.300"
                    textAlign="center"
                    fontFamily="'Courier New', monospace"
                    fontWeight="bold"
                    letterSpacing="widest"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                    w="300px"
                    _placeholder={{ color: "retroGreen.600" }}
                />

                <Button
                    bg="retroGreen.600"
                    color="retroGreen.100"
                    borderRadius="none"
                    border="2px solid"
                    borderColor="retroGreen.400"
                    _hover={{
                        bg: "retroGreen.500",
                        transform: "translate(-2px, -2px)",
                        boxShadow: "4px 4px 0 var(--chakra-colors-retroGreen-700)"
                    }}
                    _active={{
                        transform: "translate(0, 0)",
                        boxShadow: "none"
                    }}
                    onClick={handleLogin}
                >
                    AUTHENTICATE
                </Button>
            </VStack>
        </Box>
    );
};

export default AdminLogin;
