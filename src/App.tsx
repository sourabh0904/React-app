import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let iteam = ["Mumbai", "Delhi", "Pune", "Indore"];
  const handleSelectIteam = (iteam: string) => {
    console.log(iteam);
  };
  return (
    <div>
      <Button color="danger" onclick={() => console.log("clicked")}>
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
    </div>
  );
}

export default App;
