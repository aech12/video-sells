import { Button, ButtonGroup } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="App">
      {colorMode === "light" ? "Light" : "Dark"}
      <Button colorScheme="green">Button</Button>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
