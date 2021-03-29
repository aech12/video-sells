import { useForm } from "react-hook-form";
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

export default function SplitScreen() {
  const { register, handleSubmit, errors, formState } = useForm();

  function onSubmit(values) {
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     alert(JSON.stringify(values, null, 2));
    //     resolve();
    //   }, 3000);
    // });
  }

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Heading fontSize={"2xl"}>Member Login</Heading>
            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <Input name="username" type="username" />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input name="password" type="password" />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.500"}>Forgot password?</Link>
              </Stack>
              <Button
                type="submit"
                isLoading={formState.isSubmitting}
                colorScheme={"blue"}
                variant={"solid"}
              >
                Enter
              </Button>
            </Stack>
          </form>
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
