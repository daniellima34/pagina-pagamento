import { useState } from "react";
import BackCard from "./components/BackCard";
import CardFront from "./components/FrontCard";

export default function App() {
const [nome, setNome] = useState ("");
const [ numero, setNumero] = useState ("");
const [mes, setMes] = useState (0);
const [ano, setAno] = useState (0);
const [cvv, setCvv] = useState (0);
const [senha, setSenha] = useSenha ("");


function Pagar(){
  console.log(nome)
  console.log(numero)
  console.log(mes)
  console.log(ano)
  console.log (cvv)
  console.log(senha)
}

  return (
    <div className="w-full h-screen flex">
      <div className="w-[40%] relative h-full bg-[#271540]">

        <div className="absolute top-10 left-40">
          <CardFront />
        </div>

        <div className="absolute top-60 left-105">
          <BackCard />
        </div>
      </div>
      <div className="w-[60%] h-full items-end flex justify-end p-[40px]">

        <h1 className="text-[45px] w-[70%] h-[150px] font-bold">preencha os campos para concluir o pagamento</h1>
      </div>
      <div className="w-[65%] h-auto min-h-200px flex-col gap-4"></div>

      <div className="w-full flex flex-col">
        <label htmlFor="nome"
          className="text-[20px]">Nome Do Cartão</label>
        <input type="text"
          className="w-full h-[40px] rounded-md bg-amber-200" />
      </div>

      <div className="w-full flex flex-col">
        <label htmlFor="numero"
          className="text-[20px] ">numero do Cartão</label>
        <input
        onChange={(event)=>setNumero (event.target.value)}
        type="text"
          className=" w-full h-[40px] rounded-md bg-amber-200" name="" id="" />
      </div>

      <div className="flex">
        <div className="w-[70%] flex flex-col">
          <label htmlFor=""
            className="tex-[20px]"> Data de Expiração</label>
        </div>
        <div className="w-full flex gap-2">
          <input
          onChange={(event)=>setDatadeexpiração (event.target.value)}
          type="number"
            placeholder="MM"
            className="w-[40px] pl-2 rounded-md bg-amber-200" />
          <input 
          
          type="number"
            placeholder="AA"
            className="w-[40px] pl-2 rounded-md bg-amber-200" />

        </div>

        <div className="w-[30px] pl-2 flex flex-col">
          <label htmlFor=""
            className="text-[20px]">CW</label>
        <input type="nambver"
            className="w-full h-[40px] pl-2 rounded-md bg-amber-200" />
        </div>

      </div>

      <div className="w-full flex flex-col">
        <label htmlFor="" 
        className="text-[20px]">senha do cartão</label>
        <input type="password"
          className=" w-full h-[40px] rounded-md bg-amber-200 " />
      </div>
      <div>
        <button 
        onClick={Pagar} className="w-full h-[50px] rounded-md bg-black text-white">Pagar</button>
      </div>
    </div>

  )
}