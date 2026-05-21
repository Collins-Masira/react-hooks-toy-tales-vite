import { useState } from "react";

export default function ToyForm({ onAddToy }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newToy = {
      name,
      image,
      likes: 0,
    };

    fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((savedToy) => {
        onAddToy(savedToy);
      });

    setName("");
    setImage("");
  }

  return (
   <form onSubmit={handleSubmit}>
  <h2>Create New Toy</h2>

  <input
    placeholder="Enter a toy's name..."
    value={name}
    onChange={(e) => setName(e.target.value)}
  />

  <input
    placeholder="Enter a toy's image URL..."
    value={image}
    onChange={(e) => setImage(e.target.value)}
  />

  {/* IMPORTANT: ONLY button has text, NOT duplicated anywhere else */}
  <button type="submit">Add a Toy</button>
</form>
  );
}