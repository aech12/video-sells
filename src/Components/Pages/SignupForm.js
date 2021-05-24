import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
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
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  HStack
} from "@chakra-ui/react";

const SignupSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required()
});

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      w={{ base: "90%", md: "45%" }}
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

export default function SignupForm({
  handleSubmit: handleSignup,
  setActive,
  active
}) {
  const { register, handleSubmit, errors, formState } = useForm({
    // resolver: yupResolver(SignupSchema),
    mode: "onBlur"
  });
  const onSubmit = (values) => {
    handleSignup(values);
  };

  return (
    <Box position={"relative"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container
          as={SimpleGrid}
          maxW={"7xl"}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 32 }}
        >
          <Stack spacing={{ base: 10, md: 20 }}>
            <Heading
              lineHeight={1.1}
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            >
              Enjoy our library, just one more step!{" "}
            </Heading>
            <Stack
              direction={{ base: "column", md: "row", lg: "row" }}
              wrap={"wrap"}
              textAlign="center"
              justify="center"
              spacing={{ base: 4, lg: 10 }}
              // py={10}
            >
              <PriceWrapper>
                <Box py={4} px={[6, 6]}>
                  <Text fontWeight="500" fontSize="2xl">
                    Package 1
                  </Text>
                  <HStack justifyContent="center">
                    <Text fontSize="3xl" fontWeight="600">
                      $
                    </Text>
                    <Text fontSize="5xl" fontWeight="900">
                      10
                    </Text>
                    <Text fontSize="3xl" color="gray.500">
                      / 1 month
                    </Text>
                  </HStack>
                </Box>
                <VStack
                  bg={useColorModeValue("gray.50", "gray.700")}
                  py={4}
                  borderBottomRadius={"xl"}
                >
                  <Box w="80%" pt={7}>
                    <Button
                      onClick={() => setActive("plan 1")}
                      w="full"
                      colorScheme="red"
                      variant={active === "plan 1" ? "solid" : "outline"}
                    >
                      Choose
                    </Button>
                  </Box>
                </VStack>
              </PriceWrapper>

              <PriceWrapper
              // width="10%" border="1px" borderColor="red.500"
              >
                <Box position="relative">
                  {/* <Box
                    position="absolute"
                    top="-16px"
                    left="50%"
                    style={{ transform: "translate(-50%)" }}
                  >
                    <Text
                      textTransform="uppercase"
                      bg={useColorModeValue("red.300", "red.700")}
                      px={3}
                      py={1}
                      color={useColorModeValue("gray.900", "gray.300")}
                      fontSize="sm"
                      fontWeight="600"
                      rounded="xl"
                    >
                      Most Popular
                    </Text>
                  </Box> */}
                  <Box py={4} px={4}>
                    <Text fontWeight="500" fontSize="2xl">
                      Package 2
                    </Text>
                    <HStack justifyContent="center">
                      <Text fontSize="3xl" fontWeight="600">
                        $
                      </Text>
                      <Text fontSize="5xl" fontWeight="900">
                        25
                      </Text>
                      <Text fontSize="3xl" color="gray.500">
                        /3 months
                      </Text>
                    </HStack>
                  </Box>
                  <VStack
                    bg={useColorModeValue("gray.50", "gray.700")}
                    py={4}
                    borderBottomRadius={"xl"}
                  >
                    <Box w="80%" pt={7}>
                      <Button
                        onClick={() => {
                          setActive("plan 2");
                        }}
                        w="full"
                        colorScheme="red"
                        variant={active === "plan 2" ? "solid" : "outline"}
                      >
                        Choose
                      </Button>
                    </Box>
                  </VStack>
                </Box>
              </PriceWrapper>

              <PriceWrapper>
                <Box py={4} px={12}>
                  <Text fontWeight="500" fontSize="2xl">
                    Package 3
                  </Text>
                  <HStack justifyContent="center">
                    <Text fontSize="3xl" fontWeight="600">
                      $
                    </Text>
                    <Text fontSize="5xl" fontWeight="900">
                      85
                    </Text>
                    <Text fontSize="3xl" color="gray.500">
                      / year
                    </Text>
                  </HStack>
                </Box>
                <VStack
                  bg={useColorModeValue("gray.50", "gray.700")}
                  py={4}
                  borderBottomRadius={"xl"}
                >
                  <Box w="80%" pt={7}>
                    <Button
                      onClick={() => setActive("plan 3")}
                      w="full"
                      colorScheme="red"
                      variant={active === "plan 3" ? "solid" : "outline"}
                    >
                      Choose
                    </Button>
                  </Box>
                </VStack>
              </PriceWrapper>
            </Stack>
          </Stack>

          <Stack
            bg={"gray.50"}
            rounded={"xl"}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: "lg" }}
            maxH={"455px"}
          >
            <Box py={3} border={"black"}>
              <VStack spacing={2} textAlign="center">
                <Heading color={"gray.700"} as="h1" fontSize="4xl">
                  Access NOW!
                </Heading>
                <Text fontSize="lg" color={"gray.500"}>
                  Premium quality videos being added weekly!
                </Text>
              </VStack>
            </Box>
            <Box mt={10}>
              <Stack spacing={4}>
                <FormControl
                  id="username"
                  isInvalid={!!errors?.username?.message}
                >
                  <Input
                    name="username"
                    placeholder="Username"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500"
                    }}
                    ref={register}
                  />
                  <FormErrorMessage>
                    {errors.username && errors.username.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl id="email" isInvalid={!!errors?.email?.message}>
                  <Input
                    name="email"
                    placeholder="Email"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500"
                    }}
                    ref={register}
                  />
                  <FormErrorMessage>
                    {errors.email && errors.email.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl
                  id="password"
                  isInvalid={!!errors?.password?.message}
                >
                  <Input
                    name="password"
                    placeholder="Password"
                    type="password"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500"
                    }}
                    ref={register}
                  />
                  <FormErrorMessage>
                    {errors.password && errors.password.message}
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
          </Stack>
        </Container>
        <Blur
          position={"absolute"}
          top={{ base: "10", lg: "10" }}
          left={-10}
          style={{ filter: "blur(70px)" }}
        />
      </form>
    </Box>
  );
}

export const Blur = (props: IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: -1 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};
