

interface Voluntarios {
    nombre: string,
    contacto: string,
    disponibilidad: Disponibilidad[],
    congregacion: string,
    observacion: string,
    isPrecursor: boolean,
}

type Disponibilidad = 'martesT1' | 'martesT2' | 'martesT3' | 'martesT4' | 'miercolesT1' | 'miercolesT2' | 'miercolesT3' | 'miercolesT4' | 'juevesT1' | 'juevesT2' | 'juevesT3' | 'juevesT4' | 'viernesT1' | 'viernesT2' | 'viernesT3' | 'viernesT4' | 'sabadoT1' | 'sabadoT2' | 'sabadoT3' | 'sabadoT4' | 'domingoT1' | 'domingoT2' | 'domingoT3' | 'domingoT4'




interface SeedData {
    voluntarios: Voluntarios[]
}


export const initialData: SeedData = {
    voluntarios: [
        {
            nombre: "Daniel",
            contacto: '555552558',
            disponibilidad: [
                'martesT1',
                'martesT2',
                'martesT3',
                'martesT4',
            ],
            congregacion: 'Timbabé',
            observacion: 'Puede llegar tarde debido al trabajo',
            isPrecursor: false
        }
    ]
}