-- CreateTable
CREATE TABLE "RestaurantMenuItems" (
    "restaurantMenuItemId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "RestaurantMenus" (
    "restaurantMenuId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "restaurantMenuItemId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "RestaurantMenus_restaurantMenuItemId_fkey" FOREIGN KEY ("restaurantMenuItemId") REFERENCES "RestaurantMenuItems" ("restaurantMenuItemId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Restaurants" (
    "restaurantId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "menu" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "restaurantMenusRestaurantMenuId" INTEGER,
    CONSTRAINT "Restaurants_restaurantMenusRestaurantMenuId_fkey" FOREIGN KEY ("restaurantMenusRestaurantMenuId") REFERENCES "RestaurantMenus" ("restaurantMenuId") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Deliveries" (
    "deliveryId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Orders" (
    "orderId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "restaurantId" INTEGER NOT NULL,
    "deliveryId" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Orders_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurants" ("restaurantId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Orders_deliveryId_fkey" FOREIGN KEY ("deliveryId") REFERENCES "Deliveries" ("deliveryId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Payments" (
    "paymentId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL,
    CONSTRAINT "Payments_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Orders" ("orderId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "RestaurantMenuItems_name_key" ON "RestaurantMenuItems"("name");

-- CreateIndex
CREATE UNIQUE INDEX "RestaurantMenus_name_key" ON "RestaurantMenus"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Restaurants_name_key" ON "Restaurants"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Deliveries_name_key" ON "Deliveries"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Payments_orderId_key" ON "Payments"("orderId");
