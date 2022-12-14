import React, { useState } from "react";
import Login from "components/Login";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  const [id, setId] = useLocalStorage();
  return (
    <>
      {id}
      <Login onIdSubmit={setId} />
    </>
  );
}
