type Props = { title: string; price: string; image: string; address: string };

const Card = (props: Props) => {
  return (
    <a href={props.address}>
      <li className="relative mx-5 inline-block h-[360px] w-[200px] border border-gray-300 rounded-2 py-3 px-3">
        <div className="whitespace-normal flex flex-col">
          <img alt={`${props.image}`} src={props.image} />
          <p className="text-md mt-2">{props.title}</p>
          <p className="mt-3 font-bold">{props.price}</p>
        </div>
      </li>
    </a>
  );
};

export default Card;
