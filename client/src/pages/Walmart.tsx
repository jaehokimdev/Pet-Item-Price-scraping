import Card from "./Card";
import walmartlogo from "../img/walmart-logo.png";
import { useContext } from "react";
import UserContext from "../KeyContext";

type InfoType = {
  title: string;
  price: string;
  image: string;
  address: string;
};

const Walmart = () => {
  const { walmartInfo }: any = useContext(UserContext);

  return (
    <div className="flex flex-col px-[12%] max-sm:px-[5%] gap-4">
      <div className="border-4 border-gray-200 rounded-2 pt-3 pb-5 px-3 mt-10">
        <div className="flex gap-4">
          <img className="h-7 " src={walmartlogo} alt="walmartlogo" />
          <span className="font-bold text-xl">Walmart</span>
        </div>
        <div className="mt-6">
          {walmartInfo?.length === 0 && (
            <div className="flex items-center justify-center py-[10%] max-sm:py-[20%]">
              <span className="text-3xl font-bold">No items</span>
            </div>
          )}
          {walmartInfo.map((info: InfoType) => (
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

export default Walmart;
