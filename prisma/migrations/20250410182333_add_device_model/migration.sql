-- CreateTable
CREATE TABLE "Device" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "ipPublica" TEXT NOT NULL,
    "registrado" BOOLEAN NOT NULL DEFAULT false,
    "usuarioId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
