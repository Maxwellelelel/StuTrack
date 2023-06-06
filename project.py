from AAAhelpers import getData, link, createProjectJSON, createOverviewJSON
def getProject(projekt_id):
    eingabe = []
    db_request = getData(f"""
                        SELECT "PoTitel", "PoBeschreibung" 
                        FROM {link[0]}."StuTrack"."PoProjekt" 
                        WHERE "PoRefnr" = {projekt_id}""")
    eingabe.append(db_request[0][0])
    eingabe.append(db_request[0][1])

    admins = []
    db_request = getData(f"""
                        SELECT B."BeUsername"
                        FROM "StuTrack"."PoZuweisung"
                        INNER JOIN "StuTrack"."BeBenutzer" B on B."BeRefnr" = R."PoZuBeRefnr"
                        WHERE R."RoRefnr" = 1
                        AND R."PoZuPoRefnr" = {projekt_id}""")
    for i in range(0,len(db_request)):
        admins.append(db_request[i][0])
    eingabe.append(admins)

    users = []
    db_request = getData(f"""
                        SELECT B."BeUsername"
                        FROM "StuTrack"."PoZuweisung"
                        INNER JOIN "StuTrack"."BeBenutzer" B on B."BeRefnr" = R."PoZuBeRefnr"
                        WHERE R."RoRefnr" = 2
                        AND R."PoZuPoRefnr" = {projekt_id}""")
    for i in range(0,len(db_request)):
        users.append(db_request[i][0])
    eingabe.append(users)
    return createProjectJSON(eingabe)

    

def getOverview():
    liste = getData(f"SELECT \"PoRefnr\" FROM {link[0]}.\"StuTrack\".\"PoProjekt\"")
    out = []
    for i in liste:
        projekt_id = i[0]
        eingabe = []
        db_request = getData(f"SELECT \"PoTitel\", \"PoBeschreibung\" FROM {link[0]}.\"StuTrack\".\"PoProjekt\" WHERE \"PoRefnr\" = {projekt_id}")
        eingabe.append(db_request[0][0])
        eingabe.append(db_request[0][1])

        admins = []
        db_request = getData(f"""
                            SELECT B."BeUsername"
                        FROM "StuTrack"."PoZuweisung"
                        INNER JOIN "StuTrack"."BeBenutzer" B on B."BeRefnr" = R."PoZuBeRefnr"
                        WHERE R."RoRefnr" = 1
                        AND R."PoZuPoRefnr" = {projekt_id}""")
        
        for i in range(0,len(db_request)):
            admins.append(db_request[i][0])
            eingabe.append(admins)
        pass
        out.append(eingabe)

    return createOverviewJSON(out)

if __name__ == "__main__":
    #print(getOverview())
    pass
