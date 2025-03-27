// // import { Box, Heading, Button, VStack, Text, Flex } from "@chakra-ui/react";
// // import { useLocation, useNavigate } from "react-router-dom";
// // import NavigationBar from "../components/NavigationBar";

// // const Dashboard = () => {
// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const details = location.state?.details; // Get data from AddAccountStep2

// //   return (
// //     <Box p={5} w={{ base: "100%", md: "80%" }} mx="auto">
// //       <NavigationBar title="Dashboard" />
// //       <Heading size="lg" my={4} textAlign="center">Welcome to Your Dashboard</Heading>

// //       {details ? (
// //         <VStack spacing={4} align="stretch" p={4} borderWidth={1} borderRadius="md" bg="white" boxShadow="sm">
// //           <Text><strong>Account Name:</strong> {details.name}</Text>
// //           <Text><strong>Account Type:</strong> {details.type}</Text>
// //           <Text><strong>Account ID:</strong> {details.id}</Text>
// //         </VStack>
// //       ) : (
// //         <Text textAlign="center" color="gray.600">No account details available.</Text>
// //       )}

// //       <Flex justify="space-between" mt={5} wrap="wrap">
// //         <Button colorScheme="blue" onClick={() => navigate("/add-account")}>Add New Account</Button>
         
// //       </Flex>
     
// //     </Box>
    
// //   );
// // };

// // export default Dashboard;


// import { 
//     Box, Heading, Button, VStack, Text, Flex, Icon, Divider, useColorMode, useColorModeValue, HStack 
//   } from "@chakra-ui/react";
//   import { FaUserCircle, FaMoon, FaSun, FaChartBar, FaUsers } from "react-icons/fa";
//   import { useLocation, useNavigate } from "react-router-dom";
//   import NavigationBar from "../components/NavigationBar";
  
//   const Dashboard = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const details = location.state?.details;
  
//     // Dark/Light mode toggle
//     const { colorMode, toggleColorMode } = useColorMode();
//     const bgGradient = useColorModeValue("linear(to-r, blue.400, purple.500)", "linear(to-r, gray.700, black)");
//     const cardBg = useColorModeValue("white", "gray.800");
//     const textColor = useColorModeValue("gray.800", "white");
//     const borderColor = useColorModeValue("gray.300", "gray.600");
  
//     return (
//       <Box minH="100vh" bgGradient={bgGradient} p={5}>
//         <NavigationBar title="Dashboard" />
  
//         <Flex justify="space-between" align="center" mt={5} mx="auto" w={{ base: "90%", md: "70%" }}>
//           <Heading size="xl" color="white" fontWeight="bold">Dashboard</Heading>
        
//         </Flex>
  
//         {/* Account Summary */}
//         <Flex justify="center" mt={6}>
//           {details ? (
//             <VStack 
//               spacing={4} 
//               align="stretch" 
//               p={6} 
//               borderWidth={1} 
//               borderRadius="xl" 
//               bg={cardBg} 
//               boxShadow="xl" 
//               w={{ base: "90%", md: "60%" }}
//               textAlign="center"
//             >
//               <Icon as={FaUserCircle} boxSize={12} color="blue.500" />
//               <Heading size="md" color={textColor}>Account Details</Heading>
//               <Divider />
//               <Text fontSize="lg" color={textColor}><strong>Account Name:</strong> {details.name}</Text>
//               <Text fontSize="lg" color={textColor}><strong>Account Type:</strong> {details.type}</Text>
//               <Text fontSize="lg" color={textColor}><strong>Account ID:</strong> {details.id}</Text>
//             </VStack>
//           ) : (
//             <Text textAlign="center" fontSize="lg" color="white">No account details available.</Text>
//           )}
//         </Flex>
  
//         {/* Insights Section */}
//         <Flex justify="center" mt={8} gap={6} wrap="wrap">
//           <Box 
//             p={5} 
//             borderWidth={1} 
//             borderRadius="lg" 
//             bg={cardBg} 
//             boxShadow="md"
//             textAlign="center"
//             minW="200px"
//           >
//             <Icon as={FaUsers} boxSize={8} color="blue.400" />
//             <Text fontSize="lg" fontWeight="bold" mt={3} color={textColor}>Total Accounts</Text>
//             <Text fontSize="xl" color="blue.500" fontWeight="bold">15</Text>
//           </Box>
  
//           <Box 
//             p={5} 
//             borderWidth={1} 
//             borderRadius="lg" 
//             bg={cardBg} 
//             boxShadow="md"
//             textAlign="center"
//             minW="200px"
//           >
//             <Icon as={FaChartBar} boxSize={8} color="green.400" />
//             <Text fontSize="lg" fontWeight="bold" mt={3} color={textColor}>Active Accounts</Text>
//             <Text fontSize="xl" color="green.500" fontWeight="bold">8</Text>
//           </Box>
//         </Flex>
  
