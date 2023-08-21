type Props = {};

const Main = (props: Props) => {
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
          <form className="max-w-xl flex flex-col justify-center items-center">
            <input
              className="sm:w-[40rem] w-72 flex border border-gray-300 rounded-full py-3 px-4 shadow-md shadow-gray-300 mb-7"
              type="text"
              placeholder="ex) arm and hammer"
            />
            <button
              onClick={() => {}}
              className="border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300 w-24"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;
