-- CreateTable
CREATE TABLE "items" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "game_id" BIGINT NOT NULL,
    "names" TEXT NOT NULL,
    "kind" TEXT NOT NULL,
    "rarity" INTEGER NOT NULL DEFAULT 0,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "monsters" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "game_id" BIGINT NOT NULL,
    "names" TEXT NOT NULL,
    "species" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "weapons" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "game_id" BIGINT NOT NULL,
    "kind" TEXT NOT NULL,
    "names" TEXT NOT NULL,
    "rarity" INTEGER DEFAULT 0,
    "attack_raw" INTEGER DEFAULT 0,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "armor_sets" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "game_id" BIGINT NOT NULL,
    "names" TEXT NOT NULL,
    "rarity" INTEGER NOT NULL DEFAULT 0,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "items_game_id_key" ON "items"("game_id");

-- CreateIndex
CREATE UNIQUE INDEX "monsters_game_id_key" ON "monsters"("game_id");

-- CreateIndex
CREATE UNIQUE INDEX "weapons_game_id_key" ON "weapons"("game_id");

-- CreateIndex
CREATE UNIQUE INDEX "armor_sets_game_id_key" ON "armor_sets"("game_id");
