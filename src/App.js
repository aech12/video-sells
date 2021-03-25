import logo from "./logo.svg";
import { ChakraProvider } from "@chakra-ui/react";
import Main from "./Containers/Main";
import TopVideos from "./Containers/TopVideos";
import Join from "./Containers/Join";

function App() {
  return (
    <ChakraProvider>
      <Main />
      <TopVideos />
      <Join />
    </ChakraProvider>
  );
}

export default App;
