import { chakra } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const MotionCard = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
    baseStyle: {
        // We can add default card styles here if needed, or rely on chakra props
    }
});

export default MotionCard;
