import { useState } from "react";
import { getRandomBlague } from "../services/request";

export default function HomePage() {
  const [randomBlague, setRandomBlague] = useState(null);
  const [loading, setLoading] = useState(false);
  console.info(randomBlague);

  const handleClick = async () => {
    setLoading(true);
    const data = await getRandomBlague();
    setRandomBlague(data);
    setLoading(false);
  };

  return (
    <>
      <h1>Homepage</h1>
      <button type="button" onClick={handleClick}>
        Afficher une blague
      </button>
      <p>
        {loading
          ? "Chargement..."
          : randomBlague
            ? JSON.stringify(randomBlague)
            : "Clique sur le bouton pour voir une blague"}
      </p>
    </>
  );
}
