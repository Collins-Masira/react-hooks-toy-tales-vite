import { useEffect, useState } from "react";
import ToyForm from "./ToyForm";
import AllToys from "./AllToys";

function App() {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  function addToy(newToy) {
    setToys((prev) => [...prev, newToy]);
  }

  function deleteToy(id) {
    fetch(`http://localhost:3000/toys/${id}`, {
      method: "DELETE",
    }).then(() => {
      setToys((prev) => prev.filter((toy) => toy.id !== id));
    });
  }

  function likeToy(id, updatedLikes) {
    fetch(`http://localhost:3000/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: updatedLikes }),
    })
      .then((res) => res.json())
      .then((updatedToy) => {
        setToys((prev) =>
          prev.map((t) => (t.id === updatedToy.id ? updatedToy : t))
        );
      });
  }

  return (
    <div>
      <ToyForm onAddToy={addToy} />
      <AllToys
        toys={toys}
        onDeleteToy={deleteToy}
        onLikeToy={likeToy}
      />
    </div>
  );
}

export default App;