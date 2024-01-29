/*
  Warnings:

  - You are about to drop the column `precursor` on the `Voluntarios` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Voluntarios" DROP COLUMN "precursor",
ADD COLUMN     "isPrecursor" BOOLEAN NOT NULL DEFAULT false;
