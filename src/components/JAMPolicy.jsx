import { 
    Box, Text, IconButton, useClipboard, useToast, useColorModeValue 
  } from "@chakra-ui/react";
  import { CopyIcon, CheckIcon } from "@chakra-ui/icons";
  import { useState } from "react";
  
  const policyText = `{
    "policy": "Your JSON policy details go here",
    "rules": ["Rule 1", "Rule 2", "Rule 3"],
    "permissions": ["Read", "Write", "Execute"]
  }`;
  
  const JAMPolicy = () => {
    const { hasCopied, onCopy } = useClipboard(policyText);
    const toast = useToast();
    const [copied, setCopied] = useState(false);
  
    const handleCopy = () => {
      onCopy();
      setCopied(true);
      toast({
        title: "Copied!",
        description: "JAM Policy JSON has been copied to clipboard.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      setTimeout(() => setCopied(false), 2000);
    };
  
    // Dynamic color themes for dark/light mode
    const bgColor = useColorModeValue("white", "gray.800");
    const textColor = useColorModeValue("gray.800", "gray.100");
    const policyBg = useColorModeValue("gray.100", "gray.700");
    const boxShadow = useColorModeValue("sm", "lg");
  
    return (
      <Box p={5} borderWidth={1} borderRadius="lg" bg={bgColor} boxShadow={boxShadow} mt={5}>
        <Text fontSize="lg" fontWeight="bold" color={textColor} mb={3}>📜 JAM Policy</Text>
        <Text fontSize="sm" bg={policyBg} p={3} borderRadius="md" fontFamily="monospace" whiteSpace="pre-wrap">
          {policyText}
        </Text>
        <IconButton 
          icon={copied ? <CheckIcon /> : <CopyIcon />} 
          aria-label="Copy Policy" 
          mt={3} 
          onClick={handleCopy} 
          colorScheme={copied ? "green" : "blue"} 
        />
      </Box>
    );
  };
  
  export default JAMPolicy;
  