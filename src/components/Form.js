import React, { useState } from "react";

import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

export const Form = (props) => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState("");

  const firstNameHandler = (e) => {
    setEnteredFirstName(e.target.value);
  };

  const lastNameHandler = (e) => {
    setEnteredLastName(e.target.value);
  };

  const phoneNumberHandler = (e) => {
    setEnteredPhoneNumber(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // store entered data
    const phoneBook = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      phoneNumber: enteredPhoneNumber,
    };

    // state lift up
    props.onAddPhoneBook(phoneBook);

    // clear form
    setEnteredFirstName("");
    setEnteredLastName("");
    setEnteredPhoneNumber("");
  };

  return (
    <form onSubmit={submitHandler}>
      <TextField
        fullWidth
        variant="outlined"
        name="firstName"
        margin="normal"
        onChange={firstNameHandler}
        value={enteredFirstName}
        placeholder="Enter your first name"
      />

      <TextField
        fullWidth
        variant="outlined"
        name="lastName"
        margin="normal"
        onChange={lastNameHandler}
        value={enteredLastName}
        placeholder="Enter your last name"
      />

      <TextField
        fullWidth
        variant="outlined"
        name="phoneNumber"
        margin="normal"
        onChange={phoneNumberHandler}
        value={enteredPhoneNumber}
        placeholder="Enter your phone number"
      />

      <Button variant="contained" size="large" color="success" type="submit">
        Submit
      </Button>
    </form>
  );
};
