from fastapi import FastAPI, responses
import backend

app = FastAPI()

@app.get('/')
async def home():
    return {"Hello world hallo jonas"}

@app.get('/user/login')
async def user_login(username: str, password: str):
    return backend.user_login(username, password)

@app.post('/user/register')
async def user_register(username: str, password: str, lastName: str, firstName: str, email: str):
    return backend.user_register(username,password,lastName,firstName,email)
