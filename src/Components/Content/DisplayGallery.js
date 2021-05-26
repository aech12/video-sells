import PropTypes from "prop-types";
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
  GridItem,
  Image
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
  const [elementToRedirect, setelementToRedirect] = useState({});

  const gallery = galleryObjects.map((object) => {
    return (
      <GridItem key={object.id} colSpan={1} align={"center"}>
        <Image
          onClick={() => {
            setelementToRedirect({ id: object.id, name: object.name });
            setredirectToPage(`${pageToRedirectTo}/:${object.id}`);
          }}
          // src={testimage}
          src={object.picture}
          alt={object.name}
        />
      </GridItem>
    );
  });

  return (
    <>
      {redirectToPage ? (
        <Redirect
          to={{
            pathname: `${redirectToPage}`,
            state: { ...elementToRedirect }
          }}
        />
      ) : (
        <Container maxW={"3xl"}>
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            // py={{ base: 10, md: 16 }}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}
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
              md: "repeat(4, 1fr)"
            }}
            py={{ base: 6, md: 10 }}
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

DisplayGallery.propTypes = {
  galleryObjects: PropTypes.array
};
