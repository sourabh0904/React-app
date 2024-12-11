import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  let iteam = ["Mumbai", "Delhi", "Pune", "Indore"];
  const handleSelectIteam = (iteam: string) => {
    console.log(iteam);
  };
  return (
    <div>
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
