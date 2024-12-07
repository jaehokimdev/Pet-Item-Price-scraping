type Props = { title: string; price: string; image: string; address: string };

const Card = (props: Props) => {
  return (
    <a href={props.address} target="_blank" rel="noreferrer">
      <li className="relative mx-5 max-sm:mx-2 inline-block h-[360px] w-[200px] max-sm:h-[250px] max-sm:w-[127px]  border border-gray-300 rounded-2 py-3 px-3 mb-6">
        <div className="whitespace-normal flex flex-col">
          <img
            className="max-h-[10rem] max-sm:max-h-[6.3rem]"
            alt={`${props.image}`}
            src={props.image}
          />
          <p className="text-md max-sm:text-[10px] mt-2">{props.title}</p>
          <p className="mt-3 font-bold max-sm:text-sm">{props.price}</p>
        </div>
      </li>
    </a>
  );
};

export default Card;
