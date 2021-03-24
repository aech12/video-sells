import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

export default function Hero() {
  return (
    <>
      <Container maxW={"3xl"}>
        <Grid
          h="800px"
          // templateRows="repeat(2, 1fr)"
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)"
          }}
          // templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          {map}
          <GridItem colSpan={1} bg="tomato" />
          <GridItem colSpan={1} bg="papayawhip" />
          <GridItem colSpan={1} bg="papayawhip" />
          <GridItem colSpan={1} bg="blue" />
          <GridItem colSpan={1} bg="tomato" />
          <GridItem colSpan={1} bg="blue" />
          <GridItem colSpan={1} bg="tomato" />
        </Grid>
      </Container>
    </>
  );
}

const GridWithVideos