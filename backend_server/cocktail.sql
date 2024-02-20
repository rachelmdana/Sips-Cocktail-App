\echo 'Delete and recreate cocktail_app db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE IF EXISTS cocktail_app;
CREATE DATABASE cocktail_app;
\connect cocktail_app

\i Cocktail_DB.sql