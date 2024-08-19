import { Link } from "@remix-run/react";
import LogoSmiley from "./../../assets/img/logo-smiley.svg";

export default function Header() {
  return (
    <div className="w-full flex md:flex-row flex-col gap-5 justify-between p-4 bg-darkBlue">
      <Link to="/">
        <div className="flex items-center justify-center gap-2 hover:scale-105 ease-in-out duration-200 cursor-pointer">
          <img src={LogoSmiley} alt="happy smiley face" className="w-10 h-10" />
          <h1 className="text-3xl text-purple ">Have I Won Lotto?</h1>
        </div>
      </Link>
      <div className="flex gap-2 md:justify-start justify-center">
        <div className="border-2 border-purple text-darkText rounded-full px-4 py-2 font-medium flex items-center cursor-pointer bg-purple ease-in-out duration-200 hover:scale-105">
          Lotto 6aus49
        </div>
      </div>
    </div>
  );
}
