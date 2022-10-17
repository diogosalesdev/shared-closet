/*
  Warnings:

  - Added the required column `rentPrice` to the `clothes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salePrice` to the `clothes` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_clothes" (
    "clothesId" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "rentPrice" REAL NOT NULL,
    "salePrice" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "clothes_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories" ("categoryId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_clothes" ("categoryId", "clothesId", "color", "createdAt", "name", "size", "updatedAt") SELECT "categoryId", "clothesId", "color", "createdAt", "name", "size", "updatedAt" FROM "clothes";
DROP TABLE "clothes";
ALTER TABLE "new_clothes" RENAME TO "clothes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
