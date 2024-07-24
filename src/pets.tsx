import { usePetsList } from "./petstore";

export const PetsPage = () => {
  const petsQuery = usePetsList();
  return (
    <ul>
      {petsQuery.data?.data.map((pet) => <li key={pet.name}>{pet.name}</li>)}
    </ul>
  );
};
