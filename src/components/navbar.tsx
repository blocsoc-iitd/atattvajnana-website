import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="text-base text-wrap flex w-full justify-between border-b-1 border-t-0 border-blue-200 px-2 py-4">
        <Link
        href="https://blocsoc.in">
        <Image className="flex flex-row border-2 border-teal-100 items-cente px-2 py-2
        hover:bg-cyan-950 hover:text-cyan-100 hover:shadow-xl hover:shadow-teal-800 hover:border-cyan-700 transition-all duration-200"
        src="/BlocSoc.png"
        width={60}
        height={60}
        alt="BlocSoc IIT-D"/>
        </Link>
        <Link className="flex flex-row border-2 items-center bg-neutral-900 px-4 py-2 
        hover:bg-cyan-950 hover:text-cyan-100 hover:shadow-xl hover:shadow-teal-800 hover:border-cyan-700 transition-all duration-200 
        text-center font-hand text-xl tracking-wider" 
        href="https://lu.ma/2g8xznmg">
            REGISTER ON LUMA
            <div className=""/>
        </Link>
    </header>
  );
}
