import { Calendar, Cardindex, User, Users } from "@/components";


export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 mt-44">
      <Cardindex classes="border-green-500 hover:bg-green-500 hover:scale-105 transition group" href="/users">
        <User classes="text-white size-24 text-green-500 group-hover:text-white transition-colors" />
        <h2 className="mt-5 text-2xl font-bold text-green-500 group-hover:text-white transition-colors">Lista de voluntarios</h2>
        <p className="text-center text-green-500 text-sm text-pretty mt-2 group-hover:text-white transition-colors">Aquí puedes ver a todos los voluntarios, eliminarlos y editarlos</p>
      </Cardindex>
      <Cardindex classes="border-purple-500 hover:bg-purple-500 hover:scale-105 transition group" href="/create-user">
        <Users classes="text-white size-24 text-purple-500 group-hover:text-white transition-colors" />
        <h2 className="mt-5 text-2xl text-purple-500 font-bold group-hover:text-white transition-colors">Crear nuevos voluntarios</h2>
        <p className="text-center text-purple-500 text-sm text-pretty mt-2 group-hover:text-white transition-colors">Aquí puedes crear varios nuevos voluntarios</p>
      </Cardindex>
      <Cardindex classes="border-cyan-500 hover:bg-cyan-500 hover:scale-105 transition group" href={'/program'}>
        <Calendar classes="text-white size-24 text-cyan-500 group-hover:text-white transition-colors" />
        <h2 className="mt-5 text-2xl text-cyan-500 font-bold group-hover:text-white transition-colors">Crear programa</h2>
        <p className="text-center text-cyan-500 text-sm text-pretty mt-2 group-hover:text-white transition-colors">Aquí puedes crear el programa de voluntarios del PPAM</p>
      </Cardindex>
    </div>
  );
}
