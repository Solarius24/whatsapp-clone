import React from "react";
import Login from "components/Login";
import useLocalStorage from "components/hooks/useLocalStorage";
import Dashboard from "components/Dashboard";
import { ContactsProvider } from "contexts/ContactsContext";

export default function App() {
  const [id, setId] = useLocalStorage();


  const dashboard = (
    <ContactsProvider>
      <Dashboard id={id}/>
    </ContactsProvider>
  )
  return (
    <>
      {id ? dashboard : <Login onIdSubmit={setId}/>}
    </>
  );
}
