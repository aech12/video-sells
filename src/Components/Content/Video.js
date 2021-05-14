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
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";

export default function Video({ name, likes }) {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Plyr
        source={{
          type: "video",
          sources: [
            {
              src: "O4ldGzRVyd8",
              provider: "youtube"
            }
          ]
        }}
      />
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          name: {name}
          likes: {likes}
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex>
    </Stack>
  );
}
