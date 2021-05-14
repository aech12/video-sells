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
import testimage from "../../Files/019.jpg";
import { useState } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { baseUrl } from "../../services/utils";

export default function DisplayGallery({
  galleryHeader,
  galleryObjects,
  pageToRedirectTo
}) {
  const [redirectToPage, setredirectToPage] = useState(false);

  const redirectBoolean = (name) => {
    const { type } = galleryObjects.type;
    if (type === "girls") {
      setredirectToPage(`${baseUrl}/model/:${name}`);
    } else if (type === "videos") {
      setredirectToPage(`${baseUrl}/video/:${name}`);
    }
  };
  const gallery = galleryObjects.map((object) => {
    return (
      <Box key={object.id} colSpan={1} bg="blue">
        <img
          // src={object.picture}
          src={testimage}
          alt="video"
        />
      </Box>
      // <Box key={object.id} colSpan={1} bg="blue">
      //   <img
      //     onClick={()=> redirectBoolean(`pageToRedirectTo/:${name}`)}
      //     src={object.picture}
      //     alt={object.name}
      //   />
      // </Box>
    );
  });

  return (
    <>
      {redirectToPage ? (
        <Redirect to={redirectToPage} />
      ) : (
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
                {galleryHeader}
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
            {gallery}
          </Grid>
        </Container>
      )}
    </>
  );
}
