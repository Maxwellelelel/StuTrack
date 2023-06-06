from AAAhelpers import getData,insertData, link
import hashlib

#### Internal Funktions ####
def hashPw(clearPassword):
    clearPassword = str(clearPassword)
    hashedPassword = hashlib.sha256(clearPassword.encode('utf-8')).hexdigest()
    return hashedPassword


#### Exported Funktions ####
def login(username, clearPassword):
    credentials = getData(f"""
        SELECT beusername, bepassword, beversuche, berefnr 
        FROM {link[0]}.\"StuTrack\".\"BeBenutzer\" 
        WHERE beusername = \'{username}\'
        """)
    
    hashedPassword = hashPw(clearPassword)

    if len(credentials) == 0:
        return {'message':'Error: account does not exist'}
    
    if int(credentials[0][2]) == 3:
        return {'message':'Error: account is locked'}
    

    if hashedPassword == credentials[0][1]:
        versuche = 0
        updateData = f"UPDATE {link[0]}.\"StuTrack\".\"BeBenutzer\" SET BeVersuche = {versuche} where BeRefnr = {credentials[0][3]}"
        insertData(updateData)
        return {'message':'Login was successful'}
    else:
        versuche = credentials[0][2] + 1
        updateData = f"UPDATE {link[0]}.\"StuTrack\".\"BeBenutzer\" SET BeVersuche = {versuche} where BeRefnr = {credentials[0][3]}"
        insertData(updateData)
        return {'message':'Wrong Password'}

def register(username, password, lastName, firstName, email):
    inputData = f"""
        INSERT INTO {link[0]}.\"StuTrack\".\"BeBenutzer\" (BeUsername, BePassword, BeName, BeVorname, BeEmail)
        VALUES ('{username}', '{hashPw(password)}', '{lastName}', '{firstName}', '{email}') 
    """
    if insertData(inputData):
        return {'message':f'Account for {username} was successfully created'}
    else:
        return {'message':f'An Error occured'}



if __name__=="__main__":
    #print(register("Ben2", "HASH123", "Roehrig", "Ben","ben@ben.de"))
    print(login("Ben2","HASH123"))
    pass
