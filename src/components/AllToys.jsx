import ToyCard from "./ToyCard";

function AllToys({ toys, onDeleteToy, onLikeToy }) {
  return (
    <div id="toy-collection">
      {toys.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          onDeleteToy={onDeleteToy}
          onLikeToy={onLikeToy}
        />
      ))}
    </div>
  );
}

export default AllToys;