import { 
    Box, Heading, Button, Text, VStack, Flex, useColorModeValue 
  } from "@chakra-ui/react";
  import { useLocation, useNavigate } from "react-router-dom";
  import NavigationBar from "../components/NavigationBar";
  import CostSavingActions from "../components/CostSavingActions";
  import JAMPolicy from "../components/JAMPolicy";
  
  const AddAccountStep2 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const details = location.state?.details; // Get data from Step 1
  
    // Define dynamic colors
    const bgColor = useColorModeValue("white", "gray.800");
    const textColor = useColorModeValue("gray.800", "gray.100");
    const boxShadow = useColorModeValue("sm", "lg");
  
    // If details are missing, return an error message
    if (!details) {
      return (
        <Box p={5} w={{ base: "100%", md: "80%" }} mx="auto" textAlign="center">
          <Heading size="lg" my={4}>⚠️ Error: No account details found!</Heading>
          <Button colorScheme="red" onClick={() => navigate("/add-account-step-1")}>Go Back</Button>
        </Box>
      );
    }
  
    return (
      <Box p={5} w={{ base: "100%", md: "80%" }} mx="auto">
        <NavigationBar title="Add Account - Step 2" />
        <Heading size="lg" my={4} textAlign="center">📋 Confirm Account Details</Heading>
  
        <VStack spacing={4} align="stretch" p={4} borderWidth={1} borderRadius="lg" bg={bgColor} boxShadow={boxShadow}>
          <Text fontSize="lg" fontWeight="bold" color={textColor}>✅ <strong>Account Name:</strong> {details.name}</Text>
          <Text fontSize="lg" fontWeight="bold" color={textColor}>🔹 <strong>Account Type:</strong> {details.type}</Text>
          <Text fontSize="lg" fontWeight="bold" color={textColor}>🔑 <strong>Account ID:</strong> {details.id}</Text>
        </VStack>
  
        <CostSavingActions />
        <JAMPolicy />
  
        <Flex justify="space-between" mt={5} wrap="wrap">
          <Button colorScheme="gray" onClick={() => navigate(-1)}>⬅ Back</Button>
          <Button 
            colorScheme="blue" 
            onClick={() => navigate("/", { state: { details } })} 
          >
            ✅ Submit & Go to Dashboard
          </Button>
        </Flex>
      </Box>
    );
  };
  
  export default AddAccountStep2;
  