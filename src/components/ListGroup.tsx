import { useState } from "react";

interface Props {
  iteam: string[];
  heading: string;
  onSelectIteam: (iteam: string) => void;
}

function ListGroup({ iteam, heading, onSelectIteam }: Props) {
  //   iteam = [];

  //   if (iteam.length === 0) {
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No Iteam Found</p>
  //       </>
  //     );
  //   }

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {iteam.length === 0 ? <p>No iteam found</p> : null}
        {iteam.map((iteam, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectIteam(iteam);
            }}
            key={index}
          >
            {iteam}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
