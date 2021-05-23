import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
} from "@chakra-ui/react";

export default function Hero() {
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
            Outsource Your<br />
            <Text as={"span"} color={"green.400"}>
              New Website
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            This is the core backend and frontend of a +18 website from a client who later cancelled the project. If you'd like a similar website, consider outsourcing it to me!
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              as={'a'}
              href={'mailto:aech-12@hotmail.com'}
              color={'grey.200'}
              // colorScheme={"primary"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500"
              }}
            >
              Email me
            </Button>
            <Button  as={'a'}
              href={'https://alexhowez.netlify.app/'} variant={"link"} colorScheme={"blue"} size={"sm"}>
              Visit my Portfolio
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

