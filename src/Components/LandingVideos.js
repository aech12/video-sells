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
    // const populateVideos = () => {
    //   for (let i = 0; i < 12; i++) {
    //     setVideos([...videos, <GridItem colSpan={1} bg="blue" />]);
    //   }
    // };
    // populateVideos();
    // setVideos([...videos, <GridItem colSpan={1} bg="blue" />]);
    console.log("VIDEOS", videos);
  }, [videos]);

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
          <GridItem colSpan={1} bg="papayawhip" />
          {videos.map((video) => video)}
        </Grid>
      </Container>
    </>
  );
}
