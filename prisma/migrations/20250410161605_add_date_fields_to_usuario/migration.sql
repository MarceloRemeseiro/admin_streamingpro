/*
  Warnings:

  - The primary key for the `Config` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `fechaFin` on the `Licencia` table. All the data in the column will be lost.
  - You are about to drop the column `fechaInicio` on the `Licencia` table. All the data in the column will be lost.
  - Added the required column `fechaFin` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechaInicio` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Config" DROP CONSTRAINT "Config_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Config_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Config_id_seq";

-- AlterTable
ALTER TABLE "Licencia" DROP COLUMN "fechaFin",
DROP COLUMN "fechaInicio";

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "fechaFin" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "fechaInicio" TIMESTAMP(3) NOT NULL;
