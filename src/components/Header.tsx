import Image from "next/image";
import corgi from "../../public/corgisurf.png";

export default function Header() {
  return (
    <header className="flex flex-col w-full mt-5 border-b-2 pb-7 sm:px-4 px-2 justify-center items-center">
      <Image
        src={corgi}
        width="300"
        height="300"
        className="w-20 h-20 rounded-full shadow-lg shadow-neonblue-300"
        alt="corgi surfing"
      />
      <h1 className="sm:text-5xl font-bold ml-2 text-white ">Scott Guidotti&apos;s Website</h1>
    </header>
  );
}
