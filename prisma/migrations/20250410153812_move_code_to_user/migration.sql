/*
  Warnings:

  - You are about to drop the column `activa` on the `Licencia` table. All the data in the column will be lost.
  - You are about to drop the column `codigo` on the `Licencia` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[codigo]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `codigo` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Licencia_codigo_key";

-- AlterTable
ALTER TABLE "Licencia" DROP COLUMN "activa",
DROP COLUMN "codigo";

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "activo" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "codigo" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_codigo_key" ON "Usuario"("codigo");
