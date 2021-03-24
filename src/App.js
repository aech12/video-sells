import logo from "./logo.svg";
import { ChakraProvider } from "@chakra-ui/react";
import Main from "./Containers/Main";
import TopVideos from "./Containers/TopVideos";

function App() {
  return (
    <ChakraProvider>
      <Main />
      <TopVideos />
    </ChakraProvider>
  );
}

export default App;
