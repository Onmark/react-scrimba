import Navbar from "./Info/Navbar"

export default function Info({person}) {

    return (
    <header>
      <img
        className="header-nav-img"
        src={person.imageUrl}
        alt={person.name}
      />

      <h1>{person.name}</h1>
      <h2>{person.title}</h2>

      <Navbar />
    </header>
    );
}