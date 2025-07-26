import { useState } from "react";

export default function Example() {
  const [dropdownStates, setDropdownStates] = useState({});

  const toggleDropdown = (id) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  const myArray = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" }
  ];

  return (
    <div>
      {myArray.map((item) => (
        <div key={item.id}>
          <button onClick={() => toggleDropdown(item.id)}>
            Toggle Dropdown
          </button>
          <div
            className={`relative bg-stone-600 top-[10px] ${
              dropdownStates[item.id] ? "" : "hidden"
            }`}
          >
            Dropdown content for item {item.name}
          </div>
        </div>
      ))}
    </div>
  );
}
