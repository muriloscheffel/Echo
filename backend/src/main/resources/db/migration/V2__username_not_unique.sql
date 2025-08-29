-- Remover a constraint UNIQUE da coluna username
ALTER TABLE users
    DROP CONSTRAINT users_username_key;

-- Permitir valores nulos na coluna username
ALTER TABLE users
    ALTER COLUMN username DROP NOT NULL;
