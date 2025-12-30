import { useState } from "react";



export default function PersonForm(){
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [about, setAbout] = useState("");
    const [interests, setInterests] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const person = {
            name,
            title,
            imageUrl,
            about,
            interests
        };

        console.log(person);
    }

    return (
        <form className="person-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />

            <input
                type="text"
                placeholder="ImageUrl"
                value={imageUrl}
                onChange={(e)=>setImageUrl(e.target.value)}
            />

            <textarea
                placeholder="About"
                value={about}
                onChange={(e)=>setAbout(e.target.value)}
            />

            <textarea
                placeholder="Interests"
                value={interests}
                onChange={(e)=>setInterests(e.target.value)}
            />

            <button type="submit">Add person</button>
        </form>
    );
}