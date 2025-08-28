import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <header className="text-base text-wrap flex w-full justify-center border-t-1 border-b-0 border-blue-200 px-2 py-4">
        {/* <Link
        href="/home">
        <Image className="flex flex-row items-cente px-2 py-2
        hover:bg-cyan-950 hover:text-cyan-100 hover:shadow-xl hover:shadow-teal-800 hover:border-cyan-700 transition-all duration-200"
        src="/BlocSoc.png"
        width={60}
        height={60}
        alt="BlocSoc IIT-D"/>
        </Link> */}
        <Link className="flex flex-row items-center px-4 py-2 
        hover:underline transition-all duration-200 
        text-center font-hand text-xl tracking-wider" 
        href="https://x.com/0xblocsoc">
            FOLLOW BLOCSOC ON 
            <div className="px-2"><FaXTwitter /></div>
        </Link>
    </header>
  );
}
