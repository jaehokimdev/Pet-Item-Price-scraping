import Card from "./Card";
import petsmartlogo from "../img/petsmart-logo.png";
import petvaluelogo from "../img/petvalue-logo.svg";
import walmartlogo from "../img/walmart-logo.png";
import canadiantirelogo from "../img/canadiantire-logo.svg";
import { useContext, useEffect, useState } from "react";
import UserContext from "../KeyContext";
import { Audio } from "react-loader-spinner";
import { useParams } from "react-router-dom";

type InfoType = {
  title: string;
  price: string;
  image: string;
  address: string;
};

const Totalresult = () => {
  const [petSmartInfo, setPetSmartInfo] = useState<InfoType[] | undefined>();
  const [petValueInfo, setPetValueInfo] = useState<InfoType[] | undefined>();
  const [walmartInfo, setWalmartInfo] = useState<InfoType[] | undefined>();
  const [canadiantireInfo, setCanadiantireInfo] = useState<
    InfoType[] | undefined
  >();
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

    fetch("http://localhost:8001/petvalue", {
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
        if (items.length !== 0) {
          setPetValueInfo(items);
        }
      });
    });
    fetch("http://localhost:8001/walmart", {
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
        if (items.length !== 0) {
          setWalmartInfo(items);
        }
      });
    });

    fetch("http://localhost:8001/canadiantire", {
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
        if (items.length !== 0) {
          setCanadiantireInfo(items);
        }
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
          {petSmartInfo?.length === 0 ? (
            <div className="flex items-center justify-center py-[15%] max-sm:py-[20%]">
              <span className="text-3xl font-bold">No items</span>
            </div>
          ) : (
            <ul className="w-[200px] whitespace-nowrap">
              {petSmartInfo?.map((info: InfoType) => (
                <Card
                  key={info.address}
                  title={info.title}
                  price={info.price}
                  image={info.image}
                  address={info.address}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="border-4 border-gray-300 rounded-2 pt-3 pb-5 px-3 mt-10">
        <div className="flex gap-4">
          <img className="h-8 bg-black" src={petvaluelogo} alt="petvaluelogo" />
          <span className="font-bold text-xl">PetValue</span>
        </div>
        <div className="mt-5 h-[380px] max-sm:h-[260px] w-full overflow-x-auto overflow-y-hidden">
          {petValueInfo === undefined && (
            <div className="flex items-center justify-center py-[12%] max-sm:py-[20%]">
              <Audio height="80" width="80" color="green" ariaLabel="loading" />
            </div>
          )}
          {petValueInfo?.length === 0 ? (
            <div className="flex items-center justify-center py-[15%] max-sm:py-[20%]">
              <span className="text-3xl font-bold">No items</span>
            </div>
          ) : (
            <ul className="w-[2800px] whitespace-nowrap">
              {petValueInfo?.map((info: InfoType) => (
                <Card
                  key={info.address}
                  title={info.title}
                  price={info.price}
                  image={info.image}
                  address={info.address}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="border-4 border-gray-300 rounded-2 pt-3 pb-5 px-3 mt-10">
        <div className="flex gap-4">
          <img className="h-7 " src={walmartlogo} alt="walmartlogo" />
          <span className="font-bold text-xl">Walmart</span>
        </div>
        <div className="mt-5 h-[380px] max-sm:h-[260px] w-full overflow-x-auto overflow-y-hidden">
          {walmartInfo === undefined && (
            <div className="flex items-center justify-center py-[12%] max-sm:py-[20%]">
              <Audio height="80" width="80" color="green" ariaLabel="loading" />
            </div>
          )}
          {walmartInfo?.length === 0 ? (
            <div className="flex items-center justify-center py-[15%] max-sm:py-[20%]">
              <span className="text-3xl font-bold">No items</span>
            </div>
          ) : (
            <ul className="w-[200px] whitespace-nowrap">
              {walmartInfo?.map((info: InfoType) => (
                <Card
                  key={info.address}
                  title={info.title}
                  price={info.price}
                  image={info.image}
                  address={info.address}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="border-4 border-gray-300 rounded-2 pt-3 pb-5 px-3 mt-10">
        <div className="flex gap-4">
          <img className="h-7 " src={canadiantirelogo} alt="canadiantirelogo" />
          <span className="font-bold text-xl">CanadianTire</span>
        </div>
        <div className="mt-5 h-[380px] max-sm:h-[260px] w-full overflow-x-auto overflow-y-hidden">
          {canadiantireInfo === undefined && (
            <div className="flex items-center justify-center py-[12%] max-sm:py-[20%]">
              <Audio height="80" width="80" color="green" ariaLabel="loading" />
            </div>
          )}
          {canadiantireInfo?.length === 0 ? (
            <div className="flex items-center justify-center py-[15%] max-sm:py-[20%]">
              <span className="text-3xl font-bold">No items</span>
            </div>
          ) : (
            <ul className="w-[200px] whitespace-nowrap">
              {canadiantireInfo?.map((info: InfoType) => (
                <Card
                  key={info.address}
                  title={info.title}
                  price={info.price}
                  image={info.image}
                  address={info.address}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Totalresult;
