import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
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
  FormControl,
  FormErrorMessage,
  VStack,
  HStack
} from "@chakra-ui/react";

const NewGirlSchema = yup.object().shape({
  name: yup.string().required(),
  birthday: yup.date().required(),
  picture: yup.string().required(),
  videos: yup.array()
});

const NewVideoSchema = yup.object().shape({
  title: yup.string().required(),
  href: yup.date().required(),
  girls: yup.string().min(6).required()
});

export default function Admin({ submitGirl, submitVideo }) {
  const { register, handleSubmit, errors, formState } = useForm({
    // resolver: yupResolver(NewGirlSchema),
    mode: "onBlur"
  });
  const onSubmit = (values) => {
    submitGirl(values);
  };
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    errors: errors2,
    formState: formState2
  } = useForm({
    // resolver: yupResolver(NewVideoSchema),
    mode: "onBlur"
  });
  const onSubmit2 = (values) => {
    submitVideo(values);
  };

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
            Admin
            <br />
          </Heading>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Box mt={10}>
              <Stack spacing={4}>
                <FormControl id="name" isInvalid={!!errors?.name?.message}>
                  <Input
                    name="name"
                    placeholder="Name"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500"
                    }}
                    ref={register}
                  />
                  <FormErrorMessage>
                    {errors.name && errors.name.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl
                  id="birthday"
                  isInvalid={!!errors?.birthday?.message}
                >
                  <Input
                    name="birthday"
                    type="date"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500"
                    }}
                    ref={register}
                  />
                  <FormErrorMessage>
                    {errors.birthday && errors.birthday.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl
                  id="profilePic"
                  isInvalid={!!errors?.profilePic?.message}
                >
                  <Input
                    type="file"
                    name="profilePic"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500"
                    }}
                    ref={register}
                  />
                  <FormErrorMessage>
                    {errors.profilePic && errors.profilePic.message}
                  </FormErrorMessage>
                </FormControl>
              </Stack>

              <Stack spacing={6}>
                <Button
                  type="submit"
                  isLoading={formState.isSubmitting}
                  fontFamily={"heading"}
                  mt={8}
                  w={"full"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  color={"white"}
                  _hover={{
                    bgGradient: "linear(to-r, red.400,pink.400)",
                    boxShadow: "xl"
                  }}
                >
                  Submit
                </Button>
              </Stack>
            </Box>
          </form>

          <form onSubmit={handleSubmit2(onSubmit2)}>
            <Box mt={10}>
              <Stack spacing={4}>
                <FormControl
                  id="nameVideo"
                  isInvalid={!!errors2?.nameVideo?.message}
                >
                  <Input
                    name="nameVideo"
                    placeholder="Name"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500"
                    }}
                    ref={register}
                  />
                  <FormErrorMessage>
                    {errors2.nameVideo && errors2.nameVideo.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl
                  id="profilePic"
                  isInvalid={!!errors2?.profilePic?.message}
                >
                  <Input
                    type="file"
                    name="href"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500"
                    }}
                    ref={register}
                  />
                  <FormErrorMessage>
                    {errors2.profilePic && errors2.profilePic.message}
                  </FormErrorMessage>
                </FormControl>
              </Stack>

              <Stack spacing={6}>
                <Button
                  type="submit"
                  isLoading={formState.isSubmitting}
                  fontFamily={"heading"}
                  mt={8}
                  w={"full"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  color={"white"}
                  _hover={{
                    bgGradient: "linear(to-r, red.400,pink.400)",
                    boxShadow: "xl"
                  }}
                >
                  Submit
                </Button>
              </Stack>
            </Box>
          </form>
        </Stack>
      </Container>
    </>
  );
}
