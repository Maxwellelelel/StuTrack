import psycopg2

#Insert your DB credentials
link = ["DB","USER", "PW"]


def getData (eingabe):
    try:
        conn = psycopg2.connect(database=link[0],
                                host="10.11.12.217",
                                user=link[1],
                                password=link[2],
                                port="5432")

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
                                host="10.11.12.217",
                                user=link[1],
                                password=link[2],
                                port="5432")

        cursor = conn.cursor()

        cursor.execute(eingabe)
        conn.commit()
        conn.close()
        return True
    except:
        return False