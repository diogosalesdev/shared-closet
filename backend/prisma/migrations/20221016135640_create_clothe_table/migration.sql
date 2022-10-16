-- CreateTable
CREATE TABLE "clothes" (
    "clothesId" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "clothes_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories" ("categoryId") ON DELETE RESTRICT ON UPDATE CASCADE
);
