import Medal from "./../../assets/img/medal.png";

export default function Hero() {
  return (
    <div className="flex flex-col w-full px-4  items-center justify-center mt-10 gap-5">
      <img
        src={Medal}
        alt="Icon of a Gold Medal"
        className="w-32 md:w-40 h-auto"
      />
      <h2 className="text-4xl text-center mb-4">
        Lets check your lucky numbers
      </h2>
      <div className="w-full flex justify-center md:flex-row flex-col gap-2 md:gap-0">
        <input
          type="text"
          className="bg-transparent border-2 border-purple rounded-full py-3 px-6 md:w-1/2 w-full text-xl focus:outline-none focus:ring-0"
          placeholder="Type your lotto numbers"
        />
        <button
          className="ml-2 rounded-full bg-purple text-darkText
        ] px-4 py-2  ease-in-out duration-200 hover:scale-105"
        >
          Check 🤑
        </button>
      </div>
    </div>
  );
}
