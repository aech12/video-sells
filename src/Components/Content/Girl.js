import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Input,
  Link,
  Stack,
  Image
} from "@chakra-ui/react";

export default function Girl({ name, age, picture }) {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex flex={1}>
        <p>Model name {name}</p>
        <p>Model age {age}</p>
      </Flex>
      <Flex flex={1}>
        <Image alt={"Login Image"} objectFit={"cover"} src={`${picture}`} />
      </Flex>
    </Stack>
  );
}
