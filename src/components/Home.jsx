import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Home = () => {
  const cardData = useLoaderData();
  const cards = cardData.data;
  return (
    <div className="cardDiv grid grid-cols-2 mx-auto my-3em gap-0">
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
};

export default Home;
