import React from "react";

type Props = {};

const Petsmart = (props: Props) => {
  return (
    <div className="flex flex-col px-[12%] max-sm:px-[5%] gap-4">
      <div className="border-4 border-gray-200 rounded-2 pt-3 pb-5 px-3 mt-10">
        <span className="font-bold text-xl">PetSmart</span>
      </div>
    </div>
  );
};

export default Petsmart;
