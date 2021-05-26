import {
  Button,
  Flex,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Box,
  Text
} from "@chakra-ui/react";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";

export default function Video({ name, likes, href, girls }) {
  console.log(typeof girls, likes, href, girls);
  let modelsInVideo = [];
  if (girls) {
    modelsInVideo = girls.map((girl) => {
      return (
        <Box>
          <Text
            pl={[4, 8]}
            textAlign={"left"}
            fontSize="2xl"
            color={"gray.600"}
          >
            {girl.name}
          </Text>
          <Image src={girl.picture} />
        </Box>
      );
    });
  }
  // console.log(10);

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Stack w={["100%"]} maxW={{ md: "60%" }}>
        <Box px={{ md: "6" }} py={{ md: "4" }} w={"full"}>
          <Plyr
            source={{
              type: "video",
              sources: [
                {
                  src: href,
                  provider: "youtube"
                }
              ]
            }}
          />
        </Box>
        <Flex flex={1}>
          <Text pl={[4, 8]} textAlign={"left"} fontSize="2xl">
            {name}
          </Text>
        </Flex>
      </Stack>
      <Stack
        bg={"gray.50"}
        rounded={"xl"}
        p={{ base: 4, sm: 6, md: 8 }}
        spacing={{ base: 8 }}
        maxW={{ lg: "lg" }}
        maxH={"455px"}
      >
        <Text pl={[4, 8]} textAlign={"left"} fontSize="2xl" color={"gray.600"}>
          Models
        </Text>
        {modelsInVideo}
      </Stack>
    </Stack>
  );
}
