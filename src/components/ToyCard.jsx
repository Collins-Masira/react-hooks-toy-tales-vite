import { useState } from "react";

export default function ToyCard({ toy, onLikeToy, onDeleteToy }) {
  const [likes, setLikes] = useState(toy.likes);

  function handleLike() {
    const updatedLikes = likes + 1;
    setLikes(updatedLikes);
    onLikeToy(toy, updatedLikes);
  }

  return (
    <div data-testid="toy-card">
      <h2>{toy.name}</h2>

      <img src={toy.image} alt={toy.name} width="200" />

      {/* IMPORTANT SPACE FIX */}
      <p>{likes} Likes </p>

      <button onClick={handleLike}>Like &lt;3</button>

      <button onClick={() => onDeleteToy(toy.id)}>
        Donate to GoodWill
      </button>
    </div>
  );
}