import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
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

const LoginSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().min(6).required()
});

export default function LoginForm(props) {
  const { register, handleSubmit, errors, formState } = useForm({
    resolver: yupResolver(LoginSchema),
    mode: "onBlur"
  });

  const onSubmit = (values) => {
    props.handleLogin(values);
  };

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Heading fontSize={"2xl"}>Member Login</Heading>
            <FormControl id="username" isInvalid={!!errors?.username?.message}>
              <FormLabel>Username</FormLabel>
              <Input name="username" type="username" ref={register} />
              <FormErrorMessage>
                {errors.username && errors.username.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl id="password" isInvalid={!!errors?.password?.message}>
              <FormLabel>Password</FormLabel>
              <Input name="password" type="password" ref={register} />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                {/* <Checkbox>Remember me</Checkbox> */}
                <Link color={"blue.500"}>Forgot password?</Link>
              </Stack>
              <Button
                type="submit"
                isLoading={formState.isSubmitting}
                colorScheme={"blue"}
                variant={"solid"}
                // disabled={!!errors.email || !!errors.password}
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
            "https://images.unsplash.com/photo-1542295474-5e78124e5d59?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex>
    </Stack>
  );
}
