import CardTicker from "@/components/CardTicker"
import Footer from "@/components/footer"
import Header from "@/components/Header"

const allStock = [
  {
      bolsa: "NASDAQ", 
      codigo: "AAPL", 
      empresa: "Apple Inc", 
      setor: "Technology Service",
      site: "apple.com",
      valor: 25080,
      variacao: 0.35,
      nAcoes: 40
  },
  {
      bolsa: "NASDAQ", 
      codigo: "MSFT", 
      empresa: "Microsoft Corp", 
      setor: "Technology Service",
      site: "microsoft.com",
      valor: 50234,
      variacao: -1.5,
      nAcoes: 20
  },
  {
      bolsa: "NASDAQ", 
      codigo: "MSFT", 
      empresa: "Meta Platforms Inc", 
      setor: "Technology Service",
      site: "meta.com",
      valor: 43262,
      variacao: 2.3,
      nAcoes: 5
  },
  {
      bolsa: "NASDAQ", 
      codigo: "GOOGL", 
      empresa: "Alphabet Inc Class A",
      setor: "Technology Service", 
      site: "google.com",
      valor: 16615,
      variacao: -0.78,
      nAcoes: 8
  },
  {
      bolsa: "NASDAQ", 
      codigo: "NVDA", 
      empresa: "NVIDIA Copr", 
      setor: "Technology Service",
      site: "nvidia.com",
      valor: 87757,
      variacao: 0.02,
      nAcoes: 13
  }
]

export default function Tickers() {
  return (
    <>
      <Header isLogged={false}/>
      <main className="p-5">
        <h1 className="text-3xl">Tickers</h1>
      </main>
      <div className="flex gap-4 p-2 justify-start flex-wrap">
        <CardTicker props={allStock[0]}/>
        <CardTicker props={allStock[1]}/>
        <CardTicker props={allStock[2]}/>
        <CardTicker props={allStock[3]}/>
      </div>
      <Footer/>
    </>
  )
}