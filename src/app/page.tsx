import ParticlesBackground from "@/components/background";
import Footer from "@/components/footer";
import MeshBackground from "@/components/mesh";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-row justify-center bg-gradient-to-tl from-[#120008] via-[#000507] to-[#050008] w-screen">
    <ParticlesBackground />
    <MeshBackground />
    <div className="font-sans text-xs md:text-base sm:text-sm flex flex-col items-center min-h-screen max-w-[1400px] px-6 z-10">
      {/* Navigation */}
      <Navbar />

      <div className="my-3 lg:my-4"></div>

      <pre className="flex font-press tracking-wider text-4xl sm:text-5xl my-6 text-wrap text-center">{`ATATTVA JNANA`}</pre>
      <pre className="flex font-hand tracking-wider text-4xl sm:text-5xl mb-12 text-wrap text-center">{`ZK Workshop IIT Delhi`}</pre>

      {/* Event Info */}
      <div className="flex flex-row gap-6">
        <div className="flex flex-wrap border-2 border-teal-100 px-2 py-2">
          <Image src={"/Atattva_Jnana_Live.gif"} 
          alt={"Atattva Jnana"}
          width={400}
          height={400}></Image>
        </div>
        <Link className="flex flex-row border-2 items-center max-w-[200px] bg-neutral-900 px-6 py-2 
        hover:bg-cyan-950 hover:text-cyan-100 hover:shadow-xl hover:shadow-teal-800 hover:border-cyan-700 focus:shadow-teal-800 focus:border-cyan-700 transition-all duration-200" 
        href="https://lu.ma/2g8xznmg">
            <pre className="font-press text-sm sm:text-2xl text-center text-wrap">{`CHECK\n\nOUT\n\nON\n\nLUMA`}</pre>
            <div className=""/>
        </Link>
      </div>

      <div className="my-3 lg:my-4"></div>
      {intro}

      <div className="my-6 lg:my-10"></div>

      <div className="flex md:flex-row flex-col w-full justify-evenly items-center border-2 px-4 py-4 gap-4">
        <div className="flex flex-col items-center">
          <pre className="flex font-hand tracking-wider text-4xl sm:text-5xl text-wrap text-center">{`SCHEDULE`}</pre>
          <pre className="flex font-hand tracking-wider text-2xl sm:text-3xl mt-4 text-wrap text-center">{`6 hrs per day\n on \nAug 30th & Aug 31st, 2025`}</pre>
          <div className="my-2 lg:my-3"></div>
        </div>
        <div className="md:h-full bg-amber-50 md:w-0.5 w-full h-0.5"/>
        <div className="flex flex-col items-center">
          <pre className="flex font-hand tracking-wider text-4xl sm:text-5xl text-wrap text-center">{`VENUE`}</pre>
          <pre className="flex font-hand tracking-wider text-2xl sm:text-3xl mt-4 text-wrap text-center">{`Indian Institute Of Technology Delhi (IIT Delhi)`}</pre>
          <pre className="flex font-hand tracking-wider text-xl sm:text-2xl mt-4 text-wrap text-center">{`IIT Campus, Hauz Khas, New Delhi, Delhi 110016, India`}</pre>
          <div className="my-3 lg:my-4"></div>
          {/* <iframe src="https://www.google.com/maps/search/?api=1&query=Indian%20Institute%20Of%20Technology%20Delhi%20%28IIT%20Delhi%29&query_place_id=ChIJtV8FufYdDTkRwKMeayYLwYE"></iframe> */}
        </div>
      </div>

      <div className="my-6 lg:my-10"></div>

      {/* Day 1 */}
      <pre className="flex font-hand tracking-wider text-2xl sm:text-3xl my-6 text-wrap text-center">Day 1: Mathematical Foundations of Zero Knowledge</pre>
      <table className="table-auto w-full border-collapse border-2 border-gray-300">
        <thead>
          <tr>
            <th className="border-2 border-gray-300 py-2 px-2">Time</th>
            <th className="border-2 border-gray-300">Topic</th>
            <th className="border-2 border-gray-300">Speaker</th>
            <th className="border-2 border-gray-300">Contents</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 border-gray-300 px-2 text-center">
              <pre className="text-center font-sans">{`3:00 PM\n-\n5:00 PM`}</pre></td>
            <td className="border-2 border-gray-300 px-2 text-center">
              I Have Zero Knowledge About Zero Knowledge? What Does It Mean to Me?</td>
            <td className="border-2 border-gray-300 px-2 text-center">
              Soumya from BlocSoc</td>
            <td className="border-2 border-gray-300 px-2 py-1">
              <ul className="list-disc pl-4">
                <li>General introduction to Zero Knowledge (ZK)</li>
                <li>Mathematical introduction to ZK</li>
                <li>Recap of Linear Algebra</li>
                <li>Set and Group Theory, Abstract Algebra, Homomorphism, ECC (addition, scalar multiplication, bilinear pairings, Field Extensions)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border-2 border-gray-300 px-2 text-center">
              <pre className="text-center font-sans">{`5:45 PM\n-\n7:15 PM`}</pre></td>
            <td className="border-2 border-gray-300 px-2 text-center">
              Introduction to SNARKs and STARKs</td>
            <td className="border-2 border-gray-300 px-2 text-center">
              Muskan from BlocSoc</td>
            <td className="border-2 border-gray-300 px-2 py-2">
              <ul className="list-disc pl-4">
                <li>Groth16, Plonk, FFlonk </li>
                <li>Types of Starks & Stark flow</li>
                <li>Circom → ZKREPL Demo (30min)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border-2 border-gray-300 px-2 text-center">
              <pre className="text-center font-sans">{`7:30 PM\n-\n9:30 PM`}</pre></td>
            <td className="border-2 border-gray-300 px-2 text-center">
              {`SNARKs & Groth16`}</td>
            <td className="border-2 border-gray-300 px-2 text-center">
              Nikhilesh from BlocSoc</td>
            <td className="border-2 border-gray-300 px-2 py-2">
              <ul className="list-disc pl-4">
                <li>Groth16 and its build up</li>
                <li>Quadratic Arithmetic Programs (QAP) and Rank-1 Constraint Systems (R1CS)</li>
                <li>Groth16 theory (full rundown of involved steps)</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="my-3 lg:my-4"></div>

      {/* Day 2 */}
      <pre className="flex font-hand tracking-wider text-2xl sm:text-3xl my-6 text-wrap text-center">{`Day 2: Let's Go Further!`}</pre>
      <table className="table-auto border-collapse border-2 border-gray-300">
        <thead>
          <tr>
            <th className="border-2 border-gray-300 py-2">Time</th>
            <th className="border-2 border-gray-300">Topic</th>
            <th className="border-2 border-gray-300">Speaker</th>
            <th className="border-2 border-gray-300">Contents</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 border-gray-300 px-2 text-center">
              <pre className="text-center font-sans">{`10:00 AM\n-\n12:30 PM`}</pre>
            </td>
            <td className="border-2 border-gray-300 px-2 text-center">STARKs</td>
            <td className="border-2 border-gray-300 px-2 text-center">Reeshabh & Arnav from BlocSoc</td>
            <td className="border-2 border-gray-300 px-2 py-2 text-left">
              <ul className="list-disc pl-4">
                <li>Plonk vs. Groth16</li>
                <li>Arithmetization</li>
                <li>Full Plonk theory rundown</li>
                <li>Plonkathon (hands-on session)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border-2 border-gray-300 px-2 text-center">
              <pre className="text-center font-sans">{`1:15 PM\n-\n3:45 PM`}</pre>
            </td>
            <td className="border-2 border-gray-300 px-2 text-center">STARKs</td>
            <td className="border-2 border-gray-300 px-2 text-center">Reeshabh & Arnav from BlocSoc</td>
            <td className="border-2 border-gray-300 px-2 py-2 text-left">
              <ul className="list-disc pl-4">
                <li>Why STARKs are preferred over SNARKs (post-quantum, no trusted setup, scalability, dynamic circuits)</li>
                <li>Connecting Day 1 math lectures to build the STARK protocol</li>
                <li>Stark101 (hands-on rundown)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border-2 border-gray-300 px-2 py-2 text-center">
              <pre className="text-center font-sans">{`4:15 PM\n-\n6:45 PM`}</pre>
            </td>
            <td className="border-2 border-gray-300 px-2 text-center">How to Build a zkVM?</td>
            <td className="border-2 border-gray-300 px-2 text-center">Aayush</td>
            <td className="border-2 border-gray-300 px-2 py-2 text-left">
              <ul className="list-disc pl-4">
                <li>Exploration of building a zero-knowledge virtual machine (zkVM)</li>
                <li>Guiding participants to theorize a simple zkVM</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

    <div className="my-6 lg:my-10"></div>

    {/* Footer */}
    <Footer />
    </div>
    </div>
  );
}

const intro= <pre className="flex font-hand tracking-wider text-2xl sm:text-3xl my-6 text-wrap text-center"
>{`A 2 day workshop on introductory zero knowledge.`}</pre>