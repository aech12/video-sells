import {
  Button,
  Checkbox,
  Flex,
  Box,
  Text,
  Heading,
  Input,
  Link,
  Stack,
  Image
} from "@chakra-ui/react";

export default function Girl({ name, age, picture }) {
  return (
    <Box
      minH={"100vh"}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        as={Stack}
        direction={{ base: "column", md: "row" }}
        bg={"gray.50"}
        rounded={"xl"}
        p={{ base: 4, sm: 6, md: 8 }}
        maxW={{ base: "90%", sm: "300px" }}
        textAlign="center"
        alignSelf="center"
      >
        <Image src={picture} alt={name} />
        <Box>
          <Text fontSize="1xl" color={"gray.800"}>
            Name:
          </Text>
          <Text fontSize="1xl" color={"gray.600"}>
            {name}
          </Text>
        </Box>
        <Box>
          <Text fontSize="1xl" color={"gray.800"}>
            Age:
          </Text>
          <Text fontSize="1xl" color={"gray.600"}>
            {age}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
