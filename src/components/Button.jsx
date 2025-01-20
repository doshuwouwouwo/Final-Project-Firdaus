// eslint-disable-next-line react/prop-types
const Button = ({ text, children }) => {
  return (
    <button className="bg-[#4b7dca] text-white font-size-md py-2 px-4 rounded-full flex flex-row-reverse gap-4 items-center transition ease-in duration-300 hover:outline outline-1 hover:outline-gray-400 hover:bg-transparent ">
      {text}
      {children}
    </button>
  );
};

export default Button;
