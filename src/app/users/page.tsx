import { getUsers } from "@/actions/getUsers";
import { Back, BtnAcions, Delete, Plus } from "@/components";
import { Edit } from "@/components";
import Link from "next/link";


export default async function ListOfUsers() {

    const users = await getUsers()





    return (
        <>
            <div className="mt-10 flex gap-3">
                <BtnAcions href={'/'}>
                    <Back classes="size-5" />
                    Atrás
                </BtnAcions>
                <BtnAcions href="/create-user">
                    <Plus classes="size-5" />
                    Añadir
                </BtnAcions>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-20">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-sm text-white uppercase bg-cyan-500">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Contacto
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Congregación
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Disponibilidad
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Observaciones
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd:bg-white  even:bg-gray-100 ">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Daniel Castillo
                            </th>
                            <td className="px-6 py-4">
                                555552558
                            </td>
                            <td className="px-6 py-4">
                                Timbabé
                            </td>
                            <td className="px-6 py-4">
                                <select className="bg-cyan-100 px-4 py-2 rounded-full text-cyan-500">
                                    <option value="">Ver Disponibilidad</option>
                                    <option className="bg-white text-gray-800" disabled value="">Martes(T1)</option>
                                    <option className="bg-white text-gray-800" disabled value="">Martes(T1)</option>
                                    <option className="bg-white text-gray-800" disabled value="">Martes(T1)</option>
                                    <option className="bg-white text-gray-800" disabled value="">Martes(T1)</option>
                                </select>
                            </td>
                            <td className="px-6 py-4">
                                <span className="bg-green-100 px-4 py-2 text-green-500 rounded-full font-semibold text-xs">Precursor</span>
                            </td>
                            <td className="px-6 py-4 flex items-center gap-2">
                                <Link
                                    href={'/'}
                                    className="hover:bg-gray-200 transition-colors p-1 rounded-2xl"
                                >
                                    <Edit classes="size-7 text-cyan-500 " />
                                </Link>

                                <button
                                    className="hover:bg-gray-200 transition-colors p-1 rounded-2xl"
                                >
                                    <Delete classes="size-6 text-red-500" />
                                </button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}
