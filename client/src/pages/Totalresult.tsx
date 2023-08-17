import dummy from "../dummy/dummyapi";
import Card from "./Card";

type InfoType = {
  title: string;
  price: string;
  image: string;
  address: string;
};

const Totalresult = () => {
  return (
    <div className="flex flex-col px-[12%] max-sm:px-[5%] gap-4">
      <div className="border-4 border-gray-200 rounded-2 pt-3 pb-5 px-3 mt-10">
        <span className="font-bold text-xl">PetSmart</span>
        <div className="mt-5 h-[360px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {dummy.map((info: InfoType) => (
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
        <span className="font-bold text-xl">PetValue</span>
        <div className="mt-5 h-[360px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {dummy.map((info: InfoType) => (
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
        <span className="font-bold text-xl">PetWalmart</span>
        <div className="mt-5 h-[360px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {dummy.map((info: InfoType) => (
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
        <span className="font-bold text-xl">CanadianTire</span>
        <div className="mt-5 h-[360px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {dummy.map((info: InfoType) => (
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
