import React from 'react';

const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

export default function CardTicker({props}) {
    return (
        <div className="p-12 w-[430px] h-fit bg-[#351801] text-white border-4 border-black rounded-2xl relative">
            <header className="flex justify-between">
                <h2 className="m-0 text-base"><span className="font-normal">{props.bolsa}</span> {props.codigo}</h2>
                <h1 className="m-0 text-sm font-medium">{props.empresa}</h1>
            </header>
            <main>
                <p className="text-3xl font-medium">{+props.valor/100}</p>
                <span className="pt-1 pr-4 mr-8 rounded-2xl text-sm font-bold">{props.variacao < 0 ? '▼': '▲'} <span className={props.variacao < 0 ? 'text-red-500' : 'text-green-500'}>{props.variacao}</span></span>
                <span className="pt-1 pr-4 mr-8 rounded-2xl text-sm font-bold text-blue-500">{formatCurrency((props.valor/100)*(props.variacao/100))}</span>
            </main>
            <footer className="flex justify-between mt-2">
                <div>
                    <p className="text-lg">AÇÕES: <span className="font-bold text-blue-500">{props.nAcoes}</span></p>
                </div>
                <div>
                    <p className="text-lg">POSIÇÃO: <span className="font-bold text-blue-500">{formatCurrency(props.nAcoes *(props.valor/100))}</span></p>
                </div>
            </footer>
        </div>
    )
}