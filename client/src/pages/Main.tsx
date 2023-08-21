import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const Main = (props: Props) => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState<string>("");
  const [inputvalue, setInputValue] = useState<boolean>(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const checkInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (keyword === "") {
      setInputValue(true);
    } else {
      navigate(`/search/all/${keyword}`);
    }
  };

  return (
    <div className="p-4 flex flex-col min-h-screen">
      <div className="mt-10 grow flex items-center justify-around">
        <div className="mb-64">
          <div className="sm:text-6xl text-4xl flex justify-center mb-10 gap-2 my-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <span className="font-bold">FindPetItems</span>
          </div>
          <form
            className="max-w-xl flex flex-col justify-center items-center"
            onSubmit={checkInput}
          >
            <input
              className="sm:w-[40rem] w-72 flex border border-gray-300 rounded-full py-3 px-4 shadow-md shadow-gray-300 mb-7"
              type="text"
              placeholder="ex) arm and hammer"
              value={keyword}
              onChange={handleOnChange}
            />
            <button
              type="submit"
              className="border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300 w-24"
            >
              Search
            </button>
            {inputvalue && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-5"
                role="alert"
              >
                <strong className="font-bold">Wrong Keyword!!</strong>
                <span className="block sm:inline"> Please input keyword</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg
                    className="fill-current h-6 w-6 text-red-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  ></svg>
                </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;
