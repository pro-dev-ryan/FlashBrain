import { useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "./Card";
import Self from "./Self";

const Home = () => {
  const cardData = useLoaderData();
  const cards = cardData.data;

  return (
    <div>
      <div className="lg:w-[90%] mt-10">
        <Self />
      </div>
      <div className="cardDiv grid lg:grid-cols-4 md:grid-cols-2 mx-auto lg:my-20">
        {cards.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
