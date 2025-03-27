import { Box, Heading, Button, FormControl, FormLabel, Input, Select, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const AddAccountStep1 = () => {
  const navigate = useNavigate();
  const [accountDetails, setAccountDetails] = useState({
    name: "",
    type: "",
    id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (!accountDetails.name || !accountDetails.type || !accountDetails.id) {
      alert("Please fill all fields before proceeding!");
      return;
    }
    navigate("/add-account-step-2", { state: { details: accountDetails } });
  };

  return (
    <Box p={5} w={{ base: "100%", md: "80%" }} mx="auto">
      <NavigationBar title="Add Account - Step 1" />
      <Heading size="lg" my={4} textAlign="center">Step 1: Enter Account Details</Heading>
      
      <VStack spacing={4} align="stretch">
        <FormControl isRequired>
          <FormLabel>Account Name</FormLabel>
          <Input name="name" placeholder="Enter account name" value={accountDetails.name} onChange={handleChange} />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Account Type</FormLabel>
          <Select name="type" placeholder="Select account type" value={accountDetails.type} onChange={handleChange}>
            <option value="Savings">Savings</option>
            <option value="Checking">Checking</option>
            <option value="Business">Business</option>
          </Select>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Account ID</FormLabel>
          <Input name="id" placeholder="Enter account ID" value={accountDetails.id} onChange={handleChange} />
        </FormControl>

        <Button colorScheme="blue" onClick={handleNext} width="full">Next</Button>
      </VStack>
    </Box>
  );
};

export default AddAccountStep1;
