
import { initialData } from "./seed";
import prisma from '../lib/prisma'

async function main () {

    // 1. Borrar registros previos
    await Promise.all([
        prisma.voluntarios.deleteMany()
    ])


    //2. Crear los voluntarios
    await prisma.voluntarios.createMany({
        data: initialData.voluntarios,
    })


    console.log('seedmejecutado correctamente');
    
}







(() => {
    if(process.env.NODE_ENV === 'production') return;
    main()
})();