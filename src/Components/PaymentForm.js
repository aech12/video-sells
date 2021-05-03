import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Checkbox,
  Link
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export default function PaymentForm(props) {
  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onBlur"
  });
  const stripe = useStripe();
  const elements = useElements();

  const onSubmit = (values) => {
    const cardElement = elements.getElement(CardElement);
    values.cardElement = cardElement;

    props.handleSubmit(values);
  };

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Heading fontSize={"2xl"}>Member Login</Heading>
            <FormControl id="username" isInvalid={!!errors?.username?.message}>
              <Input value="name nomer" name="name" ref={register} />
              <FormErrorMessage>
                {errors.username && errors.username.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl id="password" isInvalid={!!errors?.password?.message}>
              <CardElement />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <Stack spacing={6}>
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
    </Stack>
  );
}
