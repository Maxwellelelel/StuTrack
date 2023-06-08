import psycopg2
import configparser

link = []

config = configparser.ConfigParser()
config.read('credentials.ini')
for key in config['SERVER']:  
    link.append(config['SERVER'][key])

def getData (eingabe):
    try:
        conn = psycopg2.connect(database=link[0],
                                host=link[3],
                                user=link[1],
                                password=link[2],
                                port=link[4])

        cursor = conn.cursor()

        cursor.execute(eingabe)
        output = cursor.fetchall()
        conn.close()
        return output
    except:
        return None

def insertData(eingabe):
    try:
        conn = psycopg2.connect(database=link[0],
                                host=link[3],
                                user=link[1],
                                password=link[2],
                                port=link[4])

        cursor = conn.cursor()

        cursor.execute(eingabe)
        conn.commit()
        conn.close()
        return True
    except:
        return False
    
def createProjectJSON(eingabe):
    out = {
        "title": eingabe[0],
        "description": eingabe[1],
        "owners": eingabe[2],
        "users": eingabe[3]
    }
    return out

def createOverviewJSON(eingabe):
    out = []
    for i in eingabe:
        helpOut = {
            "title": i[0],
            "description": i[1],
            "owners": i[2],
        }
        out.append(helpOut)
    return out