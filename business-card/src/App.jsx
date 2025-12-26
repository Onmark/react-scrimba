import Card from "./components/Card"

import { useEffect, useState } from "react"




export default function App(){

    const [persons, setPersons] = useState([])

    useEffect(() => {
      fetch("http://localhost:8080/api/persons")
        .then(response => response.json())
        .then(data => {
          console.log("DATA Z BACKENDU:", data)
          setPersons(data)
        })
        .catch(error => {
          console.error("Chyba při fetchi:", error)
        })
    }, [])




  return (
    <div className="cards-container">
      {persons.map(person => (
        <Card key={person.id} person={person} />
      ))}
    </div>
  )
}