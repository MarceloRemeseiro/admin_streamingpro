/*
  Warnings:

  - A unique constraint covering the columns `[codigo]` on the table `Licencia` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `codigo` to the `Licencia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Licencia" ADD COLUMN     "codigo" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Licencia_codigo_key" ON "Licencia"("codigo");
