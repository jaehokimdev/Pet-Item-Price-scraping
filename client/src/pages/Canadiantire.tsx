import dummy from "../dummy/dummyapi";
import Card from "./Card";
import canadiantirelogo from "../img/canadiantire-logo.svg";

type InfoType = {
  title: string;
  price: string;
  image: string;
  address: string;
};

const Canadiantire = () => {
  return (
    <div className="flex flex-col px-[12%] max-sm:px-[5%] gap-4">
      <div className="border-4 border-gray-200 rounded-2 pt-3 pb-5 px-3 mt-10">
        <div className="flex gap-4">
          <img className="h-7 " src={canadiantirelogo} alt="canadiantirelogo" />
          <span className="font-bold text-xl">CanadianTire</span>
        </div>{" "}
        <div className="mt-6">
          {dummy.map((info: InfoType) => (
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

export default Canadiantire;
