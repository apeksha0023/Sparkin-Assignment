import { 
    Flex, IconButton, Text, Tooltip, useColorMode, useColorModeValue 
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon, RepeatIcon } from "@chakra-ui/icons";
import { FaMoon, FaSun } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NavigationBar = ({ title }) => {
    const navigate = useNavigate();
    
    // Dark/Light Mode
    const { colorMode, toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue("gray.100", "gray.800");
    const textColor = useColorModeValue("gray.800", "white");

    return (
        <Flex 
            p={3} 
            bg={bgColor} 
            alignItems="center" 
            justify="space-between" 
            borderBottom="1px solid" 
            borderColor={useColorModeValue("gray.300", "gray.600")}
            boxShadow="sm"
            position="sticky"
            top="0"
            zIndex="1000"
        >
            <Flex>
                <Tooltip label="Back">
                    <IconButton icon={<ArrowBackIcon />} aria-label="Back" mr={2} onClick={() => navigate(-1)} />
                </Tooltip>
                <Tooltip label="Forward">
                    <IconButton icon={<ArrowForwardIcon />} aria-label="Forward" mr={2} onClick={() => navigate(1)} />
                </Tooltip>
                <Tooltip label="Refresh">
                    <IconButton icon={<RepeatIcon />} aria-label="Refresh" mr={4} onClick={() => window.location.reload()} />
                </Tooltip>
            </Flex>

            <Text fontSize="lg" fontWeight="bold" color={textColor}>{title}</Text>

            <Tooltip label={colorMode === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}>
                <IconButton 
                    icon={colorMode === "light" ? <FaMoon /> : <FaSun />} 
                    aria-label="Toggle Dark Mode" 
                    onClick={toggleColorMode} 
                    colorScheme="gray"
                />
            </Tooltip>
        </Flex>
    );
};

export default NavigationBar;
