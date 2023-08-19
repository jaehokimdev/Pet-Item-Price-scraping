import { useState } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";

type Props = {};

const Header = (props: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <div>
      <header className="flex justify-between p-3">
        <a href="/" className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="sm:w-6 sm:h-6 w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <span className="font-bold lg:text-xl max-sm:hidden">
            FindPetItems
          </span>
          <span className="font-bold lg:hidden max-sm:text-xl">FPI</span>
        </a>
        <div>
          <input
            className="w-[40rem] max-sm:w-64 flex border border-gray-300 rounded-full sm:py-3 sm:px-4 py-1 px-2 shadow-md shadow-gray-300"
            type="text"
            placeholder="ex) arm and hammer"
          />
        </div>
        <div className="flex">
          <button
            className="bg-primay p-1 rounded-full"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        {isMenuToggled && (
          <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] max-sm:w-[200px] backdrop-blur-sm	bg-gradient-to-r from-gray-100  to-white drop-shadow-xl">
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-6 text-gray-400" />
              </button>
            </div>
            <div className="ml-[20%] flex flex-col gap-10 text-2xl max-sm:text-xl">
              <Link
                to={"/search/totalresult"}
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                className="font-bold hover:text-gray-300"
              >
                All
              </Link>
              <Link
                to={"/search/petsmart"}
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                className="font-bold hover:text-gray-300"
              >
                Petsmart
              </Link>
              <Link
                to={"/search/petvalue"}
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                className="font-bold hover:text-gray-300"
              >
                PetValue
              </Link>
              <Link
                to={"/search/walmart"}
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                className="font-bold hover:text-gray-300"
              >
                Walmart
              </Link>
              <Link
                to={"/search/canadiantire"}
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                className="font-bold hover:text-gray-300"
              >
                Canadiantire
              </Link>
            </div>
          </div>
        )}
      </header>
      <hr className="border-gray-200 border-1" />
    </div>
  );
};

export default Header;
