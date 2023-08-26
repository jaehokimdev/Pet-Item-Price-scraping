import dummy from "../dummy/petvaluedummy";
import Card from "./Card";
import petsmartlogo from "../img/petsmart-logo.png";
import { useContext } from "react";
import UserContext from "../KeyContext";

type InfoType = {
  title: string;
  price: string;
  image: string;
  address: string;
};

const Petsmart = () => {
  const { petsmartInfo }: any = useContext(UserContext);

  return (
    <div className="flex flex-col px-[12%] max-sm:px-[5%] gap-4">
      <div className="border-4 border-gray-200 rounded-2 pt-3 pb-5 px-3 mt-10">
        <div className="flex gap-4">
          <img className="h-6" src={petsmartlogo} alt="petsmartlogo" />
          <span className="font-bold text-xl">PetSmart</span>
        </div>
        <div className="mt-6">
          {petsmartInfo.map((info: InfoType) => (
            <Card
              title={info.title}
              price={info.price}
              image={info.image}
              address={info.address}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Petsmart;
