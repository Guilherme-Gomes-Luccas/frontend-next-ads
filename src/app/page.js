import Footer from "../components/Footer"
import Header from "../components/Header";
import Image from 'next/image';
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header isLogged={false}/>
      <main className="p-5">
        <h1 className="text-3xl">Titulo</h1>
        <Image
          src={'/react.png'}
          width={300}
          height={400}
          alt="logo React"
        />
        <p>texto muito texto</p>
        <p>texto muito texto</p>
      </main>
      <div className="pb-2">
        <Link href="/dashboard" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5">Dashboard</Link>
        <Link href="/tickers" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Cards</Link>
      </div>
      <Footer/>
    </>
  )
}