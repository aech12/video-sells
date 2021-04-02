import { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  useColorModeValue,
  Flex,
  Spacer,
  Grid,
  GridItem
} from "@chakra-ui/react";
import testimage from "../Files/019.jpg";

export default function MainVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const populateVideos = () => {
      let fetchVideos = [];
      for (let i = 0; i < 6; i++) {
        fetchVideos = [
          ...fetchVideos,
          <Box key={i} colSpan={1} bg="blue">
            <img src={testimage} />
          </Box>
        ];
      }
      setVideos(fetchVideos);
    };
    populateVideos();
  }, [0]);
  // console.log("VIDEOS", videos, videos.length);

  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            <Text as={"span"} color={"green.400"}>
              Top Videos
            </Text>
          </Heading>
        </Stack>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)"
          }}
          // templateRows="repeat(1, 1fr)"
          gap={4}
        >
          {videos.map((video) => video)}
        </Grid>
      </Container>
    </>
  );
}
