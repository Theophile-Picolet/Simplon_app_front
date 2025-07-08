import { useState } from "react";
import { getRandomBlague } from "../services/request";
import "../styles/homePage.css";

interface Blague {
  question: string;
  response: string;
}
export default function HomePage() {
  const [randomBlague, setRandomBlague] = useState<Blague | null>(null);
  const [loading, setLoading] = useState(false);
  const [showResponse, setShowResponse] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const data = await getRandomBlague();
    setRandomBlague(data);
    setShowResponse(false);
    setLoading(false);
  };

  const handleQuestionClick = () => {
    setShowResponse(true);
  };

  return (
    <div className="homepage">
      <button type="button" onClick={handleClick}>
        Afficher une blague
      </button>
      {!loading && randomBlague && (
        <div>
          <button onClick={handleQuestionClick} type="button">
            {randomBlague.question}
          </button>
          <p
            style={{
              visibility: showResponse ? "visible" : "hidden",
              transition: "visibility 0.3s",
              color: "black",
              fontSize: "1.5rem",
              fontWeight: "500",
              maxWidth: "20rem",
              margin: "0rem auto",
            }}
          >
            {randomBlague.response}
          </p>
        </div>
      )}
      {!loading && !randomBlague && (
        <p>Clique sur le bouton pour voir une blague</p>
      )}
    </div>
  );
}
