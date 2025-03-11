export default function Button({ 
  text = "CALL NOW", 
  color = "bg-white", 
  textColor = "text-black",
  borderColor = "border-black",
  hoverColor = "hover:bg-[#EC3C33]",
  hoverTextColor = "hover:text-white",
  hoverBorderColor = "hover:border-white"
}) {
  return (
    <div>
      <button 
        aria-label={text}
        className={`transition ease-in college-block duration-150 text-xl rounded-xl mx-auto lg:mx-0 lg:ml-auto py-1 px-4 active:scale-95 ${color} ${textColor} border ${borderColor} ${hoverColor} ${hoverTextColor} ${hoverBorderColor}`}
      >
        {text}
      </button>
    </div>
  );
}
