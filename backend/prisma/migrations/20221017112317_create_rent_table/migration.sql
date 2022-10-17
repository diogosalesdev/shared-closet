-- CreateTable
CREATE TABLE "rents" (
    "rentId" TEXT NOT NULL PRIMARY KEY,
    "clotheId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "withdrawalDate" DATETIME NOT NULL,
    "returnDate" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "rents_clotheId_fkey" FOREIGN KEY ("clotheId") REFERENCES "clothes" ("clothesId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "rents_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "rents_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employees" ("employeeId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "rents_clotheId_key" ON "rents"("clotheId");

-- CreateIndex
CREATE UNIQUE INDEX "rents_clientId_key" ON "rents"("clientId");

-- CreateIndex
CREATE UNIQUE INDEX "rents_employeeId_key" ON "rents"("employeeId");
