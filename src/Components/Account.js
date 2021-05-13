import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Input,
  Icon,
  useColorModeValue,
  createIcon
} from "@chakra-ui/react";

export default function Account({
  changeEmail,
  changePassword,
  cancelSubscription,
  deleteAccount,
  logOut,
  new_email,
  new_password
}) {
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
            Your account
            <br />
          </Heading>
          <Button onClick={() => logOut()}>Log out</Button>
          <Button onClick={() => changeEmail()}>Change email</Button>
          <Input {...new_email} placeholder="Change email" />
          <Text color={"gray.500"}>Your email</Text>
          <Button onClick={() => changePassword()}>Change password</Button>
          <Input {...new_password} placeholder="Change password" />
          <Button onClick={() => cancelSubscription()}>
            Cancel subscription
          </Button>
          <Button onClick={() => deleteAccount()}>Delete account</Button>
        </Stack>
      </Container>
    </>
  );
}
