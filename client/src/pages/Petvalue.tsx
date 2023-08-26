import Card from "./Card";
import petvaluelogo from "../img/petvalue-logo.svg";
import { useContext } from "react";
import UserContext from "../KeyContext";

type InfoType = {
  title: string;
  price: string;
  image: string;
  address: string;
};

const Petvalue = () => {
  const { petValuInfo }: any = useContext(UserContext);

  return (
    <div className="flex flex-col px-[12%] max-sm:px-[5%] gap-4">
      <div className="border-4 border-gray-200 rounded-2 pt-3 pb-5 px-3 mt-10">
        <div className="flex gap-4">
          <img className="h-8 bg-black" src={petvaluelogo} alt="petvaluelogo" />
          <span className="font-bold text-xl">PetValue</span>
        </div>
        <div className="mt-6">
          {petValuInfo.map((info: InfoType) => (
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

export default Petvalue;
