import Footer from "@/components/footer"
import Header from "@/components/Header"
import Image from 'next/image'
import Link from "next/link"

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
      <Link href="/dashboard">Dashboard</Link>
      <Footer/>
    </>
  )
}