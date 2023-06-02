
def testen():
    print('\n\n')
    print('------------------Test beginnt!-------------------')
    print('\n')
    print('------------------AAAHelpers.py wird importiert-------------------')
    try:
        from AAAhelpers import insertData
    except:
        print('Fehler beim import von AAAhelpers.py')
        return False
    print('------------------AAAHelpers.py erfolgreich importiert-------------------')
    print('------------------user.py wird importiert-------------------')
    try:
        import user
    except:
        print('Fehler beim import von user.py')
        return False
    print('------------------user.py erfolgreich importiert-------------------')
    print('------------------backend.py wird importiert-------------------')
    try:
        import backend
    except:
        print('Fehler beim import von backend.py')
        return False
    print('------------------backend.py erfolgreich importiert-------------------')
    print("------------------Datenbank wird angelegt-------------------")
    if insertData(f"""
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

    """) == None:
        print("""
        Es ist ein Fehler aufgetreten: Richtige DB und Username eingeben im AAAhelpers.py file und dann erneut versuchen!""")
        return False
    else:
        print('------------------Datenbank erfolgreich angelegt-------------------')
    
    print('------------------User.py wird getestet-------------------')
    testUser = user.login('Tom', 'HASH123')
    if testUser != {'message':'Login was successful'}:
        print(f'{testUser} --> Fehler in login() in User.py')
        return False
    else:
        print('------------------login() erfolgreich getestet-------------------')
    
    testUser = user.register('Maja', user.hashPw("HASH123"), "Mueller", "Maja", "maja@example.com")

    if testUser != {'message':f'Account for Maja was successfully created'}:
        print(f'{testUser} --> Fehler in register() in User.py')
        return False
    else:
        print('------------------register() erfolgreich getestet-------------------')
    
    print('------------------user.py erfolgreich getestet-------------------')

    print('------------------backend.py wird getestet-------------------')
    try:
        testUser = backend.user_login('Tom', 'HASH123')
    except:
        print('Fehler bei Funktionsaufrufen in backend.py')
        return False
    
    print('------------------backend.py erfolgreich getestet-------------------')

    print('\n')
    print('------------------Test erfolgreich Beendet!-------------------')
    print("Du kannst nun 'uvicorn restapi:app --reload' in deinem Terminal eingeben und damit die API starten.")
    print('\n\n')
    return True

testen()
           


