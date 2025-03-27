import { 
    Box, Checkbox, VStack, Heading, useColorModeValue 
  } from "@chakra-ui/react";
  import { useState } from "react";
  
  const actions = [
    "✅ Start-Stop Resources: EC2, RDS, Light Sail, Amazon Neptune",
    "📌 Pause Reserve Resource: Redshift Clusters, Aurora Serverless V2",
    "⚡ Resource Cleanup: Terminate EC2, Delete EBS Volumes, Delete Snapshots",
  ];
  
  const CostSavingActions = () => {
    const [checkedItems, setCheckedItems] = useState(Array(actions.length).fill(false));
  
    const toggleCheckbox = (index) => {
      const newCheckedItems = [...checkedItems];
      newCheckedItems[index] = !newCheckedItems[index];
      setCheckedItems(newCheckedItems);
    };
  
    // Dynamic colors for dark/light mode
    const bgColor = useColorModeValue("white", "gray.800");
    const textColor = useColorModeValue("gray.800", "gray.100");
    const boxShadow = useColorModeValue("sm", "lg");
  
    return (
      <Box p={5} borderWidth={1} borderRadius="lg" bg={bgColor} boxShadow={boxShadow} mt={5}>
        <Heading size="md" mb={3} color={textColor}>💰 Cost-Saving Actions</Heading>
        <VStack align="start" spacing={3}>
          {actions.map((action, index) => (
            <Checkbox 
              key={index} 
              isChecked={checkedItems[index]} 
              onChange={() => toggleCheckbox(index)}
              colorScheme="blue"
              fontSize="md"
            >
              {action}
            </Checkbox>
          ))}
        </VStack>
      </Box>
    );
  };
  
  export default CostSavingActions;
  