-- CreateTable
CREATE TABLE "storage" (
    "storageId" TEXT NOT NULL PRIMARY KEY,
    "clothesId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "available" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "storage_clothesId_fkey" FOREIGN KEY ("clothesId") REFERENCES "clothes" ("clothesId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "storage_clothesId_key" ON "storage"("clothesId");
