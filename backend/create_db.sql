-- ####################################################################################
-- Create database tables:
-- ####################################################################################
DO $$
    BEGIN
        IF EXISTS (SELECT 1 FROM pg_namespace WHERE nspname = 'StuTrack') THEN
            DROP SCHEMA "StuTrack" CASCADE;
        END IF;
        CREATE SCHEMA "StuTrack";
    END $$;

CREATE TABLE "StuTrack"."BeBenutzer" (
    BeRefnr SERIAL PRIMARY KEY,
    BeUsername VARCHAR (50) UNIQUE NOT NULL,
    BePassword VARCHAR (250) NOT NULL,
    BeName VARCHAR (50) NOT NULL,
    BeVorname VARCHAR (50) NOT NULL,
    BeEmail VARCHAR (50) UNIQUE NOT NULL,
    BeVersuche INT DEFAULT 0
);

-- ####################################################################################
-- Insert example data:
-- ####################################################################################
INSERT INTO "StuTrack"."BeBenutzer" (BeUsername, BePassword, BeName, BeVorname, BeEmail, BeVersuche)
VALUES
    ('Duke', '{user.hashPw('HASH123')}', 'Schlegel', 'Duke', 'duke@duke.com', 0),
    ('Ben', '{user.hashPw('HASH123')}', 'Roehrig', 'Ben', 'ben@ben.com', 0),
    ('Max', '{user.hashPw('HASH123')}', 'Pechmann', 'Maximilian', 'max@max.com', 0),
    ('Jonas', '{user.hashPw('HASH123')}', 'Boehme', 'Jonas', 'jonas@jonas.com', 0),
    ('Laura', '{user.hashPw('HASH123')}', 'Mueller', 'Laura', 'laura@example.com', 0),
    ('Markus', '{user.hashPw('HASH123')}', 'Schneider', 'Markus', 'markus@example.com', 0),
    ('Julia', '{user.hashPw('HASH123')}', 'Fischer', 'Julia', 'julia@example.com', 0),
    ('Simon', '{user.hashPw('HASH123')}', 'Koch', 'Simon', 'simon@example.com', 0),
    ('Lena', '{user.hashPw('HASH123')}', 'Bauer', 'Lena', 'lena@example.com', 0),
    ('Sarah', '{user.hashPw('HASH123')}', 'Mayer', 'Sarah', 'sarah@example.com', 0),
    ('Tom', '{user.hashPw('HASH123')}', 'Wagner', 'Tom', 'tom@example.com', 0),
    ('Anna', '{user.hashPw('HASH123')}', 'Hoffmann', 'Anna', 'anna@example.com', 0),
    ('Michael', '{user.hashPw('HASH123')}', 'Schmidt', 'Michael', 'michael@example.com', 0),
    ('Sophie', '{user.hashPw('HASH123')}', 'Schulz', 'Sophie', 'sophie@example.com', 0),
    ('Paul', '{user.hashPw('HASH123')}', 'Krause', 'Paul', 'paul@example.com', 0),
    ('Carolin', '{user.hashPw('HASH123')}', 'Neumann', 'Carolin', 'carolin@example.com', 0),
    ('Felix', '{user.hashPw('HASH123')}', 'Becker', 'Felix', 'felix@example.com', 0),
    ('Lisa', '{user.hashPw('HASH123')}', 'Schuster', 'Lisa', 'lisa@example.com', 0),
    ('Andreas', '{user.hashPw('HASH123')}', 'Hahn', 'Andreas', 'andreas@example.com', 0);