import Navbar from "../Components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

const Main = () => {
  return (
    <ChakraProvider>
      <Navbar />
    </ChakraProvider>
  );
};

export default Main;
