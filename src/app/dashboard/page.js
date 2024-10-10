import Footer from "@/components/footer"
import Header from "@/components/Header"

export default function Dashboard() {

  const user = {
    nome: "Renan",
    idade: 40
  }

  return (
    <>
      <Header isLogged={true} user={user}/>
      <main className="p-5">
        <h1 className="text-3xl">Dashboard</h1>
        <p>texto muito texto</p>
        <p>texto muito texto</p>
      </main>
      <Footer/>
    </>
  )
}