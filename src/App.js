import "./App.css";

import React, { useState } from "react";

import { Form } from "./components/Form";
import { TableView } from "./components/TableView";

// to show on intial render
const DUMMY_DATA = [
  {
    firstName: "Sample",
    lastName: "Data",
    phoneNumber: "1234567890",
  },
];

function App() {
  const [personsInfo, setPersonsInfo] = useState(DUMMY_DATA);

  // handle form submission data
  const setPersonsInfoHandler = (personInfo) => {
    setPersonsInfo((prevPerson) => {
      return [personInfo, ...prevPerson];
    });
  };

  return (
    <div className="App">
      <Form onAddPhoneBook={setPersonsInfoHandler} />
      <TableView phoneBook={personsInfo} />
    </div>
  );
}

export default App;
