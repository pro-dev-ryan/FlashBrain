import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Home = () => {
  const cardData = useLoaderData();
  const cards = cardData.data;
  return (
    <div>
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
};

export default Home;
