CREATE TABLE "Cocktail" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "category" VARCHAR(255),
    "alcoholic" BOOLEAN,
    "glass" VARCHAR(255),
    "instructions" TEXT,
    "image_url" TEXT
);

CREATE TABLE "Ingredient" (
    "id" SERIAL PRIMARY KEY,
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
    "username" VARCHAR(50) NOT NULL UNIQUE,
    "password" VARCHAR(50) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "favorited_cocktails" INT[],  -- Array of cocktail IDs
    CONSTRAINT "uc_User_username" UNIQUE ("username")
);

CREATE TABLE "UserBar" (
    "user_id" INT REFERENCES "User" ("id"),
    "liquor_id" INT REFERENCES "Ingredient" ("id"),
    "brand_name" VARCHAR(255) NOT NULL,
    "category" VARCHAR(255),
    PRIMARY KEY ("user_id", "liquor_id")
);