//         {/* Recent Activities */}
//         <Box 
//           mt={10} 
//           p={5} 
//           borderWidth={1} 
//           borderRadius="lg" 
//           bg={cardBg} 
//           boxShadow="md"
//           mx="auto"
//           w={{ base: "90%", md: "70%" }}
//         >
//           <Heading size="md" color={textColor}>Recent Activities</Heading>
//           <Divider my={3} />
//           <VStack spacing={3} align="start">
//             <Text color={textColor}>✔ Account <strong>JohnDoe</strong> was added</Text>
//             <Text color={textColor}>✔ Payment processed for <strong>Cloud Services</strong></Text>
//             <Text color={textColor}>✔ Security policy updated</Text>
//           </VStack>
//         </Box>
  
//         {/* Buttons Section */}
//         <Flex justify="center" mt={8}>
//           <Button 
//             colorScheme="teal" 
//             size="lg" 
//             px={6} 
//             borderRadius="full" 
//             boxShadow="lg" 
//             _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
//             onClick={() => navigate("/add-account")}
//           >
//             Add New Account
//           </Button>
//         </Flex>
//       </Box>
//     );
//   };
  
//   export default Dashboard;
  



import { 
    Box, Heading, Button, VStack, Text, Flex, Icon, Divider, useColorMode, 
    useColorModeValue, HStack, Stack 
  } from "@chakra-ui/react";
  import { FaUserCircle, FaMoon, FaSun, FaChartBar, FaUsers } from "react-icons/fa";
  import { useLocation, useNavigate } from "react-router-dom";
  import NavigationBar from "../components/NavigationBar";
  
  const Dashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const details = location.state?.details;
  
    // Dark/Light mode toggle
    const { colorMode, toggleColorMode } = useColorMode();
    const bgGradient = useColorModeValue("linear(to-r, blue.400, purple.500)", "linear(to-r, gray.700, black)");
    const cardBg = useColorModeValue("white", "gray.800");
    const textColor = useColorModeValue("gray.800", "white");
  
    return (
      <Box minH="100vh" bgGradient={bgGradient} p={5}>
        <NavigationBar title="Dashboard" />
  
        {/* Header Section */}
        <Flex justify="space-between" align="center" mt={5} mx="auto" w={{ base: "95%", md: "80%" }}>
          <Heading size="lg" color="white" fontWeight="bold">Dashboard</Heading>
        </Flex>
  
        {/* Account Summary */}
        <Flex justify="center" mt={6} px={4}>
          {details ? (
            <VStack 
              spacing={4} 
              align="stretch" 
              p={6} 
              borderWidth={1} 
              borderRadius="xl" 
              bg={cardBg} 
              boxShadow="xl" 
              w={{ base: "100%", md: "60%" }}
              textAlign="center"
            >
              <Icon as={FaUserCircle} boxSize={12} color="blue.500" />
              <Heading size="md" color={textColor}>Account Details</Heading>
              <Divider />
              <Text fontSize="lg" color={textColor}><strong>Account Name:</strong> {details.name}</Text>
              <Text fontSize="lg" color={textColor}><strong>Account Type:</strong> {details.type}</Text>
              <Text fontSize="lg" color={textColor}><strong>Account ID:</strong> {details.id}</Text>
            </VStack>
          ) : (
            <Text textAlign="center" fontSize="lg" color="white">No account details available.</Text>
          )}
        </Flex>
  
        {/* Insights Section */}
        <Stack direction={{ base: "column", md: "row" }} justify="center" mt={8} spacing={6}>
          <Box 
            p={5} 
            borderWidth={1} 
            borderRadius="lg" 
            bg={cardBg} 
            boxShadow="md"
            textAlign="center"
            minW={{ base: "100%", md: "250px" }}
          >
            <Icon as={FaUsers} boxSize={8} color="blue.400" />
            <Text fontSize="lg" fontWeight="bold" mt={3} color={textColor}>Total Accounts</Text>
            <Text fontSize="xl" color="blue.500" fontWeight="bold">15</Text>
          </Box>
  
          <Box 
            p={5} 
            borderWidth={1} 
            borderRadius="lg" 
            bg={cardBg} 
            boxShadow="md"
            textAlign="center"
            minW={{ base: "100%", md: "250px" }}
          >
            <Icon as={FaChartBar} boxSize={8} color="green.400" />
            <Text fontSize="lg" fontWeight="bold" mt={3} color={textColor}>Active Accounts</Text>
            <Text fontSize="xl" color="green.500" fontWeight="bold">8</Text>
          </Box>
        </Stack>
  
       
  
        {/* Buttons Section */}
        <Flex justify="center" mt={8}>
          <Button 
            colorScheme="teal" 
            size="lg" 
            px={6} 
            borderRadius="full" 
            boxShadow="lg" 
            _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
            onClick={() => navigate("/add-account")}
          >
            Add New Account
          </Button>
        </Flex>
      </Box>
    );
  };
  
  export default Dashboard;
  