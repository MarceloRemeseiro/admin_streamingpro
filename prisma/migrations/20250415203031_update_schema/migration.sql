-- CreateTable
CREATE TABLE "Dispositivo" (
    "id" TEXT NOT NULL,
    "dispositivoId" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "inputSrt" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "ultimaConexion" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dispositivo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Dispositivo_dispositivoId_key" ON "Dispositivo"("dispositivoId");
