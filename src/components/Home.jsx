import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import Self from "./Self";

const Home = () => {
  const cardData = useLoaderData();
  const cards = cardData.data;

  return (
    <div className="grid grid-cols-4">
      <div className="selfInfo grid col-span-1">
        <Self />
      </div>
      <div className="cardDiv grid grid-cols-2 col-span-3 mx-auto my-3em gap-0">
        {cards.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
