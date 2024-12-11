import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Dismissing from "./components/Dismissing";
import ListGroup from "./components/ListGroup";

function App() {
  let iteam = ["Mumbai", "Delhi", "Pune", "Indore"];
  const handleSelectIteam = (iteam: string) => {
    console.log(iteam);
  };
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {/* <Button color="danger" onclick={() => console.log("clicked")}>
        Button
      </Button>
      <Alert>
        hello<span> World</span>
      </Alert>
      <ListGroup
        iteam={iteam}
        heading="Cities"
        onSelectIteam={handleSelectIteam}
      />
      <Message />

      <Dismissing></Dismissing> */}

      {alertVisible && (
        <Dismissing onclose={() => setAlertVisible(false)}></Dismissing>
      )}
      <Button color="danger" onclick={() => setAlertVisible(true)}>
        Alert Button
      </Button>
    </div>
  );
}

export default App;
