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
    "BeRefnr" SERIAL PRIMARY KEY,
    "BeUsername" VARCHAR (50) UNIQUE NOT NULL,
    "BePassword" VARCHAR (250) NOT NULL,
    "BeName" VARCHAR (50) NOT NULL,
    "BeVorname" VARCHAR (50) NOT NULL,
    "BeEmail" VARCHAR (50) UNIQUE NOT NULL,
    "BeVersuche" INT DEFAULT 0
);

CREATE TABLE "StuTrack"."StStatus"
(
    "StRefnr" SERIAL PRIMARY KEY,
    "StBeschreibung" varchar (50)
);

create table "StuTrack"."PoProjekt"
(
    "PoRefnr" SERIAL PRIMARY KEY,
    "PoBeRefnr" INTEGER NOT NULL,
    "PoTitel" VARCHAR ( 250 ) NOT NULL,
    "PoBeschreibung" VARCHAR ( 250 ) NOT NULL,
    "PoCreate" DATE NOT NULL DEFAULT CURRENT_DATE,
    "PoLastChanged" DATE NOT NULL DEFAULT CURRENT_DATE,
    "PoStatus" INTEGER DEFAULT 1
);

ALTER TABLE "StuTrack"."PoProjekt"
ADD CONSTRAINT "PoProjekt_fk_BeRefnr"
        FOREIGN KEY ("PoBeRefnr") references "StuTrack"."BeBenutzer" ("BeRefnr");

ALTER TABLE "StuTrack"."PoProjekt"
ADD CONSTRAINT "PoProjekt_fk_StRefnr"
        FOREIGN KEY ("PoStatus") references "StuTrack"."StStatus" ("StRefnr");

-- ####################################################################################
-- Insert example data:
-- ####################################################################################
INSERT INTO "StuTrack"."BeBenutzer" ("BeUsername", "BePassword", "BeName", "BeVorname", "BeEmail", "BeVersuche")
VALUES
    ('Duke', 'HASH123', 'Schlegel', 'Duke', 'duke@duke.com', 0),
    ('Ben', 'HASH123', 'Roehrig', 'Ben', 'ben@ben.com', 0),
    ('Max', 'HASH123', 'Pechmann', 'Maximilian', 'max@max.com', 0),
    ('Jonas', 'HASH123', 'Boehme', 'Jonas', 'jonas@jonas.com', 0),
    ('Laura', 'HASH123', 'Mueller', 'Laura', 'laura@example.com', 0),
    ('Markus', 'HASH123', 'Schneider', 'Markus', 'markus@example.com', 0),
    ('Julia', 'HASH123', 'Fischer', 'Julia', 'julia@example.com', 0),
    ('Simon', 'HASH123', 'Koch', 'Simon', 'simon@example.com', 0),
    ('Lena', 'HASH123', 'Bauer', 'Lena', 'lena@example.com', 0),
    ('Sarah', 'HASH123', 'Mayer', 'Sarah', 'sarah@example.com', 0),
    ('Tom', 'HASH123', 'Wagner', 'Tom', 'tom@example.com', 0),
    ('Anna', 'HASH123', 'Hoffmann', 'Anna', 'anna@example.com', 0),
    ('Michael', 'HASH123', 'Schmidt', 'Michael', 'michael@example.com', 0),
    ('Sophie', 'HASH123', 'Schulz', 'Sophie', 'sophie@example.com', 0),
    ('Paul', 'HASH123', 'Krause', 'Paul', 'paul@example.com', 0),
    ('Carolin', 'HASH123', 'Neumann', 'Carolin', 'carolin@example.com', 0),
    ('Felix', 'HASH123', 'Becker', 'Felix', 'felix@example.com', 0),
    ('Lisa', 'HASH123', 'Schuster', 'Lisa', 'lisa@example.com', 0),
    ('Andreas', 'HASH123}', 'Hahn', 'Andreas', 'andreas@example.com', 0);

INSERT INTO "StuTrack"."StStatus" ("StBeschreibung")
VALUES
    ('Aktiv'),
    ('Storniert'),
    ('Abgeschlossen');

INSERT INTO "StuTrack"."PoProjekt" ("PoTitel", "PoBeschreibung", "PoBeRefnr")
VALUES
    ('Test1', 'StuTrack', 1),
    ('Test2', 'Erstes Testprojekt (automatisch)', 2),
    ('Test3', 'Zweites Testprojekt (automatisch)', 3),
    ('Test4', 'Drittest Testprojekt (automatisch)', 4),
    ('Test5', 'Viertes Testprojekt (automatisch)', 5);