/*
  Warnings:

  - The primary key for the `employees` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `employees` table. All the data in the column will be lost.
  - The required column `employeeId` was added to the `employees` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_employees" (
    "employeeId" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_employees" ("address", "cpf", "createdAt", "email", "name", "phone", "rg", "updatedAt") SELECT "address", "cpf", "createdAt", "email", "name", "phone", "rg", "updatedAt" FROM "employees";
DROP TABLE "employees";
ALTER TABLE "new_employees" RENAME TO "employees";
CREATE UNIQUE INDEX "employees_rg_key" ON "employees"("rg");
CREATE UNIQUE INDEX "employees_cpf_key" ON "employees"("cpf");
CREATE UNIQUE INDEX "employees_email_key" ON "employees"("email");
CREATE UNIQUE INDEX "employees_phone_key" ON "employees"("phone");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
