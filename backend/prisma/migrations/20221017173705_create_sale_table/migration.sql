-- CreateTable
CREATE TABLE "sales" (
    "saleId" TEXT NOT NULL PRIMARY KEY,
    "clotheId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "sales_clotheId_fkey" FOREIGN KEY ("clotheId") REFERENCES "clothes" ("clothesId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "sales_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "sales_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employees" ("employeeId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "sales_clotheId_key" ON "sales"("clotheId");

-- CreateIndex
CREATE UNIQUE INDEX "sales_clientId_key" ON "sales"("clientId");

-- CreateIndex
CREATE UNIQUE INDEX "sales_employeeId_key" ON "sales"("employeeId");
