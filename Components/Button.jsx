export default function Button({ 
    text = "CALL NOW", 
    color = "white", 
    borderColor = "black" 
  }) {
    return (
      <div>
        <button 
        aria-label={text}
          className={`bg-${color} college-block hover:bg-[#EC3C33] hover:text-white border border-${borderColor} hover:border-white transition ease-in duration-150 text-xl rounded-xl mx-auto lg:mx-0 lg:ml-auto py-1 px-4 active:scale-95 text-black`}
        >
          {text}
        </button>
      </div>
    );
  }
  