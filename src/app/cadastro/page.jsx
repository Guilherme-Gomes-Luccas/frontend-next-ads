'use client'

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useState } from "react";


export default function Cadastro() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleSubmit = async () => {
    console.log(nome, email, pass)

    const response = await fetch('http://localhost:4000/user', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name: nome, email, pass})
    })

    if (response?.ok) {
      const data = await response.json()
      console.log(data);
    } else {
      const data = await response.json()
      alert(data.error)
    }
  }

  return (
    <>
      <Header isLogged={true}/>
      <main className="p-5">
        <h1 className="text-3xl">Cadastra-se</h1>

        <div className="flex-col gap-1 p-5 w-[300px]">
          <div className="flex justify-between mb-2">
            <label>Nome:</label>
            <input type="text" className="border text-black w-[200px]" value={nome} onChange={event => setNome(event.target.value)}/>
          </div>

          <div className="flex justify-between mb-2">
            <label>Email:</label>
            <input type="text" className="border text-black w-[200px]" value={email} onChange={event => setEmail(event.target.value)}/>
          </div>

          <div className="flex justify-between mb-2">
            <label>Senha:</label>
            <input type="text" className="borde text-black w-[200px]" value={pass} onChange={event => setPass(event.target.value)}/>
          </div>

          <button onClick={(handleSubmit)} className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">Cadastrar</button>
        </div>
      </main>
      <Footer />
    </>
  )
}
