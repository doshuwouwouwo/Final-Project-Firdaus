// eslint-disable-next-line react/prop-types
const Button = ({ text }) => {
  return (
    <button className="bg-blue-500 hover:bg-black text-white font-size-md py-2 px-4 rounded-full">
      {text}
    </button>
  );
}; 

export default Button;