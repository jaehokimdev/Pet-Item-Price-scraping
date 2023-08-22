import smartdummy from "../dummy/petsmartdummy";
import valuedummy from "../dummy/petvaluedummy";
import walmartdummy from "../dummy/walmartdummy";
import canadinatiredummy from "../dummy/canadiantiredummy";
import Card from "./Card";
import petsmartlogo from "../img/petsmart-logo.png";
import petvaluelogo from "../img/petvalue-logo.svg";
import walmartlogo from "../img/walmart-logo.png";
import canadiantirelogo from "../img/canadiantire-logo.svg";
import { useContext, useEffect, useState } from "react";
import UserContext from "../KeyContext";
import { Audio } from "react-loader-spinner";

type InfoType = {
  title: string;
  price: string;
  image: string;
  address: string;
};

const Totalresult = () => {
  const [petSmartInfo, setPetSmartInfo] = useState<InfoType[] | undefined>();
  const { keyInfo }: any = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:8001/petsmart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        keyInfo,
      }),
    }).then((response) => {
      response.json().then((items) => {
        setPetSmartInfo(items);
      });
    });
  }, []);

  return (
    <div className="flex flex-col px-[12%] max-sm:px-[5%] gap-4">
      <div className="border-4 border-gray-200 rounded-2 pt-3 pb-5 px-3 mt-10">
        <div className="flex gap-4">
          <img className="h-6" src={petsmartlogo} alt="petsmartlogo" />
          <span className="font-bold text-xl">PetSmart</span>
        </div>
        <div className="mt-5 h-[380px] max-sm:h-[260px] w-full overflow-x-auto overflow-y-hidden">
          {petSmartInfo === undefined && (
            <div className="flex items-center justify-center py-[12%] max-sm:py-[20%]">
              <Audio height="80" width="80" color="green" ariaLabel="loading" />
            </div>
          )}
          <ul className="w-[2800px] whitespace-nowrap">
            {petSmartInfo?.map((info: InfoType) => (
              <Card
                title={info.title}
                price={info.price}
                image={info.image}
                address={info.address}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className="border-4 border-gray-300 rounded-2 pt-3 pb-5 px-3 mt-10">
        <div className="flex gap-4">
          <img className="h-8 bg-black" src={petvaluelogo} alt="petvaluelogo" />
          <span className="font-bold text-xl">PetValue</span>
        </div>
        <div className="mt-5 h-[380px] max-sm:h-[260px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {valuedummy.map((info: InfoType) => (
              <Card
                title={info.title}
                price={info.price}
                image={info.image}
                address={info.address}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className="border-4 border-gray-300 rounded-2 pt-3 pb-5 px-3 mt-10">
        <div className="flex gap-4">
          <img className="h-7 " src={walmartlogo} alt="walmartlogo" />
          <span className="font-bold text-xl">Walmart</span>
        </div>
        <div className="mt-5 h-[380px] max-sm:h-[260px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {walmartdummy.map((info: InfoType) => (
              <Card
                title={info.title}
                price={info.price}
                image={info.image}
                address={info.address}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className="border-4 border-gray-300 rounded-2 pt-3 pb-5 px-3 mt-10">
        <div className="flex gap-4">
          <img className="h-7 " src={canadiantirelogo} alt="canadiantirelogo" />
          <span className="font-bold text-xl">CanadianTire</span>
        </div>
        <div className="mt-5 h-[380px] max-sm:h-[260px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {canadinatiredummy.map((info: InfoType) => (
              <Card
                title={info.title}
                price={info.price}
                image={info.image}
                address={info.address}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Totalresult;
