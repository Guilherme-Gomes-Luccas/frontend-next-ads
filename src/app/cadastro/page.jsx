'use client'

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useState } from "react";


export default function Cadastro() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setPass] = useState('')

  const handleSubmit = async () => {
    console.log(nome, email, senha)

    const response = await fetch('http://localhost:4000/user', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name: nome, email, senha})
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
          <label>Nome:</label>
          <input type="text" className="border" value={nome} onChange={event => setNome(event.target.value)}/>

          <label>Email:</label>
          <input type="text" className="border" value={email} onChange={event => setEmail(event.target.value)}/>

          <label>Senha:</label>
          <input type="text" className="border" value={senha} onChange={event => setPass(event.target.value)}/>

          <button onClick={(handleSubmit)} className="border bg-slate-300 rounded">Cadastrar</button>
        </div>
      </main>
      <Footer />
    </>
  )
}
