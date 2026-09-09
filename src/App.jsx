import { useCallback, useState } from "react";
import BootScreen from "./components/BootScreen";
import Desktop from "./components/Desktop";

function App() {
  const [booted, setBooted] = useState(false);

  const reboot = useCallback(() => {
    setBooted(false);
  }, []);

  return booted ? (
    <Desktop onReboot={reboot} />
  ) : (
    <BootScreen onEnter={() => setBooted(true)} />
  );
}

export default App;
