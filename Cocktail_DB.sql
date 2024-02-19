CREATE TABLE "Cocktail" (
    "id" INT PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "category" VARCHAR(255),
    "alcoholic" BOOLEAN,
    "glass" VARCHAR(255),
    "instructions" TEXT,
    "image_url" TEXT
);

CREATE TABLE "Ingredient" (
    "id" INT PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL
);

CREATE TABLE "Cocktail_Ingredient" (
    "cocktail_id" INT,
    "ingredient_id" INT,
    "measure" VARCHAR(255),
    FOREIGN KEY ("cocktail_id") REFERENCES "Cocktail" ("id"),
    FOREIGN KEY ("ingredient_id") REFERENCES "Ingredient" ("id"),
    PRIMARY KEY ("cocktail_id", "ingredient_id")
);

CREATE TABLE "User" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR(255) NOT NULL UNIQUE,
    "password" VARCHAR(255) NOT NULL,
    "favorited_cocktails" INT[],  -- Array of cocktail IDs
    CONSTRAINT "uc_User_username" UNIQUE ("username")
);

CREATE TABLE "UserBar" (
    "user_id" INT REFERENCES "User" ("id"),
    "liquor" VARCHAR(255) NOT NULL,
    PRIMARY KEY ("user_id", "liquor")
);
