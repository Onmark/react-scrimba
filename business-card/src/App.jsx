import Card from "./components/Card"
import PersonForm from "./components/PersonForm"


import { useEffect, useState } from "react"




export default function App(){

    const [persons, setPersons] = useState([])

    const API_URL = "http://localhost:8080/api/persons";

    useEffect(() => {
        fetchPersons();
    },[]);

    async function fetchPersons() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setPersons(data);
      } catch (error) {
        console.error("Chyba při fetchi:", error);
      }
    }

     async function addPerson(person) {
       try {
         const response = await fetch(API_URL, {
           method: "POST",
           headers: {
             "Content-Type": "application/json"
           },
           body: JSON.stringify(person)
         });

         if (!response.ok) {
           throw new Error("Failed to save person");
         }

         await fetchPersons(); // znovu natáhne seznam
       } catch (error) {
         console.error("Error:", error);
       }
     }

// onAddPerson={addPerson} - property
  return (
    <>
        <PersonForm onAddPerson={addPerson} />
        <div className="cards-container">
          {persons.map(person => (
            <Card key={person.id} person={person} />
          ))}
        </div>
    </>
  )
}