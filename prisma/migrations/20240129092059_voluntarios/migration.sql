-- CreateEnum
CREATE TYPE "Disponibilidad" AS ENUM ('martesT1', 'martesT2', 'martesT3', 'martesT4', 'miercolesT1', 'miercolesT2', 'miercolesT3', 'miercolesT4', 'juevesT1', 'juevesT2', 'juevesT3', 'juevesT4', 'viernesT1', 'viernesT2', 'viernesT3', 'viernesT4', 'sabadoT1', 'sabadoT2', 'sabadoT3', 'sabadoT4', 'domingoT1', 'domingoT2', 'domingoT3', 'domingoT4');

-- CreateTable
CREATE TABLE "Voluntarios" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,
    "disponibilidad" "Disponibilidad"[],
    "congregacion" TEXT NOT NULL,
    "observacion" TEXT NOT NULL,
    "precursor" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Voluntarios_pkey" PRIMARY KEY ("id")
);
