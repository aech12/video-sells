import { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  useColorModeValue
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

export default function Hero() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const populateVideos = () => {
      let fetchVideos =  []
      for (let i = 0; i < 12; i++) {
        fetchVideos = [...fetchVideos, <GridItem key={i} colSpan={1} bg="blue" />]
      }
      setVideos(fetchVideos);
    };
    populateVideos();
  }, [0]);
  console.log("VIDEOS", videos, videos.length);

  return (
    <>
      <Container maxW={"3xl"}>
        <Grid
          h="200px"
          // templateRows="repeat(2, 1fr)"
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)"
          }}
          // templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          {videos.map((video) => video)}
        </Grid>
      </Container>
    </>
  );
}
