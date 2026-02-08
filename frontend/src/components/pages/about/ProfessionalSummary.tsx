import {
    Heading,
    Text,
    Card,
    CardHeader,
    CardBody
} from "@chakra-ui/react";
import MotionCard from "./MotionCard";

interface ProfessionalSummaryProps {
    summary: string;
}

const ProfessionalSummary: React.FC<ProfessionalSummaryProps> = ({ summary }) => {
    return (
        <MotionCard
            as={Card}
            bg="retroGreen.700"
            borderColor="retroGreen.500"
            borderWidth="3px"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            // @ts-ignore
            transition={{ duration: 0.7, delay: 0.4 }}
            boxShadow="2xl"
            position="relative"
        >
            <CardHeader bg="retroGreen.600" borderBottom="2px solid" borderColor="retroGreen.500" py={4}>
                <Heading size="md" color="retroGreen.100" fontFamily="'Press Start 2P', cursive">
                    &gt; Professional Summary
                </Heading>
            </CardHeader>
            <CardBody p={{ base: 6, md: 8 }}>
                <Text
                    fontSize="lg"
                    color="retroGreen.100"
                    lineHeight="1.8"
                    fontFamily="'Courier New', monospace"
                    letterSpacing="wide"
                >
                    {summary}
                </Text>
            </CardBody>
        </MotionCard>
    );
};

export default ProfessionalSummary;
